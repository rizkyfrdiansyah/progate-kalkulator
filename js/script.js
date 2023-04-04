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

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  const prev = parseFloat(prevNumber);
  const current = parseFloat(currentNumber);
  if (isNaN(prev) || isNaN(current)) return;

  switch (calculationOperator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }
  currentNumber = result.toString();
  calculationOperator = "";
};

const clearBtn = document.querySelector(".all-clear");

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
  updateScreen(currentNumber);
};

clearBtn.addEventListener("click", () => {
  clearAll();
});

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  console.log(event.target.value);
});
