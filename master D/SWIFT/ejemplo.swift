import Foundation

func calcularPromedio(nota1: Double, nota2: Double, nota3: Double, nota4: Double, nota5: Double) -> Double {
   
    let n1: Double = nota1
    let n2: Double = nota2
    let n3: Double = nota3
    let n4: Double = nota4
    let n5: Double = nota5


    let promedio: Double = (n1 + n2 + n3 + n4 + n5) / 5.0
    
    
    return promedio
}


let promedioNotas = calcularPromedio(nota1: 8.0, nota2: 7.5, nota3: 9.0, nota4: 6.0, nota5: 8.5)


print("El promedio de las notas es: \(promedioNotas)")
