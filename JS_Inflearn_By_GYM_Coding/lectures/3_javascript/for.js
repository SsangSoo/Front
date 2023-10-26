'use strict';
//
// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }
//
// // 배열 안의 값을 출력
// let fruits = ['사과', '배', '바나나', '포도', '딸기'];
//
// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

////// for...in
// 객체에 있는 키 항목들을 반복적으로 반환
let person = {
    name: '홍길동',
    age: 25,
    job: '개발자',
};

// let key = prompt('어떤 값을 출력할까요? 키를 입력해주세요');
// // 키의 값에 따른 value를 출력한다.
// console.log(person[key]);

// let keys = Object.keys(person); // key들을 배열로
// console.log(keys);

// 객체를 기본 for문
// for(let i = 0; i < keys.length; i++) {
//     // console.log(keys[i]);
//     let key = keys[i];
//     console.log('person[',key,'] : ', person[key]);
// }
//
// // 객체를 for in문으로
// console.log('-----------');
// // 위의 내용을 for..in을 통해서 더 쉽게 접근 가능
// for(let key in person) {
//     console.log(person[key]);
// }

////// for of 문 // 배열출력시 용이할 듯(?)
// console.log('-----------');
let fruits = ['사과', '배', '바나나', '포도', '딸기'];
for (let fruit of fruits) {
    console.log(fruit);
}