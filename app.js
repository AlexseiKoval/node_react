 
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
 //*** */
const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
 
const Company = sequelize.define("company", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
Company.hasMany(Product);
 
sequelize.sync({force:false}).then(()=>{
  console.log("Tables have been created");
}).catch(err=>console.log(err));
//
app.use(function (request, response, next) {
   console.log(request)
   // response.send("<h2>Hello</h2>");
   next()
});

app.get("/", function(request, response){
    response.send("<h2>Привет Express!</h2>");
});

app.listen(5000);