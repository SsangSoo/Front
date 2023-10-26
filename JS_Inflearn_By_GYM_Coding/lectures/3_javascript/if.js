'use strict'; // Strict Mode

// let condition = true;
// let condition = false;
// if(condition) {
    // console.log('참입니다.');
// }  else {
    // console.log('거짓입니다');
// }

// let number = 10;
// if(number > 100) {
//     console.log('참입s니다.');
// } else {
//     console.log('거짓입니다');
// }
// // alert('k'); // 창을 띄움.
// let score = prompt('수학 점수를 입력해주세요!'); // 프롬프트를 띄움
// console.log('score : ', score);


///// else-if문
// // 90점 이상 "등급은 A"
// // 80점 이상 "등급은 B"
// // 70점 이상 "등급은 C"
// // 60점 이상 "등급은 D"
// // 59점 이하 나머지 "등급은 E"

// if(score >= 90) {
//     console.log('등급은 A');
// } else if(score >= 80) {
//     console.log('등급은 B');
// } else if(score >= 70) {
//     console.log('등급은 C');
// } else if(score >= 60) {
//     console.log('등급은 D');
// } else  {
//     console.log('등급은 F');
// }

// let condition = 10; // 숫자가 아닌데도 불구하고, 참으로 들어감. // 값이 존재할 경우 참으로 간주
// 거짓같은 경우는 false, 0, null, undefined, -0, 0n(Bigint), ""(빈문자열), '', null, NaN

let condition = NaN;
if(condition) {
    console.log('true : ',condition, '참입니다.');
}  else {
    console.log('condition : ',condition,'거짓입니다');
}