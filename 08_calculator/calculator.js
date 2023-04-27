const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
  return a - b
	
};

const sum = function(a) {
  const startVal = 0
	const sumall = a.reduce((initVal, currNum) => initVal + currNum, startVal)
  return sumall
};

const multiply = function(a) {
  const startVal = 1
  const multiAll = a.reduce((initVal, currNum) => initVal * currNum, startVal)
  return multiAll
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
  let sum = 1
  if (a == 0){
    return 1
  }else{
    for (i = a; i >= 1; i--){
      sum *= i
    }
    return sum
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
