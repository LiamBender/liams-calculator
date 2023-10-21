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
  if (event === "DEL") { // Checks if the event is "DEL" from the function call and in that case removes the last value of the array
    valuesArray = valuesArray.slice(0, -1);
    operandText.value = valuesArray;
    operandText.innerHTML = operandText.value;
  } else { // Grabs the value of a button and adds it to the array, also adds it as text
    const clickedValue = event.target.value;
    if (clickedValue !== "=") {
      valuesArray += clickedValue;
      operandText.value = valuesArray;
      operandText.innerHTML = operandText.value;
    } else if (clickedValue === "=") { // If clickedValue is = then will update the value of results and add it as text
      resultText.value = `${eval(operandText.value)}`;
      resultText.innerHTML = `${eval(operandText.value)}`;
    }
  }
};

clearButton.addEventListener("click", clearAll);

// Delbutton on click will call the valueHandler function with the argument of "DEL"
delButton.addEventListener("click", () => {
    valueHandler("DEL");
});

// Grabs the value of the button clicked
valueButton.forEach((button) => {
  button.addEventListener("click", valueHandler);
});