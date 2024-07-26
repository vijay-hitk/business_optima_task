const mysql = require('mysql');

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'users',
    
});

con.connect(function(err){
    if(err){
        console.log(err);
    }else {
        console.log('connected');
        // con.query("SELECT * FROM users" , function(err , result ){
        //     if(err){
        //         console.log(err);
        //     }else {
        //         console.log(result);
        //     }
        // })
    }
})

module.exports = con;