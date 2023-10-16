let addBtn = document.getElementById('button'); // button 타입의 Id를 가져온다.
let addBeforeBtn = document.getElementById('before');
let inputBox = document.querySelector('input');

console.log(inputBox.value);

addBtn.addEventListener('click', function () {
  // ------------------------------
  // 버튼에 이벤트를 더한다.
  // alert('hello');
  // ------------------------------
  let li = document.createElement('li'); // li 태그를 만든다.
  let ul = document.querySelector('ul'); // ul 태그를 가져와서
  li.textContent = inputBox.value; // li 태그에 input의 값을 넣는다.
  ul.appendChild(li); // ul 태그 하위에 li태그를 넣는다.
});

addBeforeBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetLi = document.querySelector('#target');
  console.log(targetLi);
  li.textContent = inputBox.value;
  // ul.appendChild(li);
  ul.insertBefore(li, targetLi); // ul 태그 하위에서 첫번째 매개변수의 요소를 두 번째 매개변수의 요소 앞에 집어넣는다.
});
