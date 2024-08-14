document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');

    window.displayNumber = function(num) {
        result.value += num;
    }

    window.backspace = function() {
        result.value = result.value.slice(0, -1);
    }

    window.clearResult = function() {
        result.value = '';
    }

    window.calculateResult = function() {
        try {
            result.value = eval(result.value);
        } catch {
            result.value = 'Error';
        }
    }
});
