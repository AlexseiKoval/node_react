 
const express = require("express");  

const app = express();

const bodyParser = require('body-parser');
const Sequelize = require("sequelize");

app.use(bodyParser.json());
 
const sequelize = new Sequelize("node", "root", "root", {
    dialect: "mysql",
    host: "localhost",
    define: {
        timestamps: false
    }
});
 
app.use(function (request, response, next) {
   console.log(request)
   // response.send("<h2>Hello</h2>");
   next()
});

app.get("/", function(request, response){
    response.send("<h2>Привет Express!</h2>");
});

app.listen(3000);