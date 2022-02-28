const { request } = require('http');
const path = require('path')
const body = require('body-parser');

const cors = require('cors')

const connection = require('../../config/ConexionMySQL');


var cont = 0;
const controller = {}

controller.uno = (req, res) =>{
    res.send('Hello Word');
}

controller.dos=(req,res) => {
    connection.query('SELECT * FROM `articulos`', function(err, rows, fields) 
    {
        res.json(rows);
    });
}

controller.insertar=(req,res) => {
    var codigo = req.query.codigo
    var descripcion = req.query.descripcion
    var precio = req.query.precio
    connection.query('UPDATE articulos set descripcion = "'+descripcion+'", precio = "'+precio+'" where codigo = '+codigo)
   res.send("exitoso")   
}


module.exports = controller