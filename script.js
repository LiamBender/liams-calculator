const valueButton = document.querySelectorAll("[data-value]");
const clearButton = document.querySelector("[data-all-clear]");
const delButton = document.querySelector("[data-del]");
const resultText = document.querySelector("[data-result]");
const operandText = document.querySelector("[data-operands]");

let valuesArray = [];

// Clears all information from the screen and console
const clearAll = () => {
  resultText.value = "";
  operandText.value = "";
  resultText.innerHTML = "&nbsp";
  operandText.innerHTML = "&nbsp";
  valuesArray = [];
  console.clear();
};

// Handles the values of the button clicks
const valueHandler = (event) => {
  if (event === "DEL") {
    valuesArray = valuesArray.slice(0, -1);
    operandText.value = valuesArray;
    operandText.innerHTML = operandText.value;
  } else {
    const clickedValue = event.target.value;
    if (clickedValue !== "=") {
      valuesArray += clickedValue;
      operandText.value = valuesArray;
      operandText.innerHTML = operandText.value;
    } else if (clickedValue === "=") {
      resultText.value = `${eval(operandText.value)}`;
      resultText.innerHTML = `${eval(operandText.value)}`;
    }
  }
};

clearButton.addEventListener("click", clearAll);

delButton.addEventListener("click", () => {
    valueHandler("DEL");
});

valueButton.forEach((button) => {
  button.addEventListener("click", valueHandler);
});