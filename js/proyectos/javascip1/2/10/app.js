

let n1 = parseInt(prompt("Introduzca un numero",""))
let n2 = parseInt(prompt("Introduzca otro numero",""))

function sumarNumeros(n1,n2){
    return n1+n2

    function sumar(numero){
        const sumar = numero.reduce((x,y)=>x+y)
        numero.push(sumar)
        return numero
        console.log(sumar([4,6]))
    }
}

let resultado = sumarNumeros(n1,n2)

console.log(resultado)