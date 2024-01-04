let integer = 10;
let double = 10.12;
let negative = -20;

console.log("integer => ", typeof integer);     // number
console.log("double => ", typeof double);       // number
console.log("negative => ", typeof negative);   // number

let binary = 0b01000001;
let octal = 0o101;
let hex = 0x41;

console.log(binary);
console.log(octal);
console.log(hex);
console.log("binary === octal : ", binary === octal);   // true
console.log("octal === hex : ", octal === hex);         // true

// 자스는 모든 수에 대한 경우를 실수로 처리함.

console.log("1 === 1.0 : ", 1 === 1.0);
console.log(4 / 2);
console.log(3 / 2);


// Infinity : 양의 무한대
// -Infinity : 음의 무한대
// NaN : 산술 연산 불가(not-a-number)

console.log("10 / 0 => ", 10 / 0);
console.log("10 / -0 => ", 10 / -0);
console.log("1 * 'String' => ", 1 * 'String'); // NaN > 대소문자 구분하므로, NAN , Nan, nan은 안 된다.

let x = nan;    //ReferenceError: nan is not defined
console.log(x);


