
var mysql = require('mysql');
let hoste = process.env.HOST;
var connection = mysql.createConnection({
  // host: '172.18.0.2',
   host: hoste,
   user: 'root',
   password: 'root',
   database: 'ProySof',
   port: 3306
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});
connection.query(`create table articulos (
    codigo int primary key auto_increment,
    descripcion varchar(50),
    precio float
  )`, (error,resultado) => {
if (error) {
				
return;
}
  });
//connection.end();
module.exports= connection