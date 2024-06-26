
const productos = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalones', precio: 30 },
    { nombre: 'Zapatos', precio: 40 },
    { nombre: 'Gorra', precio: 15 },
    { nombre: 'Bufanda', precio: 25 }
];

let productosCaros = [];


for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio > 25) {
        productosCaros.push(productos[i]);
    }
}


console.log("Productos con precio mayor a 25 euros:");
productosCaros.forEach((producto) => {
    console.log(`${producto.nombre} - Precio: ${producto.precio} euros`);
});
