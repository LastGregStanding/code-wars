/*

Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

Notes
"flick" will always be given in lowercase.

A list may contain multiple flicks.

Switch the boolean value on the same element as the flick itself.

*/

// My solution

function flickSwitch(arr) {
  let value = true;
  let truthArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      value = !value;
    }
    truthArr.push(value);
  }
  return truthArr;
}

// Best solution

function flickSwitch(arr) {
  let returning = true;
  return arr.map((v) => {
    return v === "flick" ? (returning = !returning) : returning;
  });
}
