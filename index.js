const factorialOfNumber = require('../factorial/index')
const ratiOfTwoNumbers = require('../ratio/index')

const ratioAndFactorial = (a, b, c) => {
  const ratio = ratiOfTwoNumbers(a, b);
  const factorial = factorialOfNumber(c);
  return {ratio,factorial};
};

let obj=ratioAndFactorial(8,4,5);
console.log(obj);
module.exports = ratioAndFactorial;
