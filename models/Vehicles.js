const Sequelize = require('sequelize');
const db = require("../database/db");

// Define Database Model
module.exports = db.sequelize.define (
    'vehicles',
    {
        vehicleId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        location: {
            type: Sequelize.STRING
        },
        modelName: {
            type: Sequelize.STRING
        },
        rentPerDay: {
            type: Sequelize.INTEGER
        },
        seats: {
            type: Sequelize.INTEGER
        },
        mileage: {
            type: Sequelize.INTEGER
        },
        fuelType: {
            type: Sequelize.STRING
        },
        vehicleType: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        vehicleImage: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)