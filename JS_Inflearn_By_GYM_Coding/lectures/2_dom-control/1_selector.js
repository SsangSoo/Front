let title = document.getElementById('title'); // Id에 의한 요소를 가져온다.
console.log(title);
title.textContent = '헬스 3대 운동';

let items = document.getElementsByClassName('item');
console.log(items);
console.log('스쿼트: ', items[0]);
console.log('벤치프레스: ', items[1]);
console.log('데드리프트: ', items[2]);

// HTML을 위와 같은 방식으로 가져올 수 있다.

let liList = document.getElementsByTagName('li');
console.log(liList);

// 위의 방법은 Get을 통한 메서드로 HTML 요소 접근

// 아래 방법은 요소 조작 혹은 제어

let h2 = document.querySelector('#title');
console.log('h2: ', h2);

let item = document.querySelector('.item');
console.log('item: ', item);

let itemAll = document.querySelectorAll('.item');
console.log('itemAll: ', itemAll);
console.log('itemAll[0]', itemAll[0]);
console.log('itemAll[1]', itemAll[1]);
console.log('itemAll[2]', itemAll[2]);

// h2.textContent = '운동!!!';
// h2.textContent = '<span>운동!!!</span>'; // span태그 그대로 표현됨
// console.log(h2.textContent);

// h2.innerHTML = '<span>운동!!!</span>';

// innerHTML 사용시 컨텐츠 안의 모든 게 지워지면서 값을 넣기 때문에 주의!
// document.querySelector('body').innerHTML = '<strong>운동</strong>';

// 태그를 가져와서 HTML 요소를 조작 및 제어
let input = document.querySelector('input');
input.setAttribute('placeholder', '헬스 운동을 입력해주세요!');
input.setAttribute('required', '');
input.removeAttribute('placeholder');
input.removeAttribute('required');

// 클래스가 속한 태그를 가져와서 제어
let helloItem = document.querySelector('.hello');
console.log('helloItem', helloItem);
// helloItem.style.color = 'white';
// helloItem.style.backgroundColor = 'black';

helloItem.classList.add('dark', 'one');
helloItem.classList.remove('dark');
