
const numerosArray = [];

for (let i = 1; i <= 250; i++) {
  numerosArray.push(i);
}


function imprimirNumerosEnHTML() {
  const resultadoDiv = document.getElementById('numero-arrays');
  let contenido = '';

  numerosArray.forEach(numero => {
    contenido += numero + ' ';
  });


  resultadoDiv.textContent = contenido;
}


imprimirNumerosEnHTML();
