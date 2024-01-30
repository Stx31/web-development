function evaluarCalificacion() {
    const calificacion = parseFloat(prompt("Ingresa un número del 0 al 10:"));
  
    if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
      mostrarMensajeEnPantalla("Número fuera de rango.");
    } else if (calificacion <= 3) {
      mostrarMensajeEnPantalla("Muy deficiente");
    } else if (calificacion <= 5) {
      mostrarMensajeEnPantalla("Insuficiente");
    } else if (calificacion <= 6) {
      mostrarMensajeEnPantalla("Suficiente");
    } else if (calificacion <= 7) {
      mostrarMensajeEnPantalla("Bien");
    } else if (calificacion <= 9) {
      mostrarMensajeEnPantalla("Notable");
    } else {
      mostrarMensajeEnPantalla("Sobresaliente");
    }
  }
  
  function mostrarMensajeEnPantalla(mensaje) {
    alert(mensaje);
  }
  
  evaluarCalificacion();
  