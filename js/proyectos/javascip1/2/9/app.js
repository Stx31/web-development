function sumar(numero){
    const sumar = numero.reduce((x,y)=>x+y)
    numero.push(sumar)
    return numero
}
console.log(sumar([4,6]))