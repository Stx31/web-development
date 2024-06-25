let numero = 7;

if (numero % 2 === 0) {
    console.log(`${numero} es un número par.`);
} else {
    console.log(`${numero} es un número impar.`);
}

// precio segun cliente//
let categoriaCliente = "estudiante";
let precio;

if (categoriaCliente === "estudiante") {
    precio = 10;
} else if (categoriaCliente === "adulto") {
    precio = 20;
} else if (categoriaCliente === "persona mayor") {
    precio = 15;
} else {
    precio = 25;
}

console.log(`El precio para un ${categoriaCliente} es $${precio}.`);


// velociadd internet// 
let velocidadInternet = 45;  
let categoriaVelocidad;

if (velocidadInternet >= 100) {
    categoriaVelocidad = "Alta velocidad";
} else if (velocidadInternet >= 50) {
    categoriaVelocidad = "Velocidad media";
} else if (velocidadInternet >= 10) {
    categoriaVelocidad = "Velocidad baja";
} else {
    categoriaVelocidad = "Muy baja velocidad";
}

console.log(`La categoría de tu velocidad de internet es: ${categoriaVelocidad}`);
