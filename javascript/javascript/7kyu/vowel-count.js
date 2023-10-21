/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

// My Solution

function getCount(str) {
  let vowels = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowels++;
        break;
    }
  }
  return vowels;
}

// Best solution
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
