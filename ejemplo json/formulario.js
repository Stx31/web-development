function guardarDatos() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const confirmarContrasena = document.getElementById("confirmarContrasena").value;

    if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    const datosUsuario = {
        nombre: nombre,
        edad: edad,
        correo: correo,
        contrasena: contrasena
    };

    fetch('/guardar-datos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosUsuario),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al guardar los datos');
        }
        return response.json();
    })
    .then(data => {
        alert(data.message);
        document.getElementById("formulario").reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al guardar los datos.');
    });
}
