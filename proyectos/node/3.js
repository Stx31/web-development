const fs = require('fs');

// Leer contenido de un archivo
fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Escribir en un archivo
fs.writeFile('nuevo.txt', 'Contenido del nuevo archivo', (err) => {
  if (err) throw err;
  console.log('Se ha creado el archivo nuevo.txt');
});