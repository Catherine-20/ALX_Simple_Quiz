// Arithmetic functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 'Cannot divide by zero';
    }
    return num1 / num2;
}

// Event listeners
document.getElementById('add').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('subtract').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('multiply').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('divide').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(num1, num2);
    document.getElementById('calculation-result').textContent = result;
});
