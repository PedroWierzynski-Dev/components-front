document.addEventListener('DOMContentLoaded', function () {
    const decreaseBtn = document.getElementById('decrease');
    const increaseBtn = document.getElementById('increase');
    const inputField = document.getElementById('inputNumber');

    decreaseBtn.addEventListener('click', function () {
        decreaseValue();
    });

    increaseBtn.addEventListener('click', function () {
        increaseValue();
    });

    function decreaseValue() {
        let currentValue = parseFloat(inputField.value);
        if (!isNaN(currentValue)) {
            inputField.value = String(currentValue - 1);
        }
    }

    function increaseValue() {
        let currentValue = parseFloat(inputField.value);
        if (!isNaN(currentValue)) {
            inputField.value = String(currentValue + 1);
        }
    }
});