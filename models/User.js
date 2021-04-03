const Sequelize = require('sequelize');
const db = require("../database/db");

// Define Database Model
module.exports = db.sequelize.define (
    'users',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)