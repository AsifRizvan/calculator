document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');

    window.displayNumber = function(num) {
        result.value += num;
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
