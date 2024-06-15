
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
