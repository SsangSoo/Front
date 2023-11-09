// import { perfectScore, sum, avg } from './math.js';
// import * as math from './math.js'; // *로 import 받기
// import subtract2 from "./math.js"; // 이렇게 default 함수를 받을 수 있음. // 이름을 마음대로 설정 가능
import math from './math.js';

console.log('perfectScore : ', math.perfectScore);  // import한 math를 이용해서 접근
console.log('sum : ', math.sum(80, 10));
console.log('avg : ', math.avg(80, 90));
console.log('subtract : ', math.subtract(80, 90));