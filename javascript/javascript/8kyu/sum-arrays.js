// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// My solution
function sum(numbers) {
  let sumNum = 0;
  ("use strict");
  if (numbers.length === 0) {
    return sumNum;
  } else {
    numbers.forEach((i) => (sumNum += i));
  }
  return sumNum;
}

// Best solution
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// or

sum = function (numbers) {
  "use strict";
  return numbers.reduce(function (t, n) {
    return t + n;
  }, 0);
};
