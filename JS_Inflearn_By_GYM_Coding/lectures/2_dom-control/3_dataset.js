let h2 = document.querySelector('h2');
h2.dataset.test = 'hello Javascript!';
console.log('h2.dataset.test: ', h2.dataset.test);

let img = document.querySelector('img');
let liList = document.querySelectorAll('li'); // li태그요소를 전부 얻어온다.
let selected = document.querySelector('.selected-item');

// liList[0].addEventListener('click', function (event) {
//   // 내가 한것
//   // li 태그에서 이벤트를 더한다.
//   // let imgTag = document.querySelector('img'); // img태그를 얻어서,
//   // imgTag.setAttribute('src', liList[0].dataset.img); // img태그의 src에 값을 넣는다.

//   // // alert('hello');
//   img.setAttribute('src', event.target.dataset.img); // img 태그를 위에서 얻어와서 src의 값을 데이터속성에 맞게 바꾼다.

//   // 과일 선택시 h2요소의 '과일을 선택해주세요'를 과일이름으로 바꾸게
//   selected.textContent = event.target.textContent;
// });

// 리팩터링
liList[0].addEventListener('click', selectItem);
liList[1].addEventListener('click', selectItem);
liList[2].addEventListener('click', selectItem);

// 함수 보너스
function selectItem(event) {
  // 과일 선택시 h2요소의 '과일을 선택해주세요'를 과일이름으로 바꾸게
  selected.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
}
