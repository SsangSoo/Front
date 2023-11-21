'use strict';

// 함수 : 하나의 단위로 실행할 수 있도록 명령문을 그룹화한 것

// 함수 선언식
// 호이스팅에 영향을 받는다.
// function sayHello() {
//     console.log('이름과 나이를 출력해주세요!');
//     console.log('이름: 홍길동, 나이: 25살!');
// }

// 함수 표현식
// 호이스팅에 영향을 받지 않는다.
//  JS에서 함수는 객체이고, 객체는 변수에 담을 수 있다.
// const sayHello = function () {
//     console.log('이름과 나이를 출력해주세요!');
//     console.log('이름: 홍길동, 나이: 25살!');
// };gi



// 파라미터
// const sayHello = function (name, age) {
//     console.log('이름과 나이를 출력해주세요!');
//     console.log(`이름: ${name}, 나이: ${age}살!`);
// };
//
// sayHello('짐코딩', 20);
// sayHello('김성수', 15);

// 반환 값
// function sum(num1, num2) {
//     return num1 + num2;
// }
//
// let result = sum(5, 3);
// console.log(result);

// 스코프
// function aFunc() {
//     let name = '짐코딩';
//     let age = 20;
//     function bFunc() {
//         let job = '개발자';
//         console.log('bFunc name: ', name);
//         console.log('bFunc age: ', age);
//         console.log('bFunc job: ', job);
//     }
//     bFunc();
//     console.log('aFunc name: ', name);
//     console.log('aFunc age: ', age);
//     // console.log('job: ', job); // bFunc 안에서 선언된 변수이므로 스코프 오류로 주석해제시 에러 발생함.
// }
// aFunc();

// 익명함수
// 이름이 없음.
// 즉 재활용할 필요가 없는 함수.


// 즉시 실행 함수
// 함수의 선언과 동시에 즉시 실행하는 함수
// 예시
// (function () {
//     console.log('즉시 실행함수!!');
// })()


// 파라미터 기본값
// ES6에서 등장한 매개변수 기본값을 지정하는 방법.

// 아래와 같이 하면 undefined가 발생한다.
// function sum(num1, num2) {
//     console.log(`${num1}와 ${num2}의 합 : `,num1 + num2);
// }
// sum();

//// 기본값
// function sum(num1 = 5, num2 = 5) {  // 매개변수를 넣지않으면, num1, num2에 각각 5를 할당.
//     console.log(`${num1}와 ${num2}의 합 : `,num1 + num2);
// }
// sum(2, 5);
// sum(); // 매개변수가 없음에도 기본 값 5, 5로 들어가서 10출력


// Arrow Function(화살표 표기법) - ES6에서 추가된 문법
// 정말 자주 사용한다.

// const hello = function () {
//     console.log('Hello');
// }
// 위의 식을 화살표함수로 표현하면 아래와 같다.
// const hello = () => { // () << 괄호를 써야함.
//     console.log('Hello');
// }
// hello();

// 파라미터를 입력받을 수도 있다.
// const hello = (name) => {
//     console.log(`Hello ${name}!`);
// }
// hello('김성수');

// 만약 파라미터가 하나라면, 괄호를 생략 가능하다.
// vs코드로 입력하면, 저장시 괄호가 생긴다.
// 현재 나는 JetBrain의 WebStrom을 이용중..
// const hello = name => {
//     console.log(`Hello ${name}!`);
// }
// hello('김성수');

// 만약 명령문이 한줄이라면?
// 다음과 같이 사용가능
// const hello = name => console.log(`Hello ${name}!`); // 코드블럭 생략가능!
// hello('김성수');

// 만약 출력을 하지 않고 문자열을 리턴한다고 하면,
    // 명령문이 한 줄이고,
    // 리턴할 때 리턴을 생략할 수도 있다.
// const hello = name => {
//     return `Hello ${name}!`;
// }
// 위의 식을 아래와 같이 가능
// const hello = name => `Hello ${name}!`;
// console.log(hello('김성수'));


// 위에 있던 함수 표현식을 화살표 함수로!
// const sayHello = (name, age) => {
//     console.log('이름과 나이를 출력해주세요!');
//     console.log(`이름: ${name}, 나이: ${age}살!`);
// };
// sayHello('김성수', 7);
//
// const sum = (num1 = 5, num2 = 5) => num1 + num2;
// console.log(sum(5, 3));


// 콜백함수 : 다시 호출되는 함수
// let fruits = ['사과', '바나나', '딸기'];
// fruits.forEach(function (item, index) {
//     console.log('item = ', item);
// });

// forEach문 내의 익명함수를 외부로 뽑아서 함수로 만들고, forEach안에 넣을 수도 있다.
// function printItem(item, index) {
//     console.log('item = ', item);
// }
// fruits.forEach(printItem);

// 만약 재활용이 필요없다면,
// fruits.forEach((item, index) => console.log('item = ', item));

// 함수명명규칙!
// 함수는 동사로!
// 변수는 명사로! 짓는 것이 좋다!

//============================================================

// // 함수 선언식은 호이스팅에 영향을 받는다.
// function sayHello() {
//     console.log('이름과 나이를 출력해주세요!');
//     console.log('이름: 홍길동, 나이: 25살!');
// }

// 함수 표현식은 호이스팅에 영향을 받지 않는다.
// const sayHello = function () {
//     console.log('이름과 나이를 출력해주세요!');
//     console.log('이름: 홍길동, 나이: 25살!');
// };


// 실무의 협의된 대로 선택하면됨.