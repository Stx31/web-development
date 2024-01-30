// Lista de prefijos y sufijos para generar nombres
const prefijos = ['Deadly', 'Savage', 'Rapid', 'Swift', 'Fearless', 'Fierce', 'Brutal', 'Vicious', 'Lethal'];
const sufijos = ['Slayer', 'Destroyer', 'Assassin', 'Avenger', 'Reaper', 'Hunter', 'Executioner', 'Champion', 'Warrior'];

// Función para generar un nombre aleatorio
function generarNombre() {
  const prefijoAleatorio = prefijos[Math.floor(Math.random() * prefijos.length)];
  const sufijoAleatorio = sufijos[Math.floor(Math.random() * sufijos.length)];
  return prefijoAleatorio + sufijoAleatorio;
}

// Ejemplo de uso
const nombreAleatorio = generarNombre();
console.log(nombreAleatorio);