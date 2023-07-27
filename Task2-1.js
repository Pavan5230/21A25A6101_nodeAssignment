const mysql = require('mysql2');

// Connection parameters
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql123',
    database:'mybd'
    
    
});
exports.connectDatabse = function(){
connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connected sucessfully");
    /*connection.query("create database mybmd;",function(err){
        if(err){
            console.log("error");
            return;
        }
        console.log("database created sucessfully!");
    })*/
})
}
exports.createTable = function(){
    connection.connect((err)=>{
        if(err){
            console.log(err);
            return;
        }
        connection.query("CREATE TABLE employees (id INT PRIMARY KEY AUTO_INCREMENT,name VARCHAR(255),department VARCHAR(100), salary DECIMAL(10, 2));",function(err){
            if(err){
                console.log(err);
                return;
            }
            console.log('Database created sucessfully')
        })
    })
}