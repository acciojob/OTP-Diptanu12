const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focused(); 
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value) {
        input.value = '';
      } else if (index > 0) {
        inputs[index - 1].focused(); 
      }
    }
  });
});
