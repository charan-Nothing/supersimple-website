let result = document.getElementById('result');

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate(operator) {
  switch (operator) {
    case '+':
      result.value = eval(result.value);
      break;
    case '-':
      result.value = eval(result.value);
      break;
    case '*':
      result.value = eval(result.value);
      break;
    case '/':
      result.value = eval(result.value);
      break;
    case '%':
      result.value = eval(result.value + '/100');
      break;
  }
}