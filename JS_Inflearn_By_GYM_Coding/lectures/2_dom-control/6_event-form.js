let inputBox = document.querySelector('#input-box');

// // keypress : 키보드 누르면 발생함.
// inputBox.addEventListener('keypress', function (event) {
//     console.log('keypress');
// })
//
// // 키다운
// inputBox.addEventListener('keydown', function (event) {
//     console.log('keydown');
// })

// 키업 : 키보드가 눌려져 있다가 땔 때 발생함
// inputBox.addEventListener('keyup', function (event) {
//     console.log('keyup');
// })

// inputBox.addEventListener('keyup', function (event) {
//     console.log('event.key : ', event.key);         // 어떤 키보드로 쳤는지 확인 가능
//     console.log('event.keyCode : ', event.keyCode); // 아스키코드로 확인 가능함.
// })

// focus
// inputBox.addEventListener('focus', function (event) {
//       alert('focus');
// });

// blur
// inputBox.addEventListener('blur', function (event) {
//     alert('blur');         // 어떤 키보드로 쳤는지 확인 가능
// })

// change - 체크박스, 라디오박스, 셀렉트 박스에서 자주 쓰임.
// inputBox.addEventListener('change', function (event) {
//     console.log('change');
// });


let img = document.querySelector('img');

// error를 이용함
img.addEventListener('error', function (eve) {
    console.log('error');
    event.target.src = "../../img/apple.jpg";
});

