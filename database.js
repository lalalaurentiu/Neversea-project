const mysql = require('mysql2');
const conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  port:"3306",
  password: 'root',      // Replace with your database password
  database: 'list_db', // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});


module.exports = conn;