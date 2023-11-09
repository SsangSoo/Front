'use strict';

import {numbers, students, fruits} from "./data.js";


//// some() => 배열을 순회하면서 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트
// 다 거짓이면 false



// console.log('과일 중에 배가 있나요?',
//     fruits.some((fruit) => {
//         return fruit === '배'
//     }));
console.log(
    '과일 중에 배가 있나요?',
    fruits.some((fruit) => fruit === '배')
);

console.log(
    '숫자에 7 이상인 숫자가 있나요?',
    numbers.some((number) => number >= 7)
);

console.log(
    '수학 점수가 100점인 학생이 있나요?',
    students.some((student) => student.mathematics === 100)
);

console.log(
    '영어 점수가 50점 미만 학생이 있나요?',
    students.some((student) => student.english < 50)
);

// 두번째 인자로는 인덱스를 받을 수 있다.
console.log(
    '과일 중에 배가 있나요?',
    fruits.some((fruit, index) => {
        console.log('index :', index, "fruit : ", fruit);
        return fruit === '배';
    }) // 0, 1, 2 출력 후, 2가 '배'이고, true를 리턴하므로 2까지만 출력한다.
);