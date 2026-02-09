let phoneInputs = document.querySelectorAll('input[data-tel-input]');

function phoneMask() {
  let getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, '');
  };

  let onPhoneInput = function (e) {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      formattedInputValue = '',
      selectionStart = input.selectionStart;

    if (!inputNumbersValue) {
      input.value = '';
      return;
    }

    if (input.value.length !== selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['3', '0'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] === '0') {
        inputNumbersValue = '38' + inputNumbersValue;
      }
      let firstSymbols = '+38';
      formattedInputValue = firstSymbols + ' ';
      if (inputNumbersValue.length > 2) {
        formattedInputValue += '(' + inputNumbersValue.substring(2, 5);
      }
      if (inputNumbersValue.length >= 6) {
        formattedInputValue += ') ' + inputNumbersValue.substring(5, 8);
      }
      if (inputNumbersValue.length >= 9) {
        formattedInputValue += '-' + inputNumbersValue.substring(8, 10);
      }
      if (inputNumbersValue.length >= 11) {
        formattedInputValue += '-' + inputNumbersValue.substring(10, 12);
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue;
    }
    input.value = formattedInputValue;
  };

  let onPhoneKeyDown = function (e) {
    let input = e.target;
    if (e.keyCode === 8 && getInputNumbersValue(input).length === 2) {
      input.value = '';
    }
  };

  let onPhonePaste = function (e) {
    let pasted = e.clipboardData || window.clipboardData,
      input = e.target,
      inputNumbersValue = getInputNumbersValue(input);

    if (pasted) {
      let pastedText = pasted.getData('Text');
      if (!/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };

  for (let i = 0; i < phoneInputs.length; i++) {
    let input = phoneInputs[i];
    input.addEventListener('input', onPhoneInput);
    input.addEventListener('keydown', onPhoneKeyDown);
    input.addEventListener('paste', onPhonePaste);
  }
}

export default phoneMask;
