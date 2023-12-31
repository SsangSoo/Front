'use strict';

// 정사각형(5*5)
// *****
// *****
// *****
// *****
// *****

let text = '';
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        text = text + '*';
    }
    text = text + '\n';
}
console.log(text);

// 삼각형 1 ... 12345
// *
// **
// ***
// ****
// *****
text = '';
for(let i = 0; i < 5; i++) {
    for(let j = 0; j <= i; j++) {
        text = text + '*';
    }
    text = text + '\n';
}
console.log(text);

// 역삼각형 12345....1
// *****
// ****
// ***
// **
// *
text = '';
for(let i = 5; i > 0; i--) {
    for(let j = 0; j < i; j++) {
        text = text + '*';
    }
    text = text + '\n';
}
console.log(text);


// 삼각형 5...12345
//     *
//    **
//   ***
//  ****
// *****
text = '';
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        if(i+j >= 4) {
            text = text + '*';
        } else {
            text = text + ' ';
        }
    }
    text = text + '\n';
}
console.log(text);


// 삼각형 12345....5
// *****
//  ****
//   ***
//    **
//     *
text = '';
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        if(j >= i) {
            text = text + '*';
        } else {
            text = text + ' ';
        }
    }
    text = text + '\n';
}
console.log(text);


// 정삼감형
//      *
//     ***
//    *****
//   *******
//  *********
text = '';
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 9; j++) {
        if(4-i <= j && j <= 4+i) {
            text = text + '*';
        } else {
            text = text + ' ';
        }
    }
    text = text + '\n';
}
console.log(text);

// 정삼각형-reserve
//  *********
//   *******
//    *****
//     ***
//      *
text = '';
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 9; j++) {
        if(i <= j && j < 9-i) {
            text = text + '*';
        } else {
            text = text + ' ';
        }
    }
    text = text + '\n';
}
console.log(text);


// 다이아몬드
//         *
//        ***
//       *****
//      *******
//     *********
//      *******
//       *****
//        ***
//         *
text = '';
for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
        if((i <= 4 && (4-i) <= j && j <= (4+i)) || (i > 4 && (i-4) <= j && j < (9-(i-4)))) {
            text = text + '*';
        } else {
            text = text + ' ';
        }
    }
    text = text + '\n';
}
console.log(text);
