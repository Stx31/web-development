// Arreglo de productos con sus imágenes y títulos
const products = [
    { image: "../images/1.jpg", title: "Producto 1" },
    { image: "../images/2.jpg", title: "Producto 2" },
    { image: "../images/3.jpg", title: "Producto 3" },
    { image: "../images/4.jpg", title: "Producto 4" },
    { image: "../images/5.jpg", title: "Producto 5" },
    { image: "../images/6.jpg", title: "Producto 6" },
    { image: "../images/7.jpg", title: "Producto 7" },
    { image: "../images/8.jpg", title: "Producto 8" },
];

// Referencia al contenedor de la galería
const gallery = document.getElementById('gallery');

// Generar dinámicamente las imágenes en la galería
products.forEach(product => {
    const a = document.createElement('a');
    a.href = product.image;
    a.setAttribute('data-lightbox', 'gallery');
    a.setAttribute('data-title', product.title);

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.title;

    a.appendChild(img);
    gallery.appendChild(a);
});
