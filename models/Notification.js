const Sequelize = require('sequelize');
const db = require("../database/db");

// Define Database Model
module.exports = db.sequelize.define (
    'notification',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        enquiry_id: {
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)