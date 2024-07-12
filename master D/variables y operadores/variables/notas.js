function calcularPromedio(nota1, nota2, nota3, nota4, nota5) {
    
    const notas = [nota1, nota2, nota3, nota4, nota5];
    
    
    notas.forEach((nota, index) => {
        console.log(`Tipo de dato de nota${index + 1}: ${typeof nota}`);
    });


    const suma = notas.reduce((acc, nota) => acc + nota, 0);
    const promedio = suma / notas.length;
    return promedio;
}

const nota1 = 8.0;
const nota2 = 7.5;
const nota3 = 9.0;
const nota4 = 6.5;
const nota5 = 8.5;

const promedioNotas = calcularPromedio(nota1, nota2, nota3, nota4, nota5);
console.log("El promedio de las notas es: " + promedioNotas);
