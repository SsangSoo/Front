// // 문자열 병합
// console.log('Hello ' + 'world!');   // Hello world!
// console.log('3' + 3);               // 33
// console.log(typeof ('3' + 3));      // string
// console.log('3' + 5 + 8);           // 358 // 덧셈은 왼쪽부터 진행됨
// console.log(3 + 5 + '8');           // 88 // 덧셈은 왼쪽부터 진행됨

// 산술 연산자
// let x = 10;
// let y = 20;
// console.log(x + y); // 30
// console.log(x - y); // -10
// console.log(x / y); // 0.5
// console.log(x * y); // 200
// console.log(9 % 2); // 1
// console.log(x % y); // 10

// 값을 입력받고 2로 나눈 나머지가 홀수인지 짝수인지에 대한 확인
// let number = prompt('숫자를 입력해주세요!');
// if(number%2 === 1) {
//     alert('홀수입니다!');
// } else {
//     alert('짝수입니다!');
// }


// 증감연산자
// let x = 10;
// let y = 20;
// let result = ++x + y;
// console.log('x : ', x); // 11
// console.log('y : ', y); // 20
// console.log('result : ', result); // 31

// let x = 10;
// let y = 20;
// let result = x++ + y;
// console.log('x : ', x); // 계산 후, x는 11
// console.log('y : ', y); // 20
// console.log('result : ', result); // 30

// let x = 10;
// let y = 20;
// let result = x + --y;
// console.log('x : ', x); // 10
// console.log('y : ', y); // 19
// console.log('result : ', result); // 29

// let x = 10;
// let y = 20;
// let result = x + y++;
// console.log('x : ', x); // 10
// console.log('y : ', y); // 20 계산 후, 21
// console.log('result : ', result); // 30


// 비교연산자
// let a = 20;
// let b = 30;
// console.log(a > b);     // false
// console.log(a >= b);    // false
// console.log(a < b);     // true
// console.log(a <= b);    // true

// 비교 연산자
// == : 값을 체크
// === : 데이터타입도 체크
// != : 값을 체크
// !== : 데이터타입도 체크
// let a = 30;
// let b = '30';
// console.log(a == b);    // true
// console.log(a === b);   // false
// console.log(a != b);    // false    // 값이 다름
// console.log(a !== b);   // true     // 데이터타입이 같음
//
// 현업에서는 되도록 3개를 사용함.
//
// console.log(0 == false);    // true // 엄연히 다른 의미
// console.log(0 === false);   // false


// 할당 연산자
// let x = 10; // 10
// let y = 20; // 20
// // x = x + y;  // 30 >>>>> 할당 연산자
// x += y; // 30
//
// // 할당연산자를 이용해서 1~10까지 더해보기
// let sum = 0;
// for (let i=1; i<=10; i++) {
//     sum += i;
//     console.log(`${i}번째 sum = ${sum}`); // 백틱(`) 쓰기
// }


// and
let x = true;
let y = true;
console.log(x && y); // 모두 true이므로 true

x = true;
y = false;
console.log(x && y); // 하나라도 false 이므로 false

x = false;
y = true;
console.log(x && y); // 하나라도 false 이므로 false

x = false;
y = false;
console.log(x && y); // 모두 false 이므로 false

// or
x = true;
y = true;
console.log(x && y); // 모두 true이므로 true

x = true;
y = false;
console.log(x || y); // 하나라도 true 이므로 true

x = false;
y = true;
console.log(x || y); // 하나라도 true 이므로 true

x = false;
y = false;
console.log(x || y); // 모두 false 이므로 false

console.log('===============');

// not
x = true;
console.log(!x); // true의 not이므로 false

x = false;
console.log(!x); // false의 not이므로 true

let btn = document.querySelector('#btn'); // 아이디 실별자 '#'
let emailEl = document.querySelector('[name=email]');
let passwordEl = document.querySelector('[name=password]');
btn.addEventListener('click', function () {
    let email = emailEl.value;
    let password = passwordEl.value;
    console.log('email : ', email);
    console.log('password : ', password);
} )
// 7분~