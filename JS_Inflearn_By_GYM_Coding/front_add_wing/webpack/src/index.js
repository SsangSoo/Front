import a_number from './a.js';
import b_number from './b.js';
import c_number from './c.js';
console.log("a_number : ", a_number);
console.log("b_number : ", b_number);
console.log("c_number : ", c_number);


const $buttonA = document.querySelector('#button_a'); // 하이폰과 대시 차이로.. 삽질
const $buttonB = document.querySelector('#button_b');
const $buttonC = document.querySelector('#button_c');
const $display = document.querySelector('#display');

$buttonA.addEventListener('click', function () {
    $display.textContent = a_number;
});

$buttonB.addEventListener('click', function () {
    $display.textContent = b_number;
});

$buttonC.addEventListener('click', function () {
    $display.textContent = c_number;
});
