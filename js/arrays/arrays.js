let frutas = ["Manzana", "Banana", "Naranja"];

console.log(frutas[0]); // Acceder al primer elemento ("Manzana")

console.log(frutas[1]); // Acceder al segundo elemento ("Banana")

frutas[2] = "Pera"; // Modificar el tercer elemento por "Pera"

console.log(frutas); // ["Manzana", "Banana", "Pera"]
console.log(frutas.length); // Mostrará 3


frutas.push("Mango"); // Añadir "Mango" al final del array

console.log(frutas); // ["Manzana", "Banana", "Pera", "Mango"]

frutas.pop(); // Eliminar el último elemento ("Mango")


console.log(frutas); // ["Manzana", "Banana", "Pera"]

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
frutas.forEach(function(fruta) {
  console.log(fruta);
});
let indice = frutas.indexOf("Banana"); // Buscar el índice de "Banana"
console.log(indice); // Mostrará 1