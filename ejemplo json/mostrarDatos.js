document.addEventListener('DOMContentLoaded', () => {
    fetch('/obtener-datos')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
    })
    .then(data => {
        mostrarDatos(data);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('datosUsuario').innerHTML = '<p>Error al cargar los datos.</p>';
    });
});

function mostrarDatos(datos) {
    const datosUsuarioDiv = document.getElementById('datosUsuario');

    if (!Array.isArray(datos) || datos.length === 0) {
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
                    <th>Contraseña</th> <!-- En producción, no se debe mostrar -->
                </tr>
            </thead>
            <tbody>
                ${datos.map(usuario => `
                    <tr>
                        <td>${usuario.nombre}</td>
                        <td>${usuario.edad}</td>
                        <td>${usuario.correo}</td>
                        <td>********</td> <!-- No mostrar la contraseña real -->
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    datosUsuarioDiv.innerHTML = tablaHTML;
}
