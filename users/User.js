const Sequelize = require("sequelize");
const Article = require("../articles/Article");
const connection = require("../database/database");

const User = connection.define('users',{
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

//User.sync({force:true});
module.exports = User
