function calculate() {
    var number1 = +document.getElementById('number1').value; // Convert string to number using unary plus operator
    var number2 = +document.getElementById('number2').value; // Convert string to number using unary plus operator
    var operation = document.getElementById('operation').value;
    var result = document.getElementById('result');

    switch (operation) {
        case 'add':
            result.textContent = 'The result is = ' + (number1 + number2);
            break;
        case 'subtract':
            result.textContent = 'The result is = ' + (number1 - number2);
            break;
        case 'multiply':
            result.textContent = 'The result is = ' + (number1 * number2);
            break;
        case 'divide':
            if (number2 == 0) {
                result.textContent = 'Error: Division by zero is not allowed.';
            } else {
                result.textContent = 'The result is = ' + (number1 / number2);
            }
            break;
        default:
            result.textContent = 'Invalid operation';
    }
}