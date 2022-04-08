const { request } = require('http')
const path = require('path')
const cors = require('cors')

const connection = require('../../../config/ConexionMySQL');
const { NULL } = require('mysql/lib/protocol/constants/types');
const { query } = require('express');
const controllerlog = {}

//Crear nuevo usuario
controllerlog.insertarusuario = (req,res) => {               
      //(cedula,id,pNombre,sNombre,pApellido,sApellido,correo,contrasena,estado,fCreacion,fAcceso)
    const body = require('body-parser');
    console.log(req.query);
    let date = new Date();
    var sql='INSERT INTO usuarios  VALUES ?';
    var values=[
        [  
            
            cedula    = req.query.cedula,
            id        = req.query.id,
            pNombre   = req.query.pNombre,
            sNombre   = req.query.sNombre,
            pApellido = req.query.pApellido,
            sApellido = req.query.sApellido,
            correo    = req.query.correo,
            contrasena= req.query.contrasena,
            estado    = 1,
            fCreacion = date.toISOString().split('T')[0],
            fAcceso   = date.toISOString().split('T')[0]+' '+date.toLocaleString().split(' ')[1]
        ],
       
    ];
    connection.query(sql,[values],(error,resultado) => {
        if (error) {
            console.log(error.sqlMessage)                         
            return;
        }
    });
    res.send('Añadido nuevo usuario');
    
}

//crear un administrador
controllerlog.insertaradmin = (req,res) => {               
  
  const body = require('body-parser');

  var logi;
  let date = new Date();
  connection.query('SELECT cedula,contrasena FROM `usuarios` WHERE id="'+req.query.id+'"',function(err, rows, fields) 
  {
    
        var resultArray = Object.values(JSON.parse(JSON.stringify(rows)))
    
        var sql='INSERT INTO administradores  VALUES ?';
        var values=[
             [  
          
                cedula    = resultArray[0].cedula,         
                contraseña= resultArray[0].contrasena,
                permiso    = 1,
                fCreacion = date.toISOString().split('T')[0],
                fAcceso   = date.toISOString().split('T')[0]+' '+date.toLocaleString().split(' ')[1]
      ],
     
  ];
  connection.query(sql,[values],(error,resultado) => {
      if (error) {
          console.log(error.sqlMessage)                         
          return;
      }
  });
    
      
  });
  console.log(logi)
 
 
  //res.send('Añadido nuevo usuario');
  
}

module.exports = controllerlog