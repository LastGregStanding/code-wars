// Create a method to see whether the string is ALL CAPS.

// Solution

String.prototype.isUpperCase = function () {
  return this.toString() === this.toUpperCase();
};
