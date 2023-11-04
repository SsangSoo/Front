'use strict';

// this는 객체를 가리키는 키워드
// this는 호출한 놈이다.

// 호출한 놈이 없을 경우, this는 window이다.
// let person = {
//     fullname : '김성수',
//     age : 20,
//     printThis: function () {
//         console.log(this);
//         console.log('this === person : ' , this === person); // person이냐
//         console.log('this === window : ' , this === window); // window냐
//         console.log("this.fullname : ",this.fullname);
//         console.log("this.age : ",this.age );
    // },
// }
// person.printThis(); // person으로 접근하기 때문에, this가 person이냐고하면 true // window냐호 하면 X
// let printThis = person.printThis; // 함수를 변수에 할당
// printThis();    // 하지만 이 경우, 전역객체인 window에서 호출하기 때문에 person이냐고 물으면, flase, window냐고 할 때 true

// window 전역객체는 브라우저창 즉, 자바스크립트로 브라우저를 제어할 수 있도록 브라우저에서 재공하는 전역객체.
// 앞에서 호출한 놈이 없을 경우 기본적인 전역 객체는 window이다. (브라우저일 때)

// function printThis() {
//     console.log(this);
// }
// printThis(); // default thile => window
//
// //// 각각 자기가 자기자신을 부르고 있음.
// let person1 = {
//     name: '홍길동1',
//     printThis: printThis,
// };
// person1.printThis(); // this는 person1(name이 홍길동으로 찍힘.
// // this는 person1
//
// let person2 = {
//     name: '홍길동2',
//     printThis: printThis,
// };
// person2.printThis();
// // this는 person2
//
// let person3 = {
//     name: '홍길동3',
//     printThis: printThis,
// };
// person3.printThis();
// // this는 person3


// window
// 참고로 window는 브라우저에서 모든 객체를 가지고 있는 브라우저의 전역 객체
// let btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     console.log(this);
//     console.log(this == btn); // true
// });
//
// // ES5 bind
// ///// 함수 안에서 this를 임의로 다른 객체로 바꿀 때 사용
// function printThis() {      // 함수 선언
//     console.log(this);
// }
// let person1 = {     // 변수에 객체 할당
//     name : '홍길동',
// }
// printThis();   // psrson1을 통해서 printThis 호출
//
// let person2 = {     // 변수에 객체 할당
//     name: '김길동',
// }
//
// let printThis1 = printThis.bind(person1);   // printThis로 bind를 person1로 함.
// printThis1();

// let printThis2 = printThis1.bind(person2);  // person1로 바인드한 printThie1을 bind하니 안됨. // bind는 원래의 함수에 단 한번만 사용가능
// 왜 한번만 가능한지 생각해봤는데, 한번만 사용가능하다면 아마 아래와 같이 되지않을까...??
// let printThis1 = printThis.bind(person1);
// let printThis2 = printThis1.bind(person2);
// let printThis3 = printThis2.bind(person3);
// let printThis3 = printThis().bind(person1).bind(person2).bind(person3);
// 이 printThis3 처럼 되지 않을까...?

// 참고로 setTimeout에는 매개변수와 시간이 들어갈 수 있다.
    // 첫번째 매개변수로는 함수, 두번째는 milliSecond를.. milliSecond는 1000이 1초이다.
// setTimeout(function () {
//     alert('Hello');
// }, 3000); 

// let person = {
//     name: '김성수',
//     age: 26,
//     hello: function () {
//         setTimeout(function () {
//             console.log(this)
//             console.log(this.name);
//             console.log(this.age);
//         }.bind(this), 1000);
//     },
// };
// person.hello(); // person을 통해서 hello를 출력했는데, undefined가 나왔다. // 왜냐하면 window 객체이고,
// 내부에서 window 객체로 설정했던지 혹은 호출한 놈없이 호출했던지..
// 중요한 것은 window의 정체보단 이 함수를 bind 시켜줘야하는 것!
// let person = {
//     name: '김성수',
//     age: 26,
//     hello : function () {
//         function printHello() {  // 익명함수
//             console.log(this);
//             console.log(this.name);
//             console.log(this.age);
//         }
//         setTimeout(printHello(), 1000); // 원래는 window
        // setTimeout(printHello.bind(this), 1000); // person으로 호출했기 때문에, person으로 bind된다.
    // },
// }
// person.hello();

//// 예외!
// console.log(this);  // 전역스코프는 this
// console.log(this === window);   // window냐할 때 true

// 화샆표 함수와 strict Mode에서 this는 다르게 동작한다.
    // 화샆료 함수는 ES6에서 나옴.
    // 화살표 함수는 자신을 포함하는 외부 Scope에서 this를 계승받는다.
        // 외부 Scope에서 this를 물려받음.
// let person = {
//     name: '김성수',
//     age: 26,
    // hello: function () {
    //     setTimeout(function () {
    //         console.log(this);
    //     }, 1000);
    // }
    // 위 내용을 화살표 함수로 바꾸면
    // hello: function () {
    // setTimeout(() => {
    //     console.log(this);
    //     }, 1000);
    // }
    // 화살표 함수는 this를 상위 Scope의 this를 물려받기 때문에, 여기서의 this는 person이다.
// };
// person.hello();

// this는 호출한 놈이 없으면, 브라우저의 전역객체인 window를 물려받는다.
// 하지만 strict Mode를 사용하면, undefined가 나온다.

// function printThis() {
//     console.log(this); // window
// }
// printThis();

// 화살표 함수를 사용하면 안 되는 경우
 // 객체를 선언할 때 메서드도 선언하는데, 이 때 화살표함수를 사용하면, 예상과 다르다.

// let person = {
//     name: '김성수',
//     // printThis: function() { // function으로 선언하면, person을 가리키고,
//     printThis: () => {   // 화살표함수로 선언하면, window를 가리킨다.
//         console.log(this);  // window 객체 출력
//     }
// }
// person.printThis();

 // addEventListener로 화살표 함수를 선언하면, 이 때도 window함수를 카리킨다.
// 따라서 화살표 함수를 지양해야한다.