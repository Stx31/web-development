function contarVocales(texto) {
  var contador = 0;
  var vocales = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < texto.length; i++) {
    var letra = texto.charAt(i).toLowerCase();
    if (vocales.indexOf(letra) !== -1) {
      contador++;
    }
  }

  return contador;
}

var texto = prompt("Ingresa un texto: ");
var cantidadVocales = contarVocales(texto);
console.log("El texto contiene " + cantidadVocales + " vocales.");