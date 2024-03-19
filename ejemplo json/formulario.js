function guardarDatos() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;

    var datosUsuario = {
        "nombre": nombre,
        "edad": edad,
        "correo": correo,
        "contrasena": contrasena
    };

    fetch('/guardar-datos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosUsuario),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.getElementById("formulario").reset();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
