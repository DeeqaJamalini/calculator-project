let currentSum: number = 0;
let currentInput: number = 0;
let operator: string = "";
let isInMiddleOfOperation: boolean = false;

const display = document.getElementById("display") as HTMLParagraphElement;

const minusButton = document.querySelector("#minus") as HTMLButtonElement;
const plusButton = document.querySelector("#plus") as HTMLButtonElement;
const divideButton = document.querySelector("#divide") as HTMLButtonElement;
const multiplyButton = document.querySelector("#multiply") as HTMLButtonElement;
const equalsButton = document.querySelector("#equals") as HTMLButtonElement;
const clearButton = document.querySelector("#clear") as HTMLButtonElement;
const plusMinusButton = document.querySelector(
  "#plus-minus"
) as HTMLButtonElement;
const decimalButton = document.querySelector("#decimal") as HTMLButtonElement;
const numberOneButton = document.querySelector("#one") as HTMLButtonElement;
const numberTwoButton = document.querySelector("#two") as HTMLButtonElement;
const numberThreeButton = document.querySelector("#three") as HTMLButtonElement;
const numberFourButton = document.querySelector("#four") as HTMLButtonElement;
const numberFiveButton = document.querySelector("#five") as HTMLButtonElement;
const numberSixButton = document.querySelector("#six") as HTMLButtonElement;
const numberSevenButton = document.querySelector("#seven") as HTMLButtonElement;
const numberEightButton = document.querySelector("#eight") as HTMLButtonElement;
const numberNineButton = document.querySelector("#nine") as HTMLButtonElement;
const numberZeroButton = document.querySelector("#zero") as HTMLButtonElement;

// Add event listeners to number buttons

const updateDisplay = () => {
  display.innerHTML = currentInput.toString();
};
const handleNumberButtonClick = (num: number) => {
  // Check if we are in the middle of an operation
  if (isInMiddleOfOperation) {
    // If yes, set currentInput to the clicked number
    currentInput = num;
    // Reset the flag indicating that we are in the middle of an operation
    isInMiddleOfOperation = false;
  } else {
    // If not in the middle of an operation, update currentInput by concatenating the clicked number
    currentInput = currentInput * 10 + num;
  }

  // Check if an operator was clicked
  if (operator !== "") {
    // If yes, update currentSum with the currentInput value
    currentSum = currentInput;
  }

  // Update the display with the currentInput value
  updateDisplay();

  // Log the currentInput value to the console
  console.log(currentInput);
};

const handleOperatorButtonClick = (clickedOperator: string) => {
  if (isInMiddleOfOperation) {
    operator = clickedOperator;
  } else {
    if (operator !== "") {
      performOperation();
    }
    operator = clickedOperator;
    currentSum = currentInput;
    isInMiddleOfOperation = true;
  }

  updateDisplay();
};

const plus = (currentSum: number, currentInput: number) =>
  (currentSum = currentSum + currentInput);

const minus = (currentSum: number, currentInput: number) =>
  (currentSum = currentSum - currentInput);

const multiply = (currentSum: number, currentInput: number) =>
  (currentSum = currentSum * currentInput);
const divide = (currentSum: number, currentInput: number) =>
  (currentSum = currentSum / currentInput);

const plusMinus = (currentInput: number) => (currentSum = currentInput * -1);

const performOperation = () => {
  console.log("performing");
  switch (operator) {
    case "plus":
      currentSum = plus(currentSum, currentInput);
      console.log(currentSum);
      currentInput = 0;
      break;
    case "minus":
      currentSum = minus(currentSum, currentInput);
      console.log(currentSum);
      currentInput = 0;
      break;
    case "multiply":
      currentSum = multiply(currentSum, currentInput);
      console.log(currentSum);
      currentInput = 0;
      break;
    case "divide":
      currentSum = divide(currentSum, currentInput);
      console.log(currentSum);

      currentInput = 0;
      break;
    case "plusMinus":
      currentSum = plusMinus(currentInput);
      console.log(currentSum);
      currentInput = 0;
      break;
  }

  currentInput = currentSum;

  // currentInput = 0; // Reset currentInput after performing the operation
  updateDisplay();
  console.log(currentSum);
};

// Handle equals button click separately
equalsButton.addEventListener("click", () => {
  if (isInMiddleOfOperation) {
    performOperation();
    isInMiddleOfOperation = false;
    updateDisplay(); // Update the display after performing the operation
  }
});

// ... (Other event listeners remain the same)

// ... (Event listeners remain the same)

// Add event listeners to operator buttons
plusButton.addEventListener("click", () => handleOperatorButtonClick("plus"));
minusButton.addEventListener("click", () => handleOperatorButtonClick("minus"));
multiplyButton.addEventListener("click", () =>
  handleOperatorButtonClick("multiply")
);
divideButton.addEventListener("click", () =>
  handleOperatorButtonClick("divide")
);
numberOneButton.addEventListener("click", () => handleNumberButtonClick(1));
numberTwoButton.addEventListener("click", () => handleNumberButtonClick(2));
numberThreeButton.addEventListener("click", () => handleNumberButtonClick(3));
numberFourButton.addEventListener("click", () => handleNumberButtonClick(4));
numberFiveButton.addEventListener("click", () => handleNumberButtonClick(5));
numberSixButton.addEventListener("click", () => handleNumberButtonClick(6));
numberSevenButton.addEventListener("click", () => handleNumberButtonClick(7));
numberEightButton.addEventListener("click", () => handleNumberButtonClick(8));
numberNineButton.addEventListener("click", () => handleNumberButtonClick(9));
numberZeroButton.addEventListener("click", () => handleNumberButtonClick(0));

clearButton.addEventListener("click", () => {
  currentSum = 0;
  currentInput = 0;
  operator = "";
  updateDisplay();
});

plusMinusButton.addEventListener("click", () => {
  currentInput = plusMinus(currentInput);
  updateDisplay();
});

decimalButton.addEventListener("click", () => {
  // Handle decimal button click if needed
});

// You may need to handle other button clicks (percentage, etc.) similarly.
