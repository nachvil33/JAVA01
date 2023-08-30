document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const testButton = document.getElementById('testButton');
    const resultMessage = document.getElementById('resultMessage');

    testButton.addEventListener('click', () => {
        const inputValue = inputText.value;
        const isPalindrome = palindromes(inputValue);

        if (isPalindrome) {
            resultMessage.textContent = `"${inputValue}" is a palindrome.`;
        } else {
            resultMessage.textContent = `"${inputValue}" is not a palindrome.`;
        }
    });
});
