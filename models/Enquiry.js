const Sequelize = require('sequelize');
const db = require("../database/db");

// Define Database Model
module.exports = db.sequelize.define (
    'enquiry',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.INTEGER
        },
        owner_id: {
            type: Sequelize.INTEGER
        },
        vehicle_id: {
            type: Sequelize.INTEGER
        },
        requiredDate: {
            type: Sequelize.STRING
        },
        returnDate: {
            type: Sequelize.STRING
        },
        pickupLocation: {
            type: Sequelize.STRING
        },
        message: {
            type: Sequelize.STRING
        },
        approval: {
            type: Sequelize.STRING,
            default: "pending"
        }
    },
    {
        timestamps: false
    }
)