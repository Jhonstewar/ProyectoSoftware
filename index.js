const express = require('express');
const cors = require('cors')


const mysql = require ('./config/ConexionMySQL');
const connection = require('./config/ConexionMySQL');
const routes = require('./src/routes/index_routes')

const body = require('body-parser');
const app = express();

app.use(cors())
app.use(body.json())
app.use(body.urlencoded({extended:true}))
app.use(routes)
app.use(express.json())
app.listen(3001, () => {
    console.log('Server on port 3001');
});
/* instalar nodemon -D
para ejecutar el servidor seria
npx nodemon index.js */

/* Para variable de entorno toca np install MySQL*/
