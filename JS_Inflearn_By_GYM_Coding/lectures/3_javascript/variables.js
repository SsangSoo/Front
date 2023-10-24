'use strict';

// // 변수 선언
// let teacher = '짐코딩';
// console.log(teacher);
//
// // 변수에 값 재하다
// teacher = '홍길동';
// console.log(teacher);
//
// // 이미 선언한 변수는 선언 못 함.
// // let teacher = '짐길동';
//
// // 상수 선언
// const username = '짐코딩';
// console.log(username);
//
// // 상수엔 값을 재할당 못함.
// // username = 'change';



//// 스코프
// {
//     let a = 'a 변수';
//     console.log('local a:', a);
//     {
//         let a = 'a 변수2';
//         let c = 'c 변수';
//         console.log('local c블록 a:', a);
//     }
// }
// console.log('global a:', a);

// function sum(a, b) {
//     let result = a + b;
//     return result;
// }
// 스코프 범위 벗어남 블록 안에서만 써야함.
// console.log(result);


//// 식별자 이름 - 자바랑 같음.
// 반드시 글자나 달러($), 밑줄(_)로 시작해야함.(자바랑 같음)

//// 네이밍 규칙
// 카멜케이스 스네이크 케잇
// 캐밥 케이스 대쉬(-)로 단어간 구분
// 파스칼 케이스 : 단어 합칠 때 앞문자부터 대문자(자바 클래스 선언할 때)

//// var의 문제점
// 선언 전에 사용가능
// console.log(number); // (값은 찍히지 않음 - 밑에 이유가 나와있지만, 변수의 선언만 최상단으로 호이스팅 되기 때문
// var number = 2; // var 사용시 에러 안 남

// 여러번 선언 가능 (???!! 또랑쓰임)
// var number = 2;
// var number = 3;
// console.log(number);

// 블록 안에서 선언한 변수가 밖에서 사용가능
// {
//     var number = 2;
//     var number = 3;
// }
// console.log(number);
// 이게 되네;; ㅁㅊ..


//// 호이스팅
// 변수나 함수의 선언이 자바스크립트 파일의 최 상단으로 끌어올려지는 것
// var로 선언한 변수만 호이스팅이 발생함.
// var, function으로 선언된 함수를 호이스팅 발생
// 함수 호이스팅
// console.log(sum(1, 2));  // 함수 사용 전에 가능함.
// function sum(num1, num2) { // 내부적으로 최상단으로 끌어올림
//     return num1 + num2;
// }
// var 호이스팅
// console.log(number); // var 사용시 변수의 선언만 최상단으로 호이스팅 되기 때문
// var number = 2;
// let, const는 호이스팅 발생하지 않음.
// let number = 2;

// console.log(print()); // 사용 불가 // let에 함수를 담으면 호이스팅 발생 X
// let print = function () {
//
//     return 'hello';
// }
// console.log(print());   // 출력 OK

//// Strict Mode
// Strict Mode가 아니면, 아래와 같이 선언하지도 않았는데, 값을 할당 가능 // 미쳤음.
// 이것을 방지하려면, js 파일 최상단에 'use strict'; 작성하면 됨.
// 아래의 내용이 'use strict'; 가 없으면 출력되지만, 위에 선언하므로 에러 발생
// number = 1;
// console.log(number);