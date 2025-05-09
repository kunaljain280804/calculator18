// Selecting elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');
const squareBtn = document.getElementById('square');

// Variable to store current input
let currentInput = '';

// Function to update display
function updateDisplay(value) {
  display.innerText = value || '0';
}

// Function to append value to input
function appendValue(value) {
  currentInput += value;
  updateDisplay(currentInput);
}

// Function to clear input
function clearInput() {
  currentInput = '';
  updateDisplay(currentInput);
}

// Function to calculate result
function calculateResult() {
  try {
    // Evaluate expression
    let result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay(currentInput);
  } catch (error) {
    alert('Invalid Expression');
  }
}

// Function to calculate square
function calculateSquare() {
  try {
    let num = eval(currentInput);
    let result = num * num;
    currentInput = result.toString();
    updateDisplay(currentInput);
  } catch (error) {
    alert('Invalid Expression');
  }
}

// Adding event listeners to all buttons
buttons.forEach(button => {
  const value = button.getAttribute('data-value');

  if (value) {
    button.addEventListener('click', () => appendValue(value));
  }
});

// Special buttons
clearBtn.addEventListener('click', clearInput);
equalsBtn.addEventListener('click', calculateResult);
squareBtn.addEventListener('click', calculateSquare);
