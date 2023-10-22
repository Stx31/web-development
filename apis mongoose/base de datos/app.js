const { MongoClient } = require('mongodb');


const url = 'mongodb://localhost:27017';


const dbName = 'miBasedeDatos';


MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Conectado a la base de datos');

    const db = client.db(dbName);

    const collection = db.collection('usuarios');

    collection.insertOne({ nombre: 'Juan', edad: 30 }, (err, result) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Documento insertado');
        }

        client.close();
    });
});
