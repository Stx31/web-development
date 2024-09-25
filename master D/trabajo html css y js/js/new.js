// Obtener el formulario y el mensaje de éxito
const form = document.getElementById('newsletter-form');
const successMessage = document.getElementById('success-message');

// Escuchar el evento submit del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener el valor del correo electrónico
    const emailInput = document.getElementById('email-input').value;

    // Guardar el correo en localStorage
    localStorage.setItem('subscriberEmail', emailInput);

    // Mostrar el mensaje de éxito
    successMessage.style.display = 'block';

    // Limpiar el campo del formulario
    form.reset();
});
