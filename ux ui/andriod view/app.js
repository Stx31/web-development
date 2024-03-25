
function enviarMensaje() {

    var mensaje = prompt("Por favor ingresa tu mensaje:");


    if (mensaje !== null && mensaje !== "") {

        localStorage.setItem("mensaje", mensaje);
        alert("Mensaje enviado correctamente.");
    } else {
        alert("No se ingresó ningún mensaje.");
    }
}


document.getElementById("enviarMensajeBtn").addEventListener("click", enviarMensaje);
