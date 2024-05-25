document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.getElementById('cart-items');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const name = product.getAttribute('data-name');
            const price = parseFloat(product.getAttribute('data-price'));

            cart.push({ name, price });
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(itemElement);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }
});
