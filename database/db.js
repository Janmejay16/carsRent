const Sequelize = require('sequelize');

// Delicate info stored as Environment variables
require('dotenv').config()
const db = {}

// Connection to Database
// const sequelize = new Sequelize(
//     "deku0du14ksfkm",
//     "axamejuwvwitvy",
//     "a2b2e29ccccac5f4375608d5f5fbe3305566b5deac80c6b9f59c1825ab7486d5", {
//         host: 'ec2-52-1-115-6.compute-1.amazonaws.com',
//         port: '5432',
//         dialect: 'postgres',
//         dialectOptions: {
//             ssl: {
//               require: true,
//               rejectUnauthorized: false // <<<<<<< YOU NEED THIS
//             }
//         }
//     }
// )

const sequelize =new Sequelize( "postgres://axamejuwvwitvy:a2b2e29ccccac5f4375608d5f5fbe3305566b5deac80c6b9f59c1825ab7486d5@ec2-52-1-115-6.compute-1.amazonaws.com:5432/deku0du14ksfkm",
    {
      dialect: "postgres",
      protocol: "postgres",
      port: 5432,
      host: "ec2-52-1-115-6.compute-1.amazonaws.com:5432",
      logging: true, //false
      dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false // <<<<<<< YOU NEED THIS
            }
        }   
   });

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.log('Unable to connect to the database:');
    });


/*
postgres://axamejuwvwitvy:a2b2e29ccccac5f4375608d5f5fbe3305566b5deac80c6b9f59c1825ab7486d5@ec2-52-1-115-6.compute-1.amazonaws.com:5432/deku0du14ksfkm
*/


/*
Uncomment the line below when you are
running the script for the first time

Forcefully creates a table, drops if it exists
*/
// sequelize.sync({force:true})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db;