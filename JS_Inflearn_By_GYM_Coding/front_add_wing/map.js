'use strict';

import { numbers, students } from "./data.js";

//// map() => 배열을 순회
// const number = [1, 2, 3, 4, 5, 6, 7];
//
// // const result = number.map(function (number) {
// // const result = number.map((number) => {
// //     return number * 2;
// // });
// const result = number.map((number) => number * 2);
// console.log(result);
//
//
// class Student {
//     constructor(name, koreanLanguage, english, mathematics) {
//         this.name = name;
//         this.koreanLanguage = koreanLanguage;
//         this.english = english;
//         this.mathematics = mathematics;
//     }
// }
//
// const student1 = new Student('홍길동', 95, 87, 75);
// const student2 = new Student('김길동', 67, 80, 100);
// const student3 = new Student('고길동', 89, 75, 80);
// const student4 = new Student('최길동', 48, 52, 98);
//
// const students = [student1, student2, student3, student4];

// students.map((student) => {
//     return student.english;
// });

console.log(
    '영어 점수',
    students.map((student) => student.english)
);

console.log(
    '학생 이름',
    students.map((student) => student.name)
);
console.log(
    '국어 이름',
    students.map((student) => student.koreanLanguage)
);
console.log(
    '수학 이름',
    students.map((student) => student.mathematics)
);

