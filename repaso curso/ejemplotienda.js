const tienda = {
    nombre: 'Mi Tienda',
    ubicacion: {
        ciudad: 'Barcelona',
        pais: 'España'
    },
    productos: [
        { nombre: 'Camiseta', precio: 20 },
        { nombre: 'Pantalones', precio: 30 }
    ]
};

tienda.ubicacion.ciudad = 'Madrid'; 
tienda.productos[0].precio = 25; 

console.log(tienda);
