const numberList = document.getElementById("number-list");
const calculateButton = document.getElementById("calculate-button");
const resultElement = document.getElementById("result");

let selectedNumber = null;

numberList.addEventListener("click", (event) => {
  const clickedNumber = event.target;
  if (clickedNumber.classList.contains("number")) {
    if (selectedNumber !== clickedNumber) {
      if (selectedNumber) {
        selectedNumber.classList.remove("selected");
      }
      selectedNumber = clickedNumber;
      selectedNumber.classList.add("selected");
    } else {
      selectedNumber.classList.remove("selected");
      selectedNumber = null;
    }
  }
});

calculateButton.addEventListener("click", () => {
  const numbers = Array.from(numberList.getElementsByClassName("number"));
  let sum = 0;
  for (const number of numbers) {
    if (number !== selectedNumber) {
      sum += parseInt(number.innerText);
    }
  }
  resultElement.innerText = `La suma total es: ${sum}`;
});
