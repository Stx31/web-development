class Perro {
    constructor(nombre, raza, edad) {
      this.nombre = nombre;
      this.raza = raza;
      this.edad = edad;
      this.estaDurmiendo = false;
    }
  
    ladrar() {
      console.log('¡Guau! ¡Guau!');
    }
  
    dormir() {
      if (!this.estaDurmiendo) {
        console.log(`${this.nombre} está durmiendo.`);
        this.estaDurmiendo = true;
      } else {
        console.log(`${this.nombre} ya está durmiendo.`);
      }
    }
  
    despertar() {
      if (this.estaDurmiendo) {
        console.log(`${this.nombre} se despertó.`);
        this.estaDurmiendo = false;
      } else {
        console.log(`${this.nombre} ya está despierto.`);
      }
    }
  }
  
  
  const perro1 = new Perro('Max', 'Labrador', 3);
  const perro2 = new Perro('Luna', 'Dachshund', 2);
  
  perro1.ladrar();
  perro2.dormir();
  perro1.despertar();
  

//////////////////
class Player {
    constructor(nombre, sombrerocolor) {
        this._nombre = nombre;
        this._sombrerocolor = sombrerocolor;
        this._estaSaltando = false;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get sombrerocolor() {
        return this._sombrerocolor;
    }

    set sombrerocolor(nuevoColor) {
        this._sombrerocolor = nuevoColor;
    }

    get estaSaltando() {
        return this._estaSaltando;
    }

    saltar() {
        this._estaSaltando = true;
        console.log(`${this._nombre} está saltando.`);
    }

    dejarDeSaltar() {
        this._estaSaltando = false;
        console.log(`${this._nombre} dejó de saltar.`);
    }

    correr() {
        console.log(`${this._nombre} está corriendo.`);
    }

    saludar() {
        return `Hola, soy ${this._nombre} y mi sombrero es ${this._sombrerocolor}`;
    }
}

let player1 = new Player('MARIO', 'rojo');
let player2 = new Player('Luigi', 'verde');
let player3 = new Player('Toad', 'azul');

console.log(player1.saludar());
console.log(player2.saludar());
console.log(player3.saludar());

player1.saltar();
console.log(`¿${player1.nombre} está saltando? ${player1.estaSaltando}`);
player1.dejarDeSaltar();
console.log(`¿${player1.nombre} está saltando? ${player1.estaSaltando}`);
