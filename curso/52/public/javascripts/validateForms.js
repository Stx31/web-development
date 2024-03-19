(function () {
    'use strict'

   // Recupera todos los formularios a los que queremos aplicar estilos de validación Bootstrap personalizados
    const forms = document.querySelectorAll('.validated-form')

   
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()