/*

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

// My solution
function bmi(weight, height) {
  let value = weight / (height * height);
  let category;
  switch (true) {
    case value <= 18.5:
      category = "Underweight";
      break;
    case value <= 25:
      category = "Normal";
      break;
    case value <= 30:
      category = "Overweight";
      break;
    case value > 30:
      category = "Obese";
      break;
    default:
      category = "Unknown";
  }
  return category;
}

// Best solution
function bmi(weight, height) {
  var result = weight / Math.pow(height, 2);

  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
