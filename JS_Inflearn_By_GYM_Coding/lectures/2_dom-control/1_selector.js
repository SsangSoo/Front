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

let h2 = document.querySelector('#title');
console.log('h2: ', h2);

let item = document.querySelector('.item');
console.log('item: ', item);

let itemAll = document.querySelectorAll('.item');
console.log('itemAll: ', itemAll);
console.log('itemAll[0]', itemAll[0]);
console.log('itemAll[1]', itemAll[1]);
console.log('itemAll[2]', itemAll[2]);
