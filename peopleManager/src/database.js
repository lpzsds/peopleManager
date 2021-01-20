const { Pool } = require('pg')

const config = {
    user: 'postgres', // Usuario de la bd
    host: 'localhost', //direccion de la bd
    password: 'postgres', // contraseña de la bd
    database: 'prueba' // nombre de la bd
}

const pool = new Pool(config);

module.exports = pool;