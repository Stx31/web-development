let sumar: (Int, Int) -> Int = { (a: Int, b: Int) in
    return a + b
}

let resultado = sumar(3, 5)
print("Resultado: \(resultado)") 

func operarConNumeros(a: Int, b: Int, operacion: (Int, Int) -> Int) -> Int {
    return operacion(a, b)
}

let resultadoMultiplicacion = operarConNumeros(a: 4, b: 2) { $0 * $1 }
print("Resultado de la multiplicación: \(resultadoMultiplicacion)")  