const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();
const puerto = 3000;

app.use(bodyParser.json());

app.post('/guardar-datos', async (req, res) => {
    try {
        const datosActuales = await fs.readFile('datos_usuario.json', 'utf-8');
        const datosJson = JSON.parse(datosActuales);

        datosJson.push(req.body);

        await fs.writeFile('datos_usuario.json', JSON.stringify(datosJson, null, 2));

        res.json({ message: 'Datos guardados exitosamente.' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error al guardar los datos.' });
    }
});

app.use(express.static(__dirname));

app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
