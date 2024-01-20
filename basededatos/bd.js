// db.js

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '68.64.164.116',
  port: 19905,
  user: 'app_102_g01_jcedeno',
  password: 'app_102_g01_jcedeno',
  database: 'db_grupo_01_strategists'
});

connection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos MySQL: ' + err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL con el ID: ' + connection.threadId);
});

module.exports = connection;

