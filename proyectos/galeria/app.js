// Obtén una referencia a la lista de imágenes
const gallery = document.getElementById('gallery');

// Agrega un controlador de eventos para cada imagen
gallery.addEventListener('click', function(e) {
  if (e.target.tagName === 'IMG') {
    // Crea una ventana emergente para mostrar la imagen en tamaño completo
    const imageUrl = e.target.src;
    window.open(imageUrl, '_blank');
  }
});