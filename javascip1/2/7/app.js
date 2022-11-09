var texto = prompt("Introduce el texto que quieras en mayuscula");
if (texto.length > 15) {
    document.write("mucho texto")
} else {
    var n = Math.random() * 2
    if (n < 1) {
        document.write(texto.toUpperCase())
    } else {
        document.write(texto.toLowerCase())
    }


}