fetch('noticias.json')
.then(response => response.json())
.then(data => {
  const noticiasContainer = document.getElementById('noticias');
  data.forEach(noticia => {
    const noticiaElement = document.createElement('div');
    noticiaElement.innerHTML = `
      <h3>${noticia.titulo}</h3>
      <p>${noticia.descripcion}</p>
      <p>Fecha: ${noticia.fecha}</p>
    `;
    noticiasContainer.appendChild(noticiaElement);
  });
})
.catch(error => console.error('Error al cargar las noticias:', error));