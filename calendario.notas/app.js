const fila = document.querySelector("#fila")
const txt = document.querySelector("#texto")
for (let index = 0; index < fila.children.length; index++) {
    const element = fila.children[index];
    element.addEventListener("click", () => {
        if (element.className === "green") {
            element.className = "red"
        } else {
            element.className = "green"
        }
    })
    element.innerHTML += index + 1
}
const calcularPorcentajeClaseGreen = () => {
    const elementos = document.querySelectorAll('.green');
    const totalElementos = elementos.length;
    if (totalElementos === 0) {
      return 0;
    }
    const contadorGreen = elementos.length;
    const porcentajeGreen = (contadorGreen / totalElementos) * 100;
    return porcentajeGreen; 
  };

  const mostrarPorcentajeEnAlerta = () => {
    const porcentajeGreen = calcularPorcentajeClaseGreen();
    alert(`El porcentaje es${porcentajeGreen}%`);
  };

  const botonCalcularPorcentaje = document.getElementById('calcularPorcentajeBtn');
  botonCalcularPorcentaje.addEventListener('click', mostrarPorcentajeEnAlerta);
