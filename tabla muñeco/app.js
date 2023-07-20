var cruz = 0


function generarTabla() {
   
    const filas = parseInt(document.getElementById('inputFilas').value);
    const columnas = parseInt(document.getElementById('inputColumnas').value);

    const tablaContainer = document.getElementById('tablaContainer');

    const tabla = document.createElement('table');

    for (let i = 0; i < filas; i++) {
        const fila = document.createElement('tr');
        
        for (let j = 0; j < columnas; j++) {
            const celda = document.createElement('td');
            celda.innerHTML = `<div class = "celda"> x </div> `;
            fila.appendChild(celda);
        }   

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
              moveForward();
            } else if (event.key === 'ArrowLeft') {
              moveBackward();
            }

        tabla.appendChild(fila);
    } 
      
    
    

    tablaContainer.appendChild(tabla);
}


generarTabla()
