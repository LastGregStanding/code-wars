// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My solution

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

// Best solution

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}
