const express = require('express');
const cors = require('cors')
const mysql = require ('./config/ConexionMySQL')
const app = express();
const users=[{"nombre":"unnombre"},{"edad":"3"}]
/* instalar nodemon -D
para ejecutar el servidor seria
npx nodemon index.js */

/* Para variable de entorno toca np install MySQL*/
app.get('/',(req,res) => {
    res.send('Hello Word');
});
app.get('/mirar',(req,res) => {
    mysql.query('SELECT * FROM `articulos`')
});
app.get('/getInventario',(req,res)=>{
    res.json(users)
})
app.listen(3001, () => {
    console.log('Server on port 3001');
});
/*
En modelos va 
en controller va enruta la vista con su req y su res
en routes va la ruta para hacer llamado al controlador
*/