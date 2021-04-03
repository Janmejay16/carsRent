const Sequelize = require('sequelize');
const db = require("../database/db");

// Define Database Model
module.exports = db.sequelize.define (
    'vehicleowner',
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
        location: {
            type: Sequelize.STRING
        },
        vehicleImage: {
            type: Sequelize.BLOB('long')
        },
        license: {
            type: Sequelize.BLOB('long')
        },
        rc: {
            type: Sequelize.BLOB('long')
        },
        insurance: {
            type: Sequelize.BLOB('long')
        }
    },
    {
        timestamps: false
    }
)