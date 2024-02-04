document.addEventListener('DOMContentLoaded', () => {
    fetch('/obtener-datos')
    .then(response => response.json())
    .then(data => {
        mostrarDatos(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

function mostrarDatos(datos) {
    const datosUsuarioDiv = document.getElementById('datosUsuario');

    if (datos.length === 0) {
        datosUsuarioDiv.innerHTML = '<p>No hay datos disponibles.</p>';
        return;
    }

    const tablaHTML = `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Correo Electrónico</th>
                    <th>Contraseña</th>
                </tr>
            </thead>
            <tbody>
                ${datos.map(usuario => `
                    <tr>
                        <td>${usuario.nombre}</td>
                        <td>${usuario.edad}</td>
                        <td>${usuario.correo}</td>
                        <td>${usuario.contrasena}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    datosUsuarioDiv.innerHTML = tablaHTML;
}
