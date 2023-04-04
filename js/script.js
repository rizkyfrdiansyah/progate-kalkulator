const calculatorScreen = document.querySelector(".calculator-screen");
let currentNumber = "0";

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const operators = document.querySelectorAll(".operator");
let prevNumber = "";
let calculationOperator = "";

const inputOperator = (operator) => {
  prevNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = "";
};

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const equalSign = document.querySelector(".equal-sign");
const calculate = () => {
  let result = "";
  const prev = parseInt(prevNumber);
  const current = parseInt(currentNumber);
  if (isNaN(prev) || isNaN(current)) return;

  switch (calculationOperator) {
    case "+":
      result = parseInt(prevNumber) + parseInt(currentNumber);
      break;
    case "-":
      result = parseInt(prevNumber) - parseInt(currentNumber);
      break;
    case "*":
      result = parseInt(prevNumber) * parseInt(currentNumber);
      break;
    case "/":
      result = parseInt(prevNumber) / parseInt(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result.toString();
  calculationOperator = "";
};

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});
