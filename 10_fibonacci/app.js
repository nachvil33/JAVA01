document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('numberInput');
    const calculateButton = document.getElementById('calculateButton');
    const resultContainer = document.getElementById('resultContainer');
    const positionSpan = document.getElementById('positionSpan');
    const resultNumber = document.getElementById('resultNumber');

    calculateButton.addEventListener('click', () => {
        const position = parseInt(numberInput.value);

        if (isNaN(position) || position < 0) {
            alert('Please enter a non-negative integer.');
        } else {
            const fibNumber = fibonacci(position);
            positionSpan.textContent = position;
            resultNumber.textContent = fibNumber;
            resultContainer.style.display = 'block';
        }
    });
});
