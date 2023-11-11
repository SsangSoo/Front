//  모듚 내보내기
// exports.perfectScore = 100; // exports로 내보내기 가능
//
// exports.sum = (num1, num2) => {
//     return num1 + num2;
// };
//
//
// exports.avg = (num1, num2) => {
//     return (num1 + num2) / 2;
// };
//
//
// exports.subtract = (num1, num2) => {
//     return num1 - num2;
// };
//


perfectScore = 100; // exports로 내보내기 가능

sum = (num1, num2) => {
    return num1 + num2;
};

avg = (num1, num2) => {
    return (num1 + num2) / 2;
};

subtract = (num1, num2) => {
    return num1 - num2;
};

module.exports = {
    perfectScore,
    sum,
    avg,
    subtract,

}