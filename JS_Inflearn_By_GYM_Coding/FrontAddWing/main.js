'use strict';

import {numbers, students, fruits} from "./data.js";

// reduce()
// 배열의 각 요소마다 리듀셔(reducer) 함수를 실행하고, 하나의 결과만 반환한다.
// 리듀셔(reducer) 함수
// 누적 값(acc)
// 현재 값(cur)
// 현재 인덱스 (idx)
// 원본 배열 (src)
// 반환 값은 누적 값에 할당되고, 최종 결과는 이 누적 값이 된다.

// const result = numbers.reduce((acc, cur, idx, src) => {
//     console.log("acc : ", acc, "cur : ", cur, "idx : ", idx, "src : ", src);
//     return acc + cur; // return 값이 acc로 저장된다.
// }, 0); // 0은 초기값
// console.log(result); // acc의 값이 반환되어 result에 담겨서 출력된다.


console.log(fruits);
const result = fruits.reduce((arr, cur) => {
    console.log("arr : ", arr, "cur : ", cur);
    if(arr.includes(cur) === false) {
        arr.push(cur);
    }
    return arr;
}, []); // 초기값 빈 배열
console.log(result);