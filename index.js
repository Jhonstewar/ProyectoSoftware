const express = require('express');



const mysql = require ('./config/ConexionMySQL');
const connection = require('./config/ConexionMySQL');
const routeslog = require('./src/routes/routeslogin/routeslogin')

const body = require('body-parser');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(body.json())
app.use(body.urlencoded({extended:true}))
app.use(routeslog)
app.use(express.json())
app.listen(3001, () => {
    console.log('Server on port 3001');
});
/* instalar nodemon -D
para ejecutar el servidor seria
npx nodemon index.js */

/* Para variable de entorno toca np install MySQL*/
