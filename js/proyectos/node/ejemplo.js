const fs = require('fs');

fs.readFile('archivo1.txt', 'utf8', (err, data) => {
  if (err) throw err;

  fs.writeFile('archivo2.txt', data, 'utf8', (err) => {
    if (err) throw err;

    console.log('Contenido del archivo1.txt copiado en archivo2.txt');
  });
});