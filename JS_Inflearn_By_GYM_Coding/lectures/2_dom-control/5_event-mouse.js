let rectangle = document.querySelector('#rectangle');

// // 마우스 눌렀을 때
// rectangle.addEventListener('mousedown', function (event) {
//   console.log('mousedown');
// });
// // 마우스 눌렀다가 '땟을 때'
// rectangle.addEventListener('mouseup', function (event) {
//   console.log('mouseup');
// });
//
// // 마우스가 영역에 진입했을 때
// rectangle.addEventListener('mouseenter', function (event) {
//   console.log('mouseenter');
// });
//
// // 마우스가 영역에 '진입한 상태에서 나올 때'
// rectangle.addEventListener('mouseleave', function (event) {
//   console.log('mouseleave');
// });
//
// // 마우스가 들어간 상태에서 움직일 때
// rectangle.addEventListener('mousemove', function (event) {
//   console.log('mousemove');
// });
//

// x,y 좌표 찍기
  // 좌측 상단이 0,0 // 우측으로 가면 x축 증가, 아래쪽으로 가면 y축 증가
// rectangle.addEventListener('mousedown', function (event) {
//   console.log('clientX: ', event.clientX, ' clientY : ', event.clientY);
// });
//
// // 페이지 x, y 찍기
// rectangle.addEventListener('mousedown', function (event) {
//   console.log('pageX: ', event.pageX, ' pageY : ', event.pageY);
// });
// x,y 좌표 표기와 페이지 x,y 찍기의 값은 동일함.
// 클라이언트는 브라우저 기준,
// 페이지는 전체페이지 기준

// 좌표를 누르면 빨간 동그라미가 나오게 하기
// let body = document.querySelector('body');
// body.addEventListener('click', function (event) {
//   console.log('pageX: ', event.pageX, ' pageY : ', event.pageY);
//   let div = document.createElement('div');
//   div.classList.add('circle');
//   div.style.left = (event.pageX-25) + 'px';
//   div.style.top = (event.pageY-25) + 'px';
//   body.appendChild(div);
// })

// 마우스 눌렀다가 '땟을 때'
// rectangle.addEventListener('mousedown', function (event) {
//   // console.log('mousedown');
//   console.log(event.target.getBoundingClientRect()); // 이 요소의 크기와 위치를 알고싶을 떄 사용.
// });


