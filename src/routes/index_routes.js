
const express = require('express')
const router = express.Router()
const cors = require('cors')
// el body parser sirve para traer los datos de un formario a través de un Json
const bodyParser = require('body-parser')

const controller = require('../controllers/index_controllers')

router.get('/',cors(),controller.uno)

router.get('/getInventario',cors(),controller.dos)

module.exports = router