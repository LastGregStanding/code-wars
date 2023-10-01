// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// My solution

function getAverage(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return Math.floor(sum / marks.length);
}

// Best solution

function getAverage(marks) {
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}
