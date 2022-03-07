
const express = require('express')
const router = express.Router()
const cors = require('cors')
const body = require('body-parser');
// el body parser sirve para traer los datos de un formario a través de un Json
//const bodyParser = require('body-parser')

const controller = require('../controllers/index_controllers')

router.get('/',cors(),controller.uno)

router.get('/getInventario',cors(),controller.dos)

router.put('/modInventario',body.urlencoded({extended:false}),controller.modificar)

router.post('/addInventario',body.urlencoded({extended:false}),controller.insertar)

router.post('/getInventarioById',cors(),body.urlencoded({extended:false}),controller.filtrarById)

module.exports = router