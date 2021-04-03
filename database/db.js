const Sequelize = require('sequelize');

// Delicate info stored as Environment variables
require('dotenv').config()
const db = {}

// Connection to Database
const sequelize = new Sequelize(process.env.dbName, process.env.user, process.env.password, {
    host: 'localhost',
    dialect: 'mysql'
})


/*
Uncomment the line below when you are
running the script for the first time

Forcefully creates a table, drops if it exists
*/
// sequelize.sync({force:true})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db;