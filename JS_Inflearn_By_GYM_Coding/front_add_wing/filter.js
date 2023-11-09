'use strict';

import {numbers, students, fruits} from "./data.js";

// filter()
// 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

console.log(
    '짝수만 출력해주세요',
    numbers.filter((number) => number % 2 === 0)
);

console.log(
    '홀수만 출력해주세요',
    numbers.filter((number) => number % 2 === 1)
);


console.log(
    '영어 점수가 90점 이상인 학생은?',
    students.filter((student) => student.english >= 80)
);
