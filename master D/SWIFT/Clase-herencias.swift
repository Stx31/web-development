class Animal {
    var nombre: String
    var edad: Int

    init(nombre: String, edad: Int) {
        self.nombre = nombre
        self.edad = edad
    }

    func hacerSonido() {
        print("El animal hace un sonido.")
    }
}


class Perro: Animal {
    var raza: String

    init(nombre: String, edad: Int, raza: String) {
        self.raza = raza
        super.init(nombre: nombre, edad: edad)
    }

    override func hacerSonido() {
        print("El perro ladra.")
    }
}

let miPerro = Perro(nombre: "Fido", edad: 3, raza: "Labrador")
miPerro.hacerSonido()  
