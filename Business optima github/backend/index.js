const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const con = require('./config/database');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/' , async (req,res) => {
  const sql = "INSERT INTO users (`fullName` , `email` , `password`) Values(?)";
  const values = [req.body.fullName , req.body.email , req.body.password];

  con.query(sql , [values] ,(err, data) => {
    if(err){
        return res.json(err);
    }
    return res.json(data);
  } )
})
app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
