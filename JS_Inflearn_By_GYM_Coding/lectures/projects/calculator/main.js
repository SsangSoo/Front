const $numberButtons = document.querySelectorAll('[data-number]');
const $operationButtons = document.querySelectorAll('[data-operation]');
const $allClearButton = document.querySelector('[data-all-clear]');
const $deleteButton = document.querySelector('[data-delete]');
const $equalsButton = document.querySelector('[data-equals]');
const $previousDisplay = document.querySelector('[data-previous-operand]');
const $currentDisplay = document.querySelector('[data-current-operand]');

console.log($numberButtons);

let currentNumberStr = ''; // 전역 변수로 선언 // 이 js파일 전체에 사용하기 위해서!
let previousNumberStr = '';
let operation = null;

function getDisplayNumber(numberStr) {
    let floatNumber = parseFloat(numberStr); // 소수점으로 변환 // Float에서 천자리마다 콤마를 표시하는 메서드가 있어서 float으로 변환
    if(isNaN(floatNumber)) {
        return;
    }
    let displayNumber = floatNumber.toLocaleString('en', {  // 첫 번째 매개변수
        maximumFractionDigits: 10,  // 소수점 최대 자리
    });
    return displayNumber;
}
function updateDisplay() {
        $currentDisplay.textContent = getDisplayNumber(currentNumberStr);   // 현재 표시되는 수
    if(operation) {
        $previousDisplay.textContent = getDisplayNumber(previousNumberStr) + ' ' + operation; // 연산 키 클릭시 표시되는 수
    } else {
        $previousDisplay.textContent = '';
    }
}

$numberButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
        console.log(e.target.textContent);
        let numberStr = e.target.textContent;
        if(numberStr === '.' && currentNumberStr.includes('.')) { // '.' 이 하나라도 있으면 return
            return;
        }
        currentNumberStr = currentNumberStr + numberStr;

        // 표시하기
        updateDisplay();
    });
});

// 연산 버튼을 누르면, 현재 표시되어있는 숫자를 연산하여 위쪽에 표시되게 한다.
$operationButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
        // current가 있어야 연산이 가능함. // 없을 때 opration을 클릭하면 undefined가 나온다.
        if(!currentNumberStr) {
            return;
        }
        // 위를 통과시 current에 값이 있다는 것이 증명
        if(previousNumberStr) {
            compute();  // opration 두번째 클릭시부터 현재수, 이전 수의 연산이 연산 이전 화면에 표시된다.
        }
        previousNumberStr = currentNumberStr;
        currentNumberStr = '';
        operation = e.target.textContent; //  operation 버튼
        // 표시하기
        updateDisplay();
    });
});

function compute() {
    let prev = parseFloat(previousNumberStr);
    let curr = parseFloat(currentNumberStr);
    if (isNaN(prev) || isNaN(curr)) {
        return;
    }
    let result = null;
    switch (operation) {
        case '+' :
            result = prev + curr;
            break;
        case '-' :
            result = prev - curr;
            break;
        case '×' :
            result = prev * curr;
            break;
        case '÷' :
            result = prev / curr;
            break;
    }
    currentNumberStr = result;
    operation = null;
    previousNumberStr = '';
}

$equalsButton.addEventListener('click', function () {
    compute()
    updateDisplay();
});


function clear() {
    previousNumberStr = '';
    currentNumberStr = '';
    operation = null;
}

$allClearButton.addEventListener('click', function () {
    clear();
    updateDisplay();
});

function deleteDisplayNumber() {
    currentNumberStr = currentNumberStr.slice(0, -1); // 끝에 있는 문자열을 하나 추출한다.
}

$deleteButton.addEventListener('click', function () {
    deleteDisplayNumber();
    updateDisplay();
});

