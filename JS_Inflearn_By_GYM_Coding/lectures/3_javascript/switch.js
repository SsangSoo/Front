'use strict';


// // switch문은  break를 적절히 써야함.
//
// // let subject = 'javascript';
// let subject = 'html';
// // let subject = 'css';
//
// switch (subject) {
//     case 'javascript' :
//         console.log('javascript 안녕!');
//         let result = 1+2;
//         console.log('result  ', result);
//         // break;
//     case 'html':
//         console.log('html 안녕');
//         // break
//     case 'css' :
//         console.log('css 안녕');
//         // break;
//     default:
//         console.log('default 수행문입니다.');
// }
//
// console.log('switch문 종료');
//



// 밑의 내용을 스위치로!
// 수학 점수를 입력받아서
// 90점 이상이면 'A' 학점입니다.
// 70점 이상이면 'B' 학점입니다.
// 50점 이상이면 'C' 학점입니다.
// 그 외 'D' 학점입니다.
//

let score = prompt('수학 점수를 입력해주세요');
let value = score / 10;  // 소수점 버리기
console.log('value : ', value);

switch (Math.floor(value)) {    // Math의 함수 floor를 써서 소수점 버림
    case 10 : case 9 :
        console.log('\'A\' 학점입니다.');
        break;
    case 8 : case 7:
        console.log('\'B\' 학점입니다.');
        break;
    case 6 : case 5:
        console.log('\'C\' 학점입니다.');
        break;
    default:
        console.log('\'D\' 학점입니다.'); // default문은 break 필요없음
        // break; // default문은 break 필요없음
}
 