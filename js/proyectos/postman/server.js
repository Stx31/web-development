const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


const datosArray = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());
// permitir o restringir el acceso a recursos en un servidor desde un dominio diferente al que sirve la página web actual.

app.post('/guardarDatos', (req, res) => {
    const datosRecibidos = req.body;
    datosArray.push(datosRecibidos);
    console.log('Datos recibidos y guardados:', datosRecibidos);
    res.json({ mensaje: 'Datos recibidos y guardados correctamente' });
});


app.get('/mostrarDatos', (req, res) => {
    res.json({ datos: datosArray });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

app.put('/modificarDatos/:id', (req, res) => {
    const id = req.params.id;
    const nuevosDatos = req.body;

   
    const index = datosArray.findIndex(item => item.id === id);

    if (index !== -1) {
        datosArray[index] = { ...datosArray[index], ...nuevosDatos };
        console.log('Datos modificados:', datosArray[index]);
        res.json({ mensaje: 'Datos modificados correctamente' });
    } else {
        res.status(404).json({ error: 'ID no encontrado' });
    }
});

app.delete('/eliminarDatos/:id', (req, res) => {
    const id = req.params.id;   
    const datosFiltrados = datosArray.filter(item => item.id !== id);

    if (datosFiltrados.length < datosArray.length) {
        console.log('Datos eliminados con ID:', id);
        datosArray = datosFiltrados;
        res.json({ mensaje: 'Datos eliminados correctamente' });
    } else {
        res.status(404).json({ error: 'ID no encontrado' });
    }
});