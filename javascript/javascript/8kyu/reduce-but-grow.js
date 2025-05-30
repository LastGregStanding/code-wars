/*

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

// My solution
function grow(x) {
  let num = 1;
  for (let i = 0; i < x.length; i++) {
    num = num * x[i];
  }
  return num;
}

// Best solution
const grow = (x) => x.reduce((a, b) => a * b);
