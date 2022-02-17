const express = require('express');
const app = express();
/* instalar nodemon -D
para ejecutar el servidor seria
npx nodemon index.js */

/* Para variable de entorno toca np install MySQL*/
app.get('/',(req,res) => {
    res.send('Hello Word');
});
app.listen(3001, () => {
    console.log('Server on port 3000');
});
/*
En modelos va 
en controller va enruta la vista con su req y su res
en routes va la ruta para hacer llamado al controlador
*/