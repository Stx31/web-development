
function moveForward() {
  console.log("for")
}
function moveBackward() {
  console.log("back")
  }


function generarTabla() {
  const filas = parseInt(document.getElementById('inputFilas').value);
  const columnas = parseInt(document.getElementById('inputColumnas').value);
  for (let i = 0; i < filas; i++) {
    const fila = document.createElement('tr');
    for (let j = 0; j < columnas; j++) {
      const celda = document.createElement('td');
      const div = `<div class = "celda">  </div> `;
      celda.innerHTML = div;
      console.log(div)
      fila.appendChild(celda);
    }

  }
}

document.addEventListener(
  'keydown',
  (event) => {
  
    if (event.key === 'ArrowRight') {
      moveForward();
    } else if (event.key === 'ArrowLeft') {
      moveBackward();
    }
  }
)


