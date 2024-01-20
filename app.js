// app.js (o server.js)

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./basededatos/bd'); // Ruta al archivo db.js

const app = express();
const PORT = process.env.PORT || 19905;

app.use(bodyParser.json());

// Ruta para manejar la inserción de datos
app.post('/insertarDatos', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Realiza la inserción en la base de datos
  const query = `INSERT INTO datos_formulario (name, email, phone, message) VALUES (?, ?, ?, ?)`;
  db.query(query, [name, email, phone, message], (error, results, fields) => {
    if (error) {
      console.error('Error al insertar en la base de datos: ' + error.message);
      res.status(500).send('Error al procesar la solicitud.');
      return;
    }

    console.log('Datos del formulario insertados con éxito en la base de datos.');
    res.status(200).send('Datos del formulario insertados con éxito en la base de datos.');
  });
});

// Resto de tu lógica de la aplicación...

app.listen(PORT, () => {
  console.log(`Servidor Node.js iniciado en el puerto ${PORT}`);
});

