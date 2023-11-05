/*
 * 1) 추가하기
 * 2) 삭제하기
 * 3) 전체삭제
 * 4) 리스트 보여주기
 */

const $inputBox = document.querySelector('#input-box');
const $addBtn = document.querySelector('#add-btn'); // $ << HTML DOM객체란 것을 구분하기 위해 '$'를 사용
const $todoList = document.querySelector('#todo-list');
const $todoCount = document.querySelector('#todo-count');
const $clearAll = document.querySelector('#clear-all');
let todoList = [];


$inputBox.addEventListener('keyup', function (e) {
    if(e.target.value) {
        $addBtn.classList.add('active');
    } else {
        $addBtn.classList.remove('active');
    }
});

function appenTodoItem(todoItem) {
    const $li = document.createElement('li');
    const $span = document.createElement('span');
    const $i = document.createElement('i');
    $i.classList.add('fa-solid', 'fa-trash'); // span 태그 하위에 있어야 함.
    // $span.setAttribute('icon'); // 아래와 같음
    $span.classList.add('icon');
    $span.appendChild($i);
    $span.addEventListener('click', deleteTask);
    $li.textContent = todoItem.value;
    $li.dataset.id = todoItem.id;
    $li.appendChild($span);
    $todoList.appendChild($li);
}

$addBtn.addEventListener('click', function () {
    const todoItem = {
        id: Date.now(), // Date.now() : 현재시간을 밀리세컨드로 반환해준다.
        value: $inputBox.value,
    }
    todoList.push(todoItem);
    localStorage.setItem('todoList', JSON.stringify(todoList)); // 검사-Application-Local storage에 있음.
    appenTodoItem(todoItem);
    // 카운트 변경
    updatTodoCount();
    // input box clear
    $inputBox.value = "";
    $addBtn.classList.remove('active');
    // 전체 삭제 버튼 활성화
    activeClearAll();

});

function deleteTask(e) {
    // console.log(e.target.parentNode); // 이모티콘을 정확히 누르면, span태그를 가져온다. 내가 가져와야 되는 것은 li태그이다.
    // console.log(e.currentTarget.parentNode);
    // console.log('target : ', e.target);               // 스코프 상관없이 실제 타겟을 가져옴.
    // console.log('cuurentTarget : ', e.currentTarget); // 이벤트 리스너가 등록된 타겟을 가져옴.

    const $li = e.currentTarget.parentNode;
    const deleteId = parseInt($li.dataset.id);
    const deleteIndex = todoList.findIndex((item) => item.id === deleteId);
    todoList.splice(deleteIndex, 1); // 배열에서 제거 하는 함수 // 첫번째 매개변수는 인덱스를, 두번쨰는 첫번째 매개변수의 인덱스로부터 몇개를 제거할 건지에 대한 값
    localStorage.setItem('todoList', JSON.stringify(todoList));

    $li.remove();
    updatTodoCount();
    const $itemList = $todoList.querySelectorAll('li');
    activeClearAll();


}

// 전체 삭제
$clearAll.addEventListener('click', function () {
    $todoList.innerHTML = '';
    $todoCount.textContent = 0;
    todoList = [];
    localStorage.removeItem('todoList');
    activeClearAll();
});

//---------------------------------

// JSON은 표현식이고, 타입은 String이다.
// JSON.stringify(객체);  << 형식으로 집어넣으면,
// JSON 포맷으로 객체가 표현되고, 그 JSON의 타입은 문자열이 된다.

// localStorage.setItem('todoList', JSON.stringify(object)); // 로컬스토리지에 JSON을 저장한다.
// localStorage.getItem('todoList'); // 로컬스토리지에 저장된 JSON을 불러올 수 있다.

// JSON을 다시 Object로 하려면,
// JSON.parse(JSON);
// 이를 typeof으로 확인해보면 Object가 나온다.


//---------------------------------

// 전체삭제 버튼 활성화 여부 함수
function activeClearAll() {
    if(todoList.length === 0) {
        $clearAll.classList.remove('active');
    } else {
        $clearAll.classList.add('active');
    }
}

// count 함수
function updatTodoCount() {
    $todoCount.textContent = todoList.length;
}

// 새로고침시!
function showTasks() {
    const todoItems = localStorage.getItem('todoList');
    if(todoItems) {
        todoList = JSON.parse(todoItems);
        for(let todoItem of todoList) {
            appenTodoItem(todoItem);
        }
        $clearAll.classList.add('active');
    }
    activeClearAll();
    updatTodoCount();
}
showTasks();