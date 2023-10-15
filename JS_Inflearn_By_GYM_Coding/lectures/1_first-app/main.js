console.log('Hello!!!');
console.log('Hello@@@', 'wolrd!', 'javascript'); // 콘솔에 출력
console.log('안녕'); // 콘솔에 출력

// alert('Hello Javascript!'); // 경고창

// 한 줄 주석
/*  긴줄 주석 */

// 변수
let str = 'Hello Javascript';
let number = 30;
console.log('문자열 : ', str);
console.log('number: ', number);

// 함수
function sayHello() {
  console.log('Hello1');
  console.log('Hello2');
  console.log('Hello3');
}

sayHello();
console.log('--------------------');
sayHello();

// 객체
let obj = {
  number: 30, // 프로퍼티
  sayHello: function () {
    console.log('obj>Hello1');
    console.log('obj>Hello2');
    console.log('obj>Hello3');
  },
};

console.log(obj.number);
obj.sayHello();
