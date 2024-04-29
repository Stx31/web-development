function saveFormData() {
    const formData = {
        email: document.getElementById('inputEmail4').value,
        name: document.getElementById('inputAddress').value,
        address: document.getElementById('inputAddress2').value,
        city: document.getElementById('inputCity').value
        
    };

    
    const formDataString = JSON.stringify(formData);

    
    const scriptElement = document.createElement('script');
    scriptElement.textContent = `var formData = ${formDataString};`;

  
    document.head.appendChild(scriptElement);

    alert('Datos del formulario guardados con éxito.');
}

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    saveFormData();
});
