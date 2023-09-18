// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 (1^2 + 2^2 + 2^2)

// My solution

function squareSum(numbers) {
  let sum = 0;
  numbers.forEach((i) => {
    let num = i * i;
    sum += num;
  });
  return sum;
}

// Best solution:
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}
