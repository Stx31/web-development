document.addEventListener('DOMContentLoaded', () => {
    const palabras = ["VALORANT", "SAGE", "JETT", "PHOENIX", "OMEN", "YORU"];
    const tabla = document.getElementById('sopa');
    const celdas = tabla.getElementsByTagName('td');
    let seleccion = [];

    for (let i = 0; i < celdas.length; i++) {
        celdas[i].addEventListener('click', function () {
            seleccion.push(this);
            this.classList.add('seleccionado');

            const palabraFormada = seleccion.map(td => td.textContent).join('');
            if (palabras.includes(palabraFormada)) {
                alert(`Encontraste: ${palabraFormada}`);
                seleccion = [];
            } else if (palabraFormada.length > 10) { // Si la selección es más larga que cualquier palabra posible
                resetSeleccion();
            }
        });
    }

    function resetSeleccion() {
        seleccion.forEach(td => td.classList.remove('seleccionado'));
        seleccion = [];
    }
});
