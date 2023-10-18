let rectangle = document.querySelector('#rectangle');

// 마우스 눌렀을 때
rectangle.addEventListener('mousedown', function (event) {
  console.log('mousedown');
});


// 마우스 눌렀다가 '땟을 때'
rectangle.addEventListener('mouseup', function (event) {
  console.log('mouseup');
});

// 마우스가 영역에 진입했을 때
rectangle.addEventListener('mouseenter', function (event) {
  console.log('mouseenter');
});

// 마우스가 영역에 '진입한 상태에서 나올 때'
rectangle.addEventListener('mouseleave', function (event) {
  console.log('mouseleave');
});

// 마우스가 들어간 상태에서 움직일 때
rectangle.addEventListener('mousemove', function (event) {
  console.log('mousemove');
});