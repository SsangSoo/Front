'use strict';

// // 배열 'new' 키워드로 생성 - 실무에서 잘 안씀
// // const fruits = new Array('사과', '바나나', '딸기');
// // console.log('fruits : ', fruits);
//
//
// // 배열 생성
// // const fruits = ['사과', '바나나', '딸기','사과','바나나','파인애플'];
// // console.log('fruits : ', fruits);
// // console.log(fruits);
// //
// //
// // console.log(fruits[0]);
// // console.log(fruits[1]);
// // console.log(fruits[2]);
// // fruits[2] = '포도';
// // console.log('fruits[2]를 변경');
// // console.log(fruits[2]);
//
// // 배열에서 자주 사용하는 API
// // 배열 길이를 가져옴 // length
// // console.log('fruits.length : ', fruits.length);
// // const fruits = ['사과', '바나나', '딸기','사과','바나나','파인애플'];
// // console.log('마지막 값 : ', fruits[fruits.length-1]); // 인덱스 5번에 접근하여 파인애플
// // console.log('마지막 값 : ', fruits[fruits.length]); // 6번째 값은 없으므로, undefined가 출력됨.
//
//
// // push()
// // 값을 끝에 추가함.
//
// const fruits = ['사과', '바나나', '딸기','파인애플'];
//
// fruits.push('귤');
// console.log(fruits);
//
// // foreach() // 파라미터 안에 함수를 넣어줌.
// fruits.forEach(function (item, index ){
//     // console.log(index);
//     console.log(index, item);
// });
//
// // pop() : 맨마지막 요소 제거 - 자바의 스택 클래스의 pop과 유사함.
// // let removedItem = fruits.pop(); // 귤제거
// // console.log('removedItem :', removedItem);
// // removedItem = fruits.pop(); // 파인애플 제거
// // console.log('removedItem :', removedItem);
// // console.log('제거완료 후 남은 요소 : ', fruits);
//
// // shift() : 앞에서부터 제거
// // fruits.shift(); // 사과 제거
// // fruits.shift(); // 바나나도 제거
// // console.log('제거완료 후 남은 요소 : ', fruits);
//
// // unshift() : 앞에서부터 추가 - push() 반대
// fruits.unshift('수박');
// console.log('요소 추가 후 : ', fruits);
//
// // indexOf() : 인덱스 찾기
// const index = fruits.indexOf('파인애플');
// console.log('파인애플 인덱스 : ', index);
// // 없는 요소는 -1을 반환
// const indexTomato = fruits.indexOf('토마토');
// console.log('토마토 인덱스(없어서 -1): ', indexTomato); // -1
//
//
// console.log(fruits);    // ['수박', '사과', '바나나', '딸기', '파인애플', '귤']
// // splice() : 인덱스 몇번 부터 몇번까지 제거
//
// //////////
// // fruits.splice(1,1); // 사과 제거 // 1번부터 1개 제거 // 뒤에 있는 매개변수는 해당 인덱스부터 제거할 요소 개수 지정함.
// // console.log(fruits);   // ['수박', '바나나', '딸기', '파인애플', '귤']
//
// ////////// 사과와 바나나 제거
// // fruits.splice(1,2); // 사과와 바나나 제거 // 인덱스 1번부터 2개의 요소 제거
// // console.log(fruits);   // ['수박', '딸기', '파인애플', '귤']
//
// // indexOf를 이용한 파인애플 제거
// const fineApple = fruits.indexOf('파인애플');
// console.log('fineApple_index : ', fineApple);
// // fruits.splice(fineApple, 1); // 파인애플'만' 제거
// fruits.splice(fineApple, 1); // 파인애플'만' 제거
// console.log(fruits);
//
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //// 구조 분해 할당
// let fruits = ['사과', '바나나', '딸기'];
// let apple = fruits[0];
// let banana = fruits[1];
// let strawberry = fruits[2];

// 구조 분해 할당으로~
// let [apple, banana, strawberry] = ['사과', '바나나', '딸기', 'a,', 'b', 'c'];
// a,b,c는 더 이상 담지 못하므로, 아래와 같이 ...others를 선언하여 할당해준다.
//
// let [apple, banana, strawberry, ...others] = ['사과', '바나나', '딸기', 'a,', 'b', 'c'];
// console.log(apple);
// console.log(banana);
// console.log(strawberry);
// console.log('others = ',others);

//// spread Syntax (전개 구문)
// let fruits = ['사과', '바나나', '딸기'];
// let items = [...fruits]; // 배열 변수 앞에 '...'을 붙여서 다 넣을 수 있음.
// let items = ['ABC', ...fruits, '파인애플','수박']; // 배열 변수 앞에 '...'을 붙여서 다 넣을 수 있음. 심지어 다른 요소도 다양하게 추가 가능
// console.log('items', items);

// let fruits1 = ['사과', '바나나', '딸기'];
// let fruits2 = ['파인애플', '수박'];
// let items = [...fruits1, ...fruits2]; // 값이 확장됨
// console.log(items);


//// Rest parameters
// print('a', 'b', 'c','d','e','f'); // 함수 호이스팅 때문에 선언 전에 작동함.

// function print(value1, value2, value3) {
//     console.log(value1);
//     console.log(value2);
//     console.log(value3);
// }
// 요소가 몇개인지 모르고, 배열롤 받을 때 '...values' 형태로 받으면 된다.
// function print(...values) {
//     // console.log(values[0]);
//     // console.log(values[1]);
//     // console.log(values[2]);
//     // a~f까지 출력하려면 foreach 사용하면 됨.
//     values.forEach(function (value, index) {
//         console.log('index : ', index, ' values : ', value);
//     });
// }
// Rest Prameters는 무한히 확장 가능한 매개변수를 "배열로 받을 수 있는 것"이다.

// 얕은 복사(Shallow copy)
// let source = ['사과', '바나나', '딸기'];
// let target = source;
// target[0] = '파인애플';                // target의 0번 인덱스만 바꿨음에도 불구하고,
// console.log('source : ', source);   // source에도 0번 인덱스 요소가 파인애플로 변경되어있다.
// console.log('target: ', target);    // 얕은 복사가 일어났는데, 이는 target에 값들을 넘긴 것이 아니라, source의 주소값을 넘겼기 때문이다.

// 깊은 복사(Deep copy)
// 1. 전개 구문을 활용
// let source = ['사과', '바나나', '딸기'];
// let target = [...source];
// target[0] = '파인애플';
// console.log('source : ', source);
// console.log('target: ', target);  // target에만 파인애플로 변경됨.

// 2. Array의 from 메서드로도 깊은 복사 가능
// let source = ['사과', '바나나', '딸기'];
// let target = Array.from(source);
// target[0] = '파인애플';
// console.log('source : ', source);
// console.log('target: ', target);  // target에만 파인애플로 변경됨.

// 3. slice 메서드 활용
// let source = ['사과', '바나나', '딸기'];
// let target = source.slice();
// target[0] = '파인애플';
// console.log('source : ', source);
// console.log('target: ', target);  // target에만 파인애플로 변경됨.