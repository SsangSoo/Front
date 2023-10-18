let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

// console.log(btn1);
// console.log(btn2);

btn1.onclick = function() {
    alert('hello 프로퍼티 리스너');
}

// 이벤트를 두 개 추가 가능
btn2.addEventListener('click',helloEvent1);
function helloEvent1() {
    alert('addEventListner 1');
}


btn2.addEventListener('click', function () {
    alert('addEventListner 2');
})

// helloEvent1 이벤트 제거
    // 이 코드로 인해서 2개가 아닌 한 개만 뜸.
btn2.removeEventListener('click', helloEvent1);