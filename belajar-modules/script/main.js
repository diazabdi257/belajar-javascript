console.log('Learning modules..')

import * as combine from './combine.js';
// import { sayHI, sayHola } from './greeting.js';
const { sayHI, sayHola } = await import ('./greeting.js');

console.log(combine.calc.penjumlahan(2,2));
console.log(combine.namaSaya());

sayHI ();
sayHola();
