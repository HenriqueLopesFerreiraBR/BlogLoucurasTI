const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");
const User = require ("../users/User");

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article); // UMA Categoria tem muitos artigos
Article.belongsTo(Category); // UM Artigo pertence a uma VCategotia

//Article.belongsTo(User); // UM Artigo pertence a um Usuario
//User.hasMany(Article); // UM Usuario tem muitos artigos


//Article.sync({force:true});
module.exports = Article;