const math = require('./math');

// console.log('perfectScore : ', perfectScore);  // import한 math를 이용해서 접근
// console.log('sum : ', sum(80, 10));
// console.log('avg : ', avg(80, 90));
// console.log('subtract : ', subtract(80, 90));

console.log('perfectScore : ', math.perfectScore);  // import한 math를 이용해서 접근
console.log('sum : ', math.sum(80, 10));
console.log('avg : ', math.avg(80, 90));
console.log('subtract : ', math.subtract(80, 90));


// common JS는 노드환경에서 확인한다.