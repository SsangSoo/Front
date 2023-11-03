// console.log('Hello world');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function () {
//     alert('Hello World'); // 에러 발생
// });

// index.html의 script 태그에서 defer이 없으면 바로 에러가 발생한다.
    // 브라우저에서 index.html을 만나면 위에서 아래로 순차대로 코드를 파싱하면서 읽는다.
        // 파싱하면서 script 태그를 만나면 script파일을 가져온다.
        // script파일을 가져오면 여기 코드를 실행한다.
            // 그런데, html의 body에 button태그가 있다고 가정했을 때,
                // button태그가 있으면 브라우저에서 태그를 파싱한 후에 button 요소(DOM요소)를 생성한다.
                // 그런데, 파싱하기 전에 script 태그를 만나는데,
                // 이 script 태그에 버튼요소가 없기 때문에 에러가 발생한다.
// console.log('Hello world');
// let btn = document.querySelector('#btn');
// console.log(btn); // null이 주어진다.

// 원래는 body 태그 최 하단에서 script를 로드하도록 했다.
    // 아~ 그래서 script가 밑에 있구나..
    // 그래서 html요소들을 다 파싱하고, DOM요소로 생성한 이후에, script가 정상적으로 수행되도록 하기 위해서 최하단에 선언했었음.

// console.log('Hello world');
// let btn = document.querySelector('#btn');
// console.log(btn); // null이 주어진다.
// btn.addEventListener('click', function () {
//     alert('Hello World'); // 에러 발생
// });

// body 태그 최하단에 선언하는 것 말고 다른방법!
//// load 이벤트 리스너를 등록한다.
    // window.onload를 사용한다.
    // HTML 파싱 DOM 생성 그리고 외부 컨탠츠(images, script, css, etc)가 로드된 후에 발생하는 이벤트이다.
window.onload = function () {
    let btn = document.querySelector('#btn');
    btn.addEventListener('click', function () {
        alert('Hello World'); // 에러 발생
    });
}
// script 태그는