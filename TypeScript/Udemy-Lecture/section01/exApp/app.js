function add(n1, n2, showResult, phrase) {
    // if(typeof n1 !== 'number' || typeofn2 !== 'number') {
    //     throw new Error("Incorrect input")
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
