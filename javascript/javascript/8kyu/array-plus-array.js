/*

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

*/

// My solution

function arrayPlusArray(arr1, arr2) {
  let arr3 = [...arr1, ...arr2];
  let arrSum = 0;
  for (let i = 0; i < arr3.length; i++) {
    arrSum += arr3[i];
  }
  return arrSum;
}

// Best solution

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}
