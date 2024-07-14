document.addEventListener('DOMContentLoaded', function() {
    const datos = JSON.parse(localStorage.getItem('datosUsuario'));

    if (datos) {
        const listaDatos = document.getElementById('listaDatos');
        const listItem = document.createElement('li');
        listItem.textContent = `Nombre: ${datos.nombre}, Edad: ${datos.edad}`;
        listaDatos.appendChild(listItem);
    } else {
        alert('No hay datos guardados en el localStorage');
    }
});
