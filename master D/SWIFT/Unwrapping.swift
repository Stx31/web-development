func buscarNombrePorID(_ id: Int) -> String? {
    let nombres = [1: "Juan", 2: "Ana", 3: "Luis"]
    return nombres[id]
}

if let nombre = buscarNombrePorID(2) {
    print("Nombre encontrado: \(nombre)") 
} else {
    print("Nombre no encontrado")
}


let nombre = buscarNombrePorID(4) ?? "Desconocido"
print("Nombre: \(nombre)")  
