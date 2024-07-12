function calcularPromedio(nota1, nota2, nota3, nota4, nota5) {

    console.log("Tipo de dato de nota1: " + typeof nota1);
    console.log("Tipo de dato de nota2: " + typeof nota2);
    console.log("Tipo de dato de nota3: " + typeof nota3);
    console.log("Tipo de dato de nota4: " + typeof nota4);
    console.log("Tipo de dato de nota5: " + typeof nota5);
    var promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    return promedio;
}
var nota1 = 8.0;
var nota2 = 7.5;
var nota3 = 9.0;
var nota4 = 6.5;
var nota5 = 8.5;

var promedioNotas = calcularPromedio(nota1, nota2, nota3, nota4, nota5);
console.log("El promedio de las notas es: " + promedioNotas);
