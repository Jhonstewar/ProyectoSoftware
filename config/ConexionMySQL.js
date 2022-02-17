
var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
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
console.log(error);				
return;
}
  });
connection.end();