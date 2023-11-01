'use strict';

//// 객체 생성
// 객체 리터럴 문법
// const person = {
//     name: '김성수',
//     age: 25
// };
// 객체 생성자 문법
/////////////// ??????????!!!!!!!! 이게 된다고??!! ㅁㅊ...
// const person = new Object();
// person.name = '김성수';
// person.age = 30;
// const person = {
//     name: '김성수',
//     age: 25
// };
// person.job = '개발자'; // 이게 들어감..;; // 현업에선 안 한다고 함.
// console.log(person);
//

// 객체 프로퍼티 접근법
// const person = {
//     name: ['Bob', 'Smith'],
//     age: 32,
//     gender: 'male',
//     interests: ['music', 'health'],
//     hello: function () {
//         alert('Hello');
//     },
//     greeting: function () {
//         alert('Hi!');
//     },
//     hobby: {
//         name: 'programing',
//         alert: function () {
//             alert('programing');
//         }
//     },
// };
// console.log(person.name); // (2) ['Bob', 'Smith']
// console.log(person.name[0]); // Bob
// console.log(person.name[1]); // Smith
// person.hello();
// console.log(person.hobby.name);
// console.log(person.hobby.alert());
// console.log(person['name']);        // (2) ['Bob', 'Smith']
// person['name'][0] = '값 변경';       // 값 변경
// console.log(person['name'][0]);     // Bob
// console.log(person['name'][1]);     // Smith
// // person['hello'](); // 객체 내의 함수호출
// console.log(person['hobby']['name']);
// person['hobby']['alert'](); // 객체 내의 객체의 함수호출
// console.log(person);

//// 프로퍼티 접근법
// 위와 같이 점표기법과 괄호표기법으로 접근한다.
// delete person.name    // person객체의 name제거 : 점표기법
// delete person['age']; // person객체의 age제거 : 괄호표기법
// console.log(person);

// 함수 파라미터로 객체 전달하기
// function printPerson(person) {
//     console.log(`제 이름은 ${person.name}이며, 나이는 ${person.age}살입니다. 그리고 취미는 ${person.hobby}입니다.`);
// }

// const person = {
//     name: '김성수',
//     age: 25,
//     hobby: '컷잉하기'
// };
// printPerson(person);

/// 아래는 배열의 구조분해할당
// const fruits = ['사과', '딸기', ' 포도'];
// const [a, b] = fruits;
// console.log(a); // 사과
// console.log(b); // 딸기

// //// 객체에서의 구조 분해 할당 - 순서가 아닌 키값에 맞춰서 값을 가져옴.
// const { hobby, name, age}  = person;
// console.log('name : ', name);
// console.log('age : ', age);
// console.log('hobby : ', hobby);

// //// 함수로 구조분해 할당
// function printPerson({ hobby, name, age}) {
//     console.log(`제 이름은 ${person.name}이며, 나이는 ${person.age}살입니다. 그리고 취미는 ${person.hobby}입니다.`);
// }
//
// const person = {
//     name: '김성수',
//     age: 25,
//     hobby: '컷잉하기'
// };
// printPerson(person);

// //// 팩토리함수
// 같은 유형의 객체를 여러 번 생성해야하는 일이 생길 수 있음.
// 이 때 사용하면 유용하다
// function printPerson({ hobby, name, age}) {
//     console.log(`제 이름은 ${name}이며, 나이는 ${age}살입니다. 그리고 취미는 ${hobby}입니다.`);
// }
// function printPerson(person) {
//     console.log(`제 이름은 ${person.name}이며, 나이는 ${person.age}살입니다. 그리고 취미는 ${person.hobby}입니다.`);
// }

// function createPerson(name, age, hobby) {
//     return {
//         name: name,
//         age : age,
//         hobby:  hobby
//     }
// }
//
// const person1 = createPerson('김성수1', 1, '암거나');
// const person2 = createPerson('김성수2', 2, '암거나');
// const person3 = createPerson('김성수3', 3, '암거나');
// const person4 = createPerson('김성수4', 4, '암거나');
// const person5 = createPerson('김성수5', 5, '암거나');
// const person6 = createPerson('김성수6', 6, '암거나');
// const person7 = createPerson('김성수7', 7, '암거나');
// const person8 = createPerson('김성수8', 8, '암거나');
// const person9 = createPerson('김성수9', 9, '암거나');
// const person10 = createPerson('김성수10', 10, '암거나');
// const person11 = createPerson('김성수11', 11, '암거나');
// printPerson(person1);
// printPerson(person2);
// printPerson(person3);
// printPerson(person4);

// ES6에서 추가된 근축속성명
// 변수로 값을 할당시 키, 값, 키, 값이 동일한 경우 하나로 쓸 수 있음.
// function createPerson(name, age, hobby) {
//     return {
//         name: name,
//         age : age,
//         hobby:  hobby
//     }
// }
// 위의 팩토리 함수를 아래와 같이 사용가능
// function createPerson(name, age, hobby) {
//     return {
//         name,
//         age,
//         hobby
//     }
// }

// 자스애서 클래스 만들기(간단히)
// function person(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
// }
//
// const personClass = new Person('김길동', '1', '아무거나');

// 위의 내용은 ES5
// 아래의 내용은 ES6
// class Person {
//     constructor(name, age, hobby) {
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
// }
// const personClass = new Person('김길동', '1', '아무거나');

//// 참조 타입(Reference type)
// Primitive type은 값 그 자체가,
// Reference type은 객체의 주소값이 들어있음

////////////////////////////////////////
// Call by Value vs Call by Reference //
////////////////////////////////////////
// Call by Value
// let username = '김성수';
// console.log(username);  // 김성수
// changeName(username);
// console.log(username);  // 김성수
//
// function changeName(name) {
//     name = '홍길동';
//     console.log(name);
// }
// console.log('------------');

// Call by Reference
// let person = {
//     name: '김성수',
//     age: 25
// };
// console.log(person);    // 김성수, 25
// changePersonName(person);
// console.log(person);    // 홍길동, 30
// // 호이스팅으로 인해서 뒤에 있어도 됨.
// function changePersonName(people) {
//     person.name = '홍길동';
//     person.age = 30;
// }
//


////// 객체 복사
// let person1 = {
//     name: '김성수',
//     age: 25
// };
// let person2 = person1;
// person2.name = '홍길동'; // person1 도 바뀜.
// console.log(person1);   // 왜냐하면,
// console.log(person2);   // 주소값을 그대로 넘겼기 때문임.

// const person1 = {
//     name: '김성수',
//     age: 25
// };
// person1.name = '홍길동'; // const로 하였음에도, 값이 바뀜.
// console.log(person1);   // 주소값이 가리키는 요소가 바뀐 것이지, '주소값' 그 자체가 바뀌는 것이 아니기 때문에 가능.


// 객체를 복사해서 복사된 객체의 값만 변경하고 싶은데,
// 원본 객체까지 바뀌는 경우를 고민한다면, 전개구문을 사용하면된다.
// 전개구문 - Spread operator
// const person1 = {
//     name: '김성수',
//     age: 25
// };
// // 전개구문
// let person2 = {... person1};
// person2.name = '홍길동';
// console.log(person1); // 김성수
// console.log(person2); // 홍길동

// // Object.assign()을 활용
// const person1 = {
//     name: '김성수',
//     age: 25
// };
// const person2 = Object.assign({}, person1);
// person2.name = '홍길동';
// console.log(person1); // 김성수
// console.log(person2); // 홍길동

// for ... in 객체에 있는 키 항목들을 반복적으로 반환
// const person = {
//     name: '김성수',
//     age: 29,
//     job: '개발자'
// };
// for(let key in person) { // person의 key들을 돈다. // 객체명 맞춰야 함.
//     console.log(`key : ${key}, value : ${person[key]}`);
// }

// // 객체의 키 존재 여부확인
// const person = {
//     name: '김성수',
//     age: 29,
//     job: '개발자'
// };

// 일부러 for ... in을 사용해봄.
// for(let key in person) {
//     for(let i = 0; i < 2; i++) {
//         key += i === 0 ? '' : i;
//         if (key in person) {
//             console.log(`${key}은/는  존재하며, value은/는 ${person[`${key}`]}입니다.`);
//         } else {
//             console.log(`${key}은/는 존재하지 않습니다.`)
//         }
//     }
// }

//// object.hasOwnProperty // object = 생성된 객체 변수
//// Object.hasOwn          // 실제 Object 클래스 (자바로는 스태틱 메서드)
const person = {
    name: '김성수',
    age: 29,
    job: '개발자'
};
console.log(person.hasOwnProperty('name')); // true
console.log(Object.hasOwn(person,'name')); // true

// if문에서도 판단가능
if(person.name) {
    console.log('true111'); // 있기 때문에 true
}
if(person.name2) {
    console.log('true222') // name2는 정의되어있지 않으므로 즉, undefined이기 때문에 출력되지 않는다.
}


// 일부러 for ... in을 사용해봄.
// for(let key in person) {
//     for(let i = 0; i < 2; i++) {
//         key += i === 0 ? '' : i;
//         // if (person.hasOwnProperty(key)) {
//         if (Object.hasOwn(person, key)) {
//             console.log(`${key}은/는  존재하며, value은/는 ${person[`${key}`]}입니다.`);
//         } else {
//             console.log(`${key}은/는 존재하지 않습니다.`)
//         }
//     }
// }