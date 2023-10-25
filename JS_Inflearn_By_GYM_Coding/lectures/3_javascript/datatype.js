'use strict'; // Strict Mode

//// 기본형

/// 숫자타입
// 자스는 타입 상관없이 let과 const로 가능하다.

// let number = 2;
// const number2 = 1.2;
// console.log(number2);

/// 숫자에서 특별한 값
// console.log(5 / 0);     // Infinity     // 양수를 0으로 나눈 값
// console.log(-5 / 0);    // -Infinity    // 음수를 0으로 나눈 값
// console.log('hello' / 5); // NaN
// let nan = 'hello' / 5;
// console.log(nan);           // Nan
// console.log(typeof nan);    // number 타입 // 숫자가 아닌 값을 나누는 경우

/// 문자열

// 템플릿 문자열
// 작은따옴표('), 큰따옴표("), 백틱(`)으로 감싼다.
// 백틱(`)은 ES6에 도입된 문법임.
// const name1 = '홍길동';
// const name2 = "홍길동";
// const name3 = `홍길동`;
// const name = `홍길동`;
// const age = 25;

// console.log('안녕하세요 제 이름은 '+ name + '입니다. 나이는 ' + age + '살입니다.'); // 작은 따옴표 혹은 큰따옴표
//
// console.log('-------------------------------------');
// console.log(
//     `안녕하세요 제 이름은 ${name}입니다. 나이는 ${age}살입니다.` // 백틱으로 감쌈
// );

//////////////////////////////////////
// const message = `안녕하세요
//
// 이렇게 표현할 수 있어요 백틱으로!`;
// console.log(message);

/// 이스케이프 표현
//// 역슬래시를 사용해서 작은 따옴표와 개행을 문자열 안에 넣을 수 있다.
// const hello = `안녕하세요\n제 이름은 \'홍길동\'입니다`;
// console.log(hello);

 
//// boolean 
// true, false 두 가지 밖에 없는 데이터 타입
// const isProgrammer = true;
// const isDesign = false;
// console.log(`isProgrammer : `, isProgrammer, typeof isProgrammer);
// console.log(`isDesign : `, isDesign, typeof isDesign);
//
// 제어문 안에서 분기를 표현할 때 주로 사용됨.
// if(isProgrammer) {
//     console.log('프로그래머입니다.');
// } else {
//     console.log('디자이너입니다.');
// }

//// Symbol
// 유일한 토큰을 나타내기 위한 ES6에서 도입한 새 데이터 타입
// 심볼은 항상 유일한 값
// 실무에선 많이 사용하지 않고, 유일한 값을 나타낼 때 사용
// const KIM_JOB = Symbol('My job is Programmer');
// const TOM_JOB = Symbol('My job is Programmer');
// console.log('KIM_JOB == TOM_JOB = ', KIM_JOB == TOM_JOB);


// //// null과 undefined
// // 둘 다 값이 비어있는 상태
// // null은 값이 없는 상태
// // undefined는 값을 할당하지 않은 상태
// // null 예시
// const username = null;
// console.log(`username : `, username); // null
//
// // const username2;                         // const로 선언시 값을 반드시 할당해야 하므로, let으로 선언해야 함.
// let username2;
// console.log(`username2 : `, username2); // undefined
//
// //// 신기한 건 null로 할당했음에도 불구하고, typeof를 찍으면 object로 나옴.
// console.log(`username : `, typeof username); // object // javascript 버그라고 함.
// // null은 object인데, 객체타입이 아니라, 기본타입이다.
// // mdn에서 'null은 Javascript의 원시값 중 하나로 어떤값이 의도적으로 비어있음을 표현하며, 불리안 에서는 거짓으로 취급'
// // 이라고 되어있다.
//
// //// undefined 라는 값을 할당할 수도 있음.
// // 값을 할당하지 않은 상태를 undefined라고 하는데, 값을 할당하는 건 그리 바람직하진 않은 거 같음..
// // 빈값을 줄 때는 null을 할당하는 것이 좋음
// let username3 = undefined;
// console.log(`username3 : `, username3);
// console.log(`typeof username3 : `, typeof username3);

//// 객체타입(Object Type)
// 객체는 값을 여러 개 저장 가능하다.

const person = {
    name: '홍길동',
    age: 25,
    isProgramer: true,
    say() {
        console.log('Hello~!');
    },
};

const arr = [1, 2, 3, 4, 5];

console.log(arr.length);
arr.push(88);
console.log(arr);

// 객체의 포인트!
//// 객체는 값을 여러 개 저장가능하다.
//// 다양한 Property를 가질 수 있다.
// 그리고 객체는 그룹핑되고 그 변수값에는 그룹핑한 값이 저장되어있는 메모리 주소를 가진다.

// person => #0x01 -> { nane: 홍길동, age: 25 } // 이런 식으로..


// 기본형(Primitive 타입)은 값을 하나만 가질 수 있지만,
// 객체는 여러 개 가질 수 있다.


