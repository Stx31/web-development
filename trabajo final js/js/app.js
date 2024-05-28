document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quote-form');
    const productSelect = document.getElementById('product');
    const durationInput = document.getElementById('duration');
    const extras = document.querySelectorAll('.extra');
    const totalAmount = document.getElementById('total-amount');

    function calculateTotal() {
        let total = parseFloat(productSelect.value) || 0;
        extras.forEach(extra => {
            if (extra.checked) {
                total += parseFloat(extra.value);
            }
        });
        totalAmount.textContent = total.toFixed(2);
    }

    form.addEventListener('change', calculateTotal);
    form.addEventListener('reset', () => {
        setTimeout(calculateTotal, 0); 
    });

    calculateTotal(); 
});