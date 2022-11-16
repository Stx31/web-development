
/**
 * 
 * @param {string} texto esto es ara tral 
 * @param {number} veces esto es ara tral 
 * @returns devuelve tal cose
 */

function repetir(texto, veces) {
    let nuevoText = ""
    for (let index = 0; index < veces; index++) {
        nuevoText = nuevoText + texto
    }
    return nuevoText
}
const imput = document.getElementById("arbol")


const output = document.getElementById("tree-container")
output.innerHTML = "x"

document.write()
function generateTree() {
    var texto = ("")
    var tamaño = imput.value
    for (let i = 1; i <= tamaño; i = i + 1){

        if (i <= tamaño / 2) {
            texto = texto + ("<p class='green'>") + (repetir("X",i)) + "</p>"
        } else {
            texto = texto + ("<p class='brown'>") + ("H") + "</p>"
        }

    }
    output.innerHTML = texto

}

