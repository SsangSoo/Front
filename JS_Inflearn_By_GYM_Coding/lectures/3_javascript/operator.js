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
// let x = true;
// let y = true;
// console.log(x && y); // 모두 true이므로 true
//
// x = true;
// y = false;
// console.log(x && y); // 하나라도 false 이므로 false
//
// x = false;
// y = true;
// console.log(x && y); // 하나라도 false 이므로 false
//
// x = false;
// y = false;
// console.log(x && y); // 모두 false 이므로 false
//
// // or
// x = true;
// y = true;
// console.log(x && y); // 모두 true이므로 true
//
// x = true;
// y = false;
// console.log(x || y); // 하나라도 true 이므로 true
//
// x = false;
// y = true;
// console.log(x || y); // 하나라도 true 이므로 true
//
// x = false;
// y = false;
// console.log(x || y); // 모두 false 이므로 false


// not
// x = true;
// console.log(!x); // true의 not이므로 false
//
// x = false;
// console.log(!x); // false의 not이므로 true


////// 로그인 구현
// let btn = document.querySelector('#btn'); // 아이디 실별자 '#'
// let emailEl = document.querySelector('[name=email]');
// let passwordEl = document.querySelector('[name=password]');
// btn.addEventListener('click', function () {
//     let email = emailEl.value;
//     let password = passwordEl.value;
//     // console.log('email : ', email === '');
//     console.log('password : ', !password);  // 빈값이면, false인데 not연산하므로 true
//
//     if(email === '' || email.includes('@') === false) {
//         console.log('이메일이 유효하지 않습니다.')
//     } else if(!password) {  // 비밀번호가 빈문자열이라면 // 입력하지 않았다면
//         console.log('비밀번호를 입력해주세요.');
//     } else if((password.length >= 8 && password.length <= 16) === false) {
//         console.log('비밀번호는 8~16자 내외입니다.');
//     } else {
//         console.log('로그인 성공!');
//     }
//
// });

// 단축평가
// and나 or에서
// and연산이라면, 앞의 피연산의 결과가 false일 때, 뒤의 값을 체크할 필요없이 false가 되는것이고,
// or연산이라면, 앞의 피연산의 결과가 true잀시 , 뒤의 값을 체크할 필요없이 true가 되는 것을 의미한다.
// 따라서 논리 연산을 수행시 간단한 연산을 앞에 두는 것이 더 효율적
    // 예를들어 (email === '' || valiedateEmail(email)) <<< 이와 같은 경우가 있을 때,
    // valiedateEmail(email) 이 5분이 걸리는 상태에서
    // valiedateEmail(email) || email === '' << 이렇게 된다면, 5분은 무조건 지나야하지만,
    // email === '' <<< 이러한 간단한 연산을 먼저 하였다면, 뒤에 내용은 체크할 필요없이 바로 결과를 도출할 수 있기 때문에,
    // 간단한 연산부터 처리하도록 하는 것이 더욱 효율적이다.

let btn = document.querySelector('#btn'); // 아이디 실별자 '#'
let emailEl = document.querySelector('[name=email]');
let passwordEl = document.querySelector('[name=password]');
// btn.addEventListener('click', function () {
//     let email = emailEl.value;
//     let password = passwordEl.value;

//     if(password && password.length === 8) { // null이거나, undefined 같은 경우 어차피 false이므로, 뒤의 연산은 하지 않는다.
//         console.log('성공');                  // 이를 활용하면 null 오류를 피해갈 수 있음
//     } else {
//         console.log('실패');
//     }
// });

// btn.addEventListener('click', function () {
//     let email = emailEl.value;
//     let password = passwordEl.value;
//     password = null;
//
//     if(password.length === 8 && password) { // 만약 null인데 조건식이 이와 같다면, null 오류가 발생한다.
//         console.log('성공');                  // null인데 length체크를 하기 때문에 오류가 발생한다.
//     } else {                                  // 따라서 (password && password.length === 8)
//         console.log('실패');                   // 이렇게 연산하는 것이 좋다.
//     }
// });


//// 삼항 연산자
let number = 7;
let message = null;
// if(number % 2 === 1) {
//     message = '홀수입니다';
// } else {
//     message = '짝수입니다.';
// }

// 위의 주석처리 된 것을 삼항연산자로 하면 다음과 같다.
message = number % 2 === 1 ? '홀수입니다' : '짝수입니다.';
console.log(message);

