var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1111",
  database: "sos",
});

connection.connect();
//(column_name1 decimal(1), w varchar(19))
/*
connection.query("CREATE TABLE erm14(phone2 decimal(9))", function() {
  console.log("win");
});

connection.query("INSERT INTO erm14 (phone2)" +
  "  VALUE (1)", function(err, result) {
  if(err)
    console.log('Error while performing Query. Registration falied. ' + err);
  else
    console.log('Registration ok');

});


//registration
/*
var _first_name = "ff";
var _last_name = "ll";
var _password = "fsf2d"; 
var _imei = 43215325; 
var _phone = 4323531; 
var _email = "4321@ert.ddt"; 
var _phone2 = 334321; 
var _user_id = 1;

var post = {"first_name": _first_name, 
            "last_name": _last_name, 
            "password": _password, 
            "imei": _imei, 
            "phone": _phone, 
            "email": _email, 
            "phone2": _phone2, 
            "user_id": _user_id
          };
*/
//  'INSERT INTO user VALUES ?', post
  
connection.query("INSERT INTO user (first_name, last_name, password, imei, phone, email, phone2, user_id)" +
  "  VALUE ('ff', 'll', 'fsf2d', 43215325, 4323531,'4321@ert.ddt', 134, 1)" , function(err, result) {
  if(err)
    console.log('Error while performing Query. Registration falied. ' + err);
  else
    console.log('Registration ok');

});

connection.end();



