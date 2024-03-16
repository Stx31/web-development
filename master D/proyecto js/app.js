document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Aquí puedes implementar el código para enviar el formulario por correo electrónico o guardarlo en una base de datos

    document.getElementById('statusMessage').innerHTML = "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.";
    document.getElementById('contactForm').reset();
});
