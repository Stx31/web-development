protocol Describible {
    func describir() -> String
}

struct Coche: Describible {
    var marca: String
    var modelo: String

    func describir() -> String {
        return "Coche: \(marca) \(modelo)"
    }
}

extension Coche {
    func esDeMarca(_ marca: String) -> Bool {
        return self.marca == marca
    }
}

let miCoche = Coche(marca: "Toyota", modelo: "Corolla")
print(miCoche.describir())  
print(miCoche.esDeMarca("Toyota"))  
