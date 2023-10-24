'use strict'; // Strict Mode

//// 기본형

/// 숫자타입
// 자스는 타입 상관없이 let과 const로 가능하다.

let number = 2;
const number2 = 1.2;
console.log(number2);

/// 숫자에서 특별한 값
console.log(5 / 0);     // Infinity     // 양수를 0으로 나눈 값
console.log(-5 / 0);    // -Infinity    // 음수를 0으로 나눈 값
// console.log('hello' / 5); // NaN
let nan = 'hello' / 5;
console.log(nan);           // Nan
console.log(typeof nan);    // number 타입 // 숫자가 아닌 값을 나누는 경우

/// 문자열

// 템플릿 문자열
// 작은따옴표('), 큰따옴표("), 백틱(`)으로 감싼다.
// 백틱(`)은 ES6에 도입된 문법임.
const name1 = '홍길동';
const name2 = "홍길동";
const name3 = `홍길동`;
const name = `홍길동`;
const age = 25;

console.log('안녕하세요 제 이름은 '+ name + '입니다. 나이는 ' + age + '살입니다.'); // 작은 따옴표 혹은 큰따옴표

console.log('-------------------------------------');
console.log(
    `안녕하세요 제 이름은 ${name}입니다. 나이는 ${age}살입니다.` // 백틱으로 감쌈
);

//////////////////////////////////////
const message = `안녕하세요

이렇게 표현할 수 있어요 백틱으로!`;
console.log(message);

/// 이스케이프 표현
// 10분 10초 ~~~