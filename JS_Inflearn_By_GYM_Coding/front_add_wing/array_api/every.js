'use strict';

import {numbers, students, fruits} from "./data.js";


// every()
// 배열을 순회하면서 배열 안의 모든 요소가 참일 경우에만 통과한다.
// 하나라도 false라면, false이다.

console.log(
    '숫자가 모두 8이하인가요?',
    numbers.every((number) => number <= 8)
);

console.log(
    '학생들의 수학 점수가 모두 80점 이상인가요?',
    students.every((student) => student.mathematics >= 75)
);





