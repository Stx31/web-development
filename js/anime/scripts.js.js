
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const recommendationsDiv = document.getElementById('recommendations');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('anime.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(recommendations => {
          
            recommendationsDiv.innerHTML = '';

           
            if (recommendations.length > 0) {
                const ul = document.createElement('ul');
                recommendations.forEach(recommendation => {
                    const li = document.createElement('li');
                    li.textContent = recommendation;
                    ul.appendChild(li);
                });
                recommendationsDiv.appendChild(ul);
            } else {
                recommendationsDiv.textContent = 'No se encontraron recomendaciones para este anime.';
            }
        })
        .catch(error => {
            console.error('Error al obtener las recomendaciones:', error);
        });
    });
});
