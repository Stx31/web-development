function calcularPromedio(...numeros) {
    if (numeros.length === 0) {
        return 0;
    }
    let suma = numeros.reduce((acc, val) => acc + val, 0);
    return suma / numeros.length;
}

console.log(calcularPromedio(3, 5, 7, 10));  
console.log(calcularPromedio(1, 2, 3));      
console.log(calcularPromedio());            
//multiples argumentos 


function crearAplicadorDeDescuento(descuento) {
    return function(precio) {
        return precio - (precio * descuento);
    };
}


const aplicadorDeDescuento10 = crearAplicadorDeDescuento(0.10);  
const aplicadorDeDescuento20 = crearAplicadorDeDescuento(0.20);  

console.log(aplicadorDeDescuento10(100));  
console.log(aplicadorDeDescuento20(100));  
console.log(aplicadorDeDescuento10(50));   
console.log(aplicadorDeDescuento20(50));   


//filter
const numeros = [1, 2, 3, 4, 5];

const esPar = numeros.filter(num => num % 2 === 0);

console.log(esPar);  
// for each
numeros.forEach(num => console.log(num * 2));
