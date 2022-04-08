const express = require('express')
const routerlog = express.Router()
const cors = require('cors')
const body = require('body-parser');
// el body parser sirve para traer los datos de un formario a través de un Json
//const bodyParser = require('body-parser')

const controllerlog = require('../../controllers/controllersLog/controllerLog')

/*
Ruta para crear un nuevo usuario
*/
routerlog.post('/addUsuario',body.urlencoded({extended:false}),controllerlog.insertarusuario)

/*
Ruta para crear un nuevo administrador
*/
routerlog.post('/addAdmin',body.urlencoded({extended:false}),controllerlog.insertaradmin)

/*
ruta para validar la conexion como usuario o administrador
*/
//routerlog.get('/valiLog',cors(),controller.dos)



module.exports = routerlog