const { request } = require('http')
const path = require('path')


const cors = require('cors')

const connection = require('../../config/ConexionMySQL');
const { NULL } = require('mysql/lib/protocol/constants/types');


var cont = 0;
const controller = {}

controller.uno = (req, res) =>{
    res.send('Hello Word');
}

controller.dos=(req,res) => {
    const body = require('body-parser');
    let codigo = req.query.codigo
    
    console.log(codigo)
    if(!codigo|| codigo ==undefined){
    connection.query('SELECT * FROM `articulos` ORDER BY codigo DESC;', function(err, rows, fields) 
    {
        console.log(codigo)
        res.json(rows);
    });
    }else{
        connection.query('SELECT * FROM `articulos` WHERE codigo ="'+codigo+'"', function(err, rows, fields) 
        {
            res.json(rows);
        });   
    }
}

controller.insertar=(req,res) => {
    const body = require('body-parser');
    var codigo = req.body.codigo
    var descripcion = req.body.descripcion
    var precio = req.body.precio
    connection.query('INSERT INTO articulos VALUES ("'+codigo+'", "'+descripcion+'","'+precio+'")',(error,resultado) => {
        if (error) {
            console.log(error.sqlMessage)                         
            return;
        }
    });
     res.send("exit")   
    
}
controller.eliminar=(req) => {
    const body = require('body-parser');
    let codigo = req.query.codigo
    console.log(codigo)
    
    connection.query('DELETE FROM articulos WHERE codigo = "'+codigo+'"')
        return;
        
    
}

controller.modificar=(req,res) => {
    const body = require('body-parser');
    var codigo = req.body.codigo
    var descripcion = req.body.descripcion
    var precio = req.body.precio
    console.log(codigo)
    connection.query('UPDATE articulos set descripcion = "'+descripcion+'", precio = "'+precio+'" where codigo = '+codigo,(error,rows,fields) => {
        if (error) {  
            console.log(error.sqlMessage)                      
            return;
        }
    });
   res.send("exit")   
    
}

controller.filtrarById=(req,res) => {
    const body = require('body-parser');
    let codigo = req.query.codigo
    console.log(codigo)
  
    connection.query('SELECT * FROM `articulos` WHERE codigo ="'+codigo+'"', function(err, rows, fields) 
        {
            res.json(rows);
        });
}


module.exports = controller