document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();


        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const mensaje = document.getElementById("mensaje").value;
        const politica = document.getElementById("politica").checked;


        const datos = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            mensaje: mensaje,
            politica: politica
        };


        const datosJSON = JSON.stringify(datos);

        localStorage.setItem("formularioDatos", datosJSON);


        alert("Los datos del formulario han sido guardados en el localStorage.");
    });
});
