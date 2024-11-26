//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        const value = input.value;
        if (value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && input.value === '' && index > 0) {
            inputs[index - 1].focus();
        }
    });
});
