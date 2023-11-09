const perfectScore = 100;

const sum = (num1, num2) => {
    return num1 + num2;
}

const avg = (num1, num2) => {
    return (num1 + num2) / 2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}


// export default subtract; // default export시 (index.js에서 확인)
export default {
    perfectScore,
    sum,
    avg,
    subtract
};