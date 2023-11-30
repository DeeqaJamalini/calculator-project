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
const percentButton = document.querySelector("#percent") as HTMLButtonElement;
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
  if (isInMiddleOfOperation) {
    console.log("in middle of operation");

    currentInput = num;

    isInMiddleOfOperation = false;
  } else {
    console.log("not in middle of operation");

    currentInput = currentInput * 10 + num;
  }

  if (operator !== "") {
    performOperation();

    operator = "";
  }

  updateDisplay();

  console.log(currentInput);
};

updateDisplay();

if (operator !== "") {
  console.log("operator was clicked");

  console.log(currentSum);

  operator = "";
}

console.log(currentInput);

const handleOperatorButtonClick = (clickedOperator: string) => {
  if (isInMiddleOfOperation) {
    operator = clickedOperator;
    console.log("in middle of operation and operator clicked");
  } else {
    if (operator !== "") {
      performOperation();
      console.log("operator was clicked and performOperation was called");
    }
    operator = clickedOperator;
    currentSum = currentInput;
    isInMiddleOfOperation = true;
  }

  updateDisplay();
};

const plus = (currentSum: number, currentInput: number) =>
  (currentSum = currentSum + currentInput);
console.log(currentSum);

const minus = (currentSum: number, currentInput: number) =>
  (currentSum = currentSum - currentInput);
console.log(currentSum);
const multiply = (currentSum: number, currentInput: number) =>
  (currentSum = currentSum * currentInput);
console.log(currentSum);
const divide = (currentSum: number, currentInput: number) =>
  (currentSum = currentSum / currentInput);
console.log(currentSum);

const plusMinus = (currentInput: number) => (currentSum = currentInput * -1);

const percent = (currentInput: number) => (currentSum = currentInput / 100);

const equals = (currentInput: number) => (currentSum = currentInput);

const performOperation = () => {
  console.log("performing");
  switch (operator) {
    case "plus":
      currentSum = plus(currentSum, currentInput);
      console.log("plus case");
      console.log(currentSum);
      break;
    case "minus":
      currentSum = minus(currentSum, currentInput);
      console.log("minus case");
      console.log(currentSum);
      break;
    case "multiply":
      currentSum = currentSum * currentInput;
      console.log("multiply case");
      console.log(currentSum);
      break;
    case "divide":
      currentSum = divide(currentSum, currentInput);
      console.log("divide case");
      console.log(currentSum);
      break;
    case "plusMinus":
      currentSum = plusMinus(currentInput);
      console.log("plusMinus case");
      console.log(currentSum);
      break;
    case "percent":
      currentSum = percent(currentInput);
      console.log("percent case");
      console.log(currentSum);
      break;
    case "equals":
      console.log("equals case");
      console.log(currentSum);
      currentSum = equals(currentInput);
  }

  currentInput = currentSum;

  updateDisplay();
  console.log(currentSum);
  setTimeout(() => console.log(currentSum), 0);
};

equalsButton.addEventListener("click", () => {
  console.log("equals button clicked");
  if (isInMiddleOfOperation) {
    performOperation();
    console.log(currentSum);
    isInMiddleOfOperation = false;
    currentInput = 0;
    updateDisplay();
  }
});

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
  console.log(currentSum);
});

plusMinusButton.addEventListener("click", () => {
  currentInput = plusMinus(currentInput);
  updateDisplay();
});

decimalButton.addEventListener("click", () => {
  currentInput = currentInput / 10;
  updateDisplay();
});

percentButton.addEventListener("click", () => {
  currentInput = percent(currentInput);
  updateDisplay();
});
