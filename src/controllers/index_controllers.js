const { request } = require('http')
const path = require('path')


const cors = require('cors')

const connection = require('../../config/ConexionMySQL');


var cont = 0;
const controller = {}

controller.uno = (req, res) =>{
    res.send('Hello Word');
}

controller.dos=(req,res) => {
    connection.query('SELECT * FROM `articulos` ORDER BY codigo DESC;', function(err, rows, fields) 
    {
        res.json(rows);
    });
}

controller.insertar=(req,res) => {
    const body = require('body-parser');
    var codigo = req.body.codigo
    var descripcion = req.body.descripcion
    var precio = req.body.precio
    connection.query('INSERT INTO articulos VALUES ("'+codigo+'", "'+descripcion+'","'+precio+'")')
     res.send("exit")   
    
}

controller.modificar=(req,res) => {
    const body = require('body-parser');
    var codigo = req.body.codigo
    var descripcion = req.body.descripcion
    var precio = req.body.precio
    connection.query('UPDATE articulos set descripcion = "'+descripcion+'", precio = "'+precio+'" where codigo = '+codigo)
   res.send("exit")   
    
}


module.exports = controller