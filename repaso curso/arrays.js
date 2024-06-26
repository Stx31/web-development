
let arrayCadenasNumeros = ["1", "2", "3", "4", "5"];
console.log(arrayCadenasNumeros);  // Output: ["1", "2", "3", "4", "5"]

let arrayTextos = ["manzana", "banana", "cereza", "durazno"];
console.log(arrayTextos);  // Output: ["manzana", "banana", "cereza", "durazno"]


console.log(arrayTextos[0]);  // Output: "manzana"
console.log(arrayTextos[2]);  // Output: "cereza"


arrayCadenasNumeros[2] = "33";  // Modificar el tercer elemento
console.log(arrayCadenasNumeros);  // Output: ["1", "2", "33", "4", "5"]

for (let i = 0; i < arrayTextos.length; i++) {
    console.log(arrayTextos[i]);
}
// Output:
// "manzana"
// "banana"
// "cereza"
// "durazno"




const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
];


personas[1].edad = 26;
console.log(personas); // [{ nombre: 'Juan', edad: 30 }, { nombre: 'María', edad: 26 }, { nombre: 'Pedro', edad: 35 }]

//obejeto anidado //


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

