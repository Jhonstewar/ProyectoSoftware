const { request } = require('http');
const path = require('path')

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

module.exports = controller