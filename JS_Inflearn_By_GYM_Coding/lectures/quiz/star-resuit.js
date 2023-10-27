'use strict';

window.onload = function () {

// 정사각형(5*5)
// *****
// *****
// *****
// *****
// *****
for(let i = 0; i < 5; i++) {
    document.write('*');
}
    document.write(`<br>`);

for(let i = 0; i < 5; i++) {
    document.write('*');
}
document.write(`<br>`);
document.write(`<hr>`);
document.write(`<br>`);



for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        document.write('*');
    }
    document.write(`<br>`);
}
document.write(`<br>`);
document.write(`<hr>`);
document.write(`<br>`);


// 삼각형 1 ... 12345
// *
// **
// ***
// ****
// *****
for(let i = 0; i < 5; i++) {
    for(let j = 0; j <= i; j++) {
        document.write('*');
    }
    document.write(`<br>`);
}
document.write(`<br>`);
document.write(`<hr>`);
document.write(`<br>`);



// 역삼각형 12345....1
// *****
// ****
// ***
// **
// *
for(let i = 5; i > 0; i--) {
    for(let j = 0; j < i; j++) {
        document.write('*');
    }
    document.write(`<br>`);
}
// 삼각형 5...12345
//     *
//    **
//   ***
//  ****
// *****
document.write(`<br>`);
document.write(`<hr>`);
document.write(`<br>`);
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        if(i+j >= 4) {
            document.write('*');
        } else {
            document.write(`&nbsp`);
        }
    }
    document.write(`<br>`);
}


// 삼각형 12345....5
// *****
//  ****
//   ***
//    **
//     *
document.write(`<br>`);
document.write(`<hr>`);
document.write(`<br>`);
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        if(j >= i) {
            document.write('*');
        } else {
            document.write(`&nbsp`);
        }
    }
    document.write(`<br>`);
}


// 정삼감형
//      *
//     ***
//    *****
//   *******
//  *********
document.write(`<br>`);
document.write(`<hr>`);
document.write(`<br>`);
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 9; j++) {
        if(4-i <= j && j <= 4+i) {
            document.write('*');
        } else {
            document.write(`&nbsp`);
        }
    }
    document.write(`<br>`);
}

// 정삼각형-reserve
//  *********
//   *******
//    *****
//     ***
//      *
document.write(`<br>`);
document.write(`<hr>`);
document.write(`<br>`);
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 9; j++) {
        if(i <= j && j < 9-i) {
            document.write('*');
        } else {
            document.write(`&nbsp`);
        }
    }
    document.write(`<br>`);
}
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
document.write(`<br>`);
document.write(`<hr>`);
document.write(`<br>`);
for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
        if((i <= 4 && (4-i) <= j && j <= (4+i)) || (i > 4 && (i-4) <= j && j < (9-(i-4)))) {
            document.write('*');
        } else {
            document.write(`&nbsp`);
        }
    }
    document.write(`<br>`);
}

}