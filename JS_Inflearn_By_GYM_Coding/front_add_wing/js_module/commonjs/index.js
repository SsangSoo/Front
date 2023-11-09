const { perfectScore, sum, avg, subtract} = require('./math');


console.log('perfectScore : ', perfectScore);  // import한 math를 이용해서 접근
console.log('sum : ', sum(80, 10));
console.log('avg : ', avg(80, 90));
console.log('subtract : ', subtract(80, 90));