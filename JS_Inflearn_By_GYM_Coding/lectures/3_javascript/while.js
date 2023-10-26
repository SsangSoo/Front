'use strict';

// while문
// let count = 0;
let count = 5; // 5일 때 조건이 거짓이므로 수행 X
while(count < 5) {
    console.log(count);
    count++;
}

// do-while문
// let number = 0;
let number = 5; // 거짓이지만, 최초 한번은 수행하므로 5만 출력된다.
do {
    console.log(number);
    number++;
} while (number < 5);


// while문의 주의점!
/// 브레이크 포인트를 잘 잡아줘야한다.
//// 안 그러면 스택오버플로우 뜬다~

// let young = 0;
// while(young < 5) {
//     console.log(young);
// }

