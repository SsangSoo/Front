

// this는 객체를 가리킴
// this는 호출한 놈이다.

// 호출한 놈이 없을 경우, this는 window이다.
// let person = {
//     fullname : '김성수',
//     age : 20,
//     printThis: function () {
//         console.log(this);
//         console.log('this === person' , this === person);
//         console.log('this === window' , this === window);
//     },
// }
// // person.printThis();
// let printThis = person.printThis; // 함수를 변수에 할당
// printThis();


// window 전역객체는 브라우저창 즉, 자바스크립트로 브라우저를 제어할 수 있도록 브라우저에서 재공하는 전역객체.
// 앞에서 호출한 놈이 없을 경우 기본적인 전역 객체는 window이다.

function printThis() {
    console.log(this); // default thile => window
}
printThis();

//// 각각 자기가 자기자신을 부르고 있음.
////
let person1 = {
    name: '홍길동1',
    printThis: printThis,
};
person1.printThis(); // this는 person1(name이 홍길동으로 찍힘.

let person2 = {
    name: '홍길동2',
    printThis: printThis,
};
person2.printThis();

let person3 = {
    name: '홍길동3',
    printThis: printThis,
};
person3.printThis();

//// 6분~!