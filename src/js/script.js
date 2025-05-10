let expression = '';

function press(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function calculate() {
  try {
    expression = eval(expression).toString();
    document.getElementById('display').value = expression;
  } catch (error) {
    document.getElementById('display').value = 'Error';
    expression = '';
  }
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}
