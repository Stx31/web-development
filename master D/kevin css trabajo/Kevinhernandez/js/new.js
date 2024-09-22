document.addEventListener("DOMContentLoaded", function() {
    fetch('noticias.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            const testimoniosContainer = document.querySelector('.testimonial-grid');
            testimoniosContainer.innerHTML = ''; 

            data.testimonios.forEach(testimonio => {
                const testimonialDiv = document.createElement('div');
                testimonialDiv.classList.add('testimonial');
                testimonialDiv.innerHTML = `
                    <p>"${testimonio.texto}"</p>
                    <p><strong>- ${testimonio.autor}</strong></p>
                `;
                testimoniosContainer.appendChild(testimonialDiv);
            });
        })
        .catch(error => {
            console.error('Error al cargar los testimonios:', error);
        });
});
