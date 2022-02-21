const express = require('express');
const cors = require('cors')
const mysql = require ('./config/ConexionMySQL');
const connection = require('./config/ConexionMySQL');
const app = express();
app.listen(3002, () => {
    console.log('Server on port 3001');
});
/* instalar nodemon -D
para ejecutar el servidor seria
npx nodemon index.js */

/* Para variable de entorno toca np install MySQL*/
app.get('/',(req,res) => {
    res.send('Hello Word');
});
app.get('/mirar',(req,res) => {
    connection.query('SELECT * FROM `articulos`', function(err, rows, fields) 
    {
        res.json(rows);
    });
});


/*
En modelos va 
en controller va enruta la vista con su req y su res
en routes va la ruta para hacer llamado al controlador
*/