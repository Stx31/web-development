
const productoSelect = document.getElementById('producto');
const plazoInput = document.getElementById('plazo');
const extrasCheckboxes = document.querySelectorAll('input[name="extra"]');
const presupuestoFinal = document.getElementById('presupuestoFinal');
const form = document.getElementById('presupuestoForm');


function calcularPresupuesto() {
    let precioProducto = parseFloat(productoSelect.value);
    let plazo = parseInt(plazoInput.value) || 0; 
    let extras = 0;

    extrasCheckboxes.forEach(extra => {
        if (extra.checked) {
            extras += parseFloat(extra.value);
        }
    });

    let descuento = 0;
    if (plazo > 30) {
        descuento = 0.10; 
    }

    let total = (precioProducto + extras) * (1 - descuento);

    presupuestoFinal.textContent = `$${total.toFixed(2)}`;
}

productoSelect.addEventListener('change', calcularPresupuesto);
plazoInput.addEventListener('input', calcularPresupuesto);
extrasCheckboxes.forEach(extra => {
    extra.addEventListener('change', calcularPresupuesto);
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Presupuesto enviado. El total es: ' + presupuestoFinal.textContent);
});

form.addEventListener('reset', () => {
    presupuestoFinal.textContent = '$0';
});
