const calculateButton = document.getElementById("calculate-button");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultDiv = document.getElementById("result");

calculateButton.addEventListener("click", calculateBMI);

function calculateBMI() {
  const weight = weightInput.value;
  const height = heightInput.value;
  const bmi = weight / (height / 100 * height / 100);

  resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
}
function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

function calculateBMI() {
  const weight = weightInput.value;
  const height = heightInput.value;
  const bmi = weight / (height / 100 * height / 100);

  resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${getBMICategory(bmi)})`;
}
