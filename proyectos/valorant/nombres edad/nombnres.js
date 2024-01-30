// Arrays con nombres y edades
var nombres = ["Juan", "María", "Pedro", "Laura", "Ana"];
var edades = [20, 25, 30, 35, 40];

// Función para generar un número aleatorio entre min y max (ambos inclusive)
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar nombres aleatorios con edades
for (var i = 0; i < 5; i++) {
  var indiceAleatorio = generarNumeroAleatorio(0, nombres.length - 1);
  var nombreAleatorio = nombres[indiceAleatorio];
  var edadAleatoria = edades[indiceAleatorio];
  console.log(nombreAleatorio + " tiene " + edadAleatoria + " años.");
}