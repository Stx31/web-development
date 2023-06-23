function calcular() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operador = document.getElementById("operador").value;
    var resultado;

    if (operador === "+") {
      resultado = parseInt(num1, 2) + parseInt(num2, 2);
    } else if (operador === "-") {
      resultado = parseInt(num1, 2) - parseInt(num2, 2);
    } else if (operador === "*") {
      resultado = parseInt(num1, 2) * parseInt(num2, 2);
    } else if (operador === "/") {
      resultado = parseInt(num1, 2) / parseInt(num2, 2);
    }

    document.getElementById("resultado").value = resultado.toString(2);
  }