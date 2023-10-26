'use strict';

// 문자열 결합 법칙(자바랑 같음)
let text = '';
// console.log(1 + 2);
// console.log('javascript ' + 'hello');
// console.log('javascript ' + 2);


// continue
// 요소 넘김
for(let i = 0; i < 10 ; i++) {
    // 만약 3을 빼고 싶다면
    if(i == 3) {
        // continue;
        break;
    }
    text = text + i;
    // console.log(`text[${i}]: `, text);
}
console.log(text);
