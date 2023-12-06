let result = '0';
    const resultElement = document.getElementById('result');

    function updateResult() {
      resultElement.textContent = result;
    }

    function appendToResult(value) {
      if (result === '0') {
        result = value;
      } else {
        result += value;
      }
      updateResult();
    }

    function clearResult() {
      result = '0';
      updateResult();
    }

    function calculateResult() {
      try {
        result = eval(result);
        updateResult();
      } catch (error) {
        result = 'Error';
        updateResult();
      }
    }

    function operate(operator) {
      result += operator;
      updateResult();
    }