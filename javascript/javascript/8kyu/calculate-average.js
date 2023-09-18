// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My solution

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }
}

// Best solution

var find_average = (array) => {
  return array.length === 0
    ? 0
    : array.reduce((acc, ind) => acc + ind, 0) / array.length;
};
