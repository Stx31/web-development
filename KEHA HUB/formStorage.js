function saveFormData() {
    const formData = {
        email: document.getElementById('inputEmail4').value,
        name: document.getElementById('inputAddress').value,
        address: document.getElementById('inputAddress2').value,
        city: document.getElementById('inputCity').value
        // Añade más campos si es necesario
    };

    // Convierte el objeto a una cadena JSON
    const formDataString = JSON.stringify(formData);

    // Crea un elemento <script> para guardar los datos como una variable en el archivo JS
    const scriptElement = document.createElement('script');
    scriptElement.textContent = `var formData = ${formDataString};`;

    // Añade el elemento <script> al <head> del documento
    document.head.appendChild(scriptElement);

    // Avisa al usuario que los datos del formulario han sido guardados
    alert('Datos del formulario guardados con éxito.');
}

// Agrega un listener al formulario para guardar los datos cuando se envía
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    saveFormData();
});
