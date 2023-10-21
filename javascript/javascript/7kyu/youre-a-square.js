/*
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that 
is the square of an integer; in other words, it is the product of some integer
with itself.
*/

// My solution

var isSquare = function (n) {
  for (let i = 0; i <= n; i++) {
    if (i * i === n) {
      return true;
    }
  }
  return false;
};

// Best solution
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
