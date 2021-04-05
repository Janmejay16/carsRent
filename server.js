const express = require('express');
const users = express.Router();
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const VehicleOwner = require('./models/VehicleOwner');
const Vehicles = require('./models/Vehicles');
const Enquiry = require('./models/Enquiry');
const Notification = require('./models/Notification');
var bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const multer = require('multer')
const path = require('path');
const addData = require('./database/addData')

Vehicles.belongsTo(VehicleOwner, {foreignKey: 'fk_ownerid', targetkey: 'id'})
VehicleOwner.hasOne(Vehicles, {foreignKey: 'fk_ownerid', targetkey: 'id'})

const secretOrKey = "youcannevereverguessthisstringifursmarthahalol"

users.use(cors())

var app = express();
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({extended: false})
)

app.use(express.static(path.join(__dirname,'build')));
app.use('/uploads', express.static('uploads'))

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '/uploads/'));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + req.body.email.split('.').join("") + path.extname(file.originalname))
    }
});
const upload = multer({ storage: storage })

// ----------------------------------------------------------------------------
// Add Data
// ----------------------------------------------------------------------------
// addData()

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
})

app.get('/users', (req,res) => {
    User.findAll({})
    .then(users => {
        res.json(users)
    })
})

app.get('/vehicleowners', (req,res) => {
    VehicleOwner.findAll({})
    .then(owners => {
        res.json(owners)
    })
})

app.get('/vehicles', (req,res) => {
    Vehicles.findAll({})
    .then(vehicles => {
        res.json(vehicles)
    })
})

app.get('/vehicle/:id', (req,res) => {
    id = req.params.id
    Vehicles.findOne({ where: {fk_ownerid: id} })
    .then(vehicle => {
        res.json(vehicle)
    })
})

app.get('/uploads/:filename', (req,res) => {
    res.send(filename)
})

app.get('/enquiries', (req,res) => {
    Enquiry.findAll({})
    .then(enquiries => {
        res.json(enquiries)
    })
})

app.get('/enquiries/:id', (req,res) => {
    id = req.params.id
    Enquiry.findOne({ where: {owner_id: id}})
    .then(enquiry => {
        Vehicles.findOne({ where: {vehicleId: enquiry.vehicle_id}})
        .then(vehicle => {
            res.json({
                modelName: vehicle.modelName,
                requiredDate: enquiry.requiredDate,
                returnDate: enquiry.returnDate,
                pickupLocation: enquiry.pickupLocation,
                user_id: enquiry.user_id,
                enquiry_id: enquiry.id
            })
        })
    })
})

app.post('/enquiries', (req,res) => {
    Enquiry.create({
        user_id: req.body.user_id,
        owner_id: req.body.owner_id,
        vehicle_id: req.body.vehicle_id,
        requiredDate: req.body.requiredDate,
        returnDate: req.body.returnDate,
        pickupLocation: req.body.pickupLocation,
        message: req.body.message,
        approval: "pending"
    })
    .then(enquiry => {
        res.status(200).json({
            success: true,
            enquiry: enquiry
        })
    })
})


app.get('/notifications', (req,res) => {
    Notification.findAll({})
    .then(notifications => {
        res.json(notifications)
    })
})

app.get('/notifications/:id', (req,res) => {
    id = req.params.id
    Notification.findOne({ where: {user_id: id}})
    .then(notification => {
        User.findOne({ where: {id: id}})
        .then(user => {
            Enquiry.findOne({ where: {id: notification.enquiry_id}})
            .then(enquiry => {
                Vehicles.findOne({ where: {vehicleId: enquiry.vehicle_id}})
                .then(vehicle => {
                    res.json({
                        message: notification.status,
                        modelName: vehicle.modelName,
                        requiredDate: enquiry.requiredDate,
                        returnDate: enquiry.returnDate,
                        pickupLocation: enquiry.pickupLocation
                    })
                })
            })
        })
    })
})

app.post('/notifications', (req,res) => {
    Notification.create({
        user_id: req.body.user_id,
        enquiry_id: req.body.enquiry_id,
        status: req.body.status
    })
    .then(notification => {
        res.status(200).json({
            success: true,
            notification: notification
        })
    })
})


app.post('/register/user', (req,res) => {
    User.findOne({
        where: Sequelize.or(
            {email: req.body.email},
            {mobile: req.body.mobile}
        )
    })
    .then(user => {
        if(user) {
            return res.status(400).json({ email: "Email already exists"})
        }
        else {
            var password = req.body.password;
            // bcrypt.genSalt(10, (err, salt) => {
            //     if(!err) {
            //         bcrypt.hash(password, salt, (err, hash) => {
            //             if (err) throw err;
            //             password = hash;
            //         });
            //     }
            // });
            User.create({
                name: req.body.name,
                mobile: req.body.mobile,
                email: req.body.email,
                address: req.body.address,
                password: password
            }).then(user=> {
                res.status(200).json({
                    success: true,
                    user: user
                })
            })
        }
    })
})
// Register User
app.post('/register/owner', upload.fields([{
    name: 'license', maxCount: 1
  }, {
    name: 'rc', maxCount: 1
  }, {
    name: 'insurance', maxCount: 1
  }, {
    name: 'vehicleImage', maxCount: 1
  }]) ,(req,res) => {
    VehicleOwner.findOne({
        where: Sequelize.or(
            {email: req.body.email},
            {mobile: req.body.mobile}
        )
    })
    .then(user => {
        if(user) {
            return res.status(400).json({ email: "Email already exists"})
        }
        else {        
            var owner;
            var password = req.body.password;
            var email = req.body.email
            // bcrypt.genSalt(10, (err, salt) => {
            //     if(!err){
            //         bcrypt.hash(req.body.password, salt, (err, hash) => {
            //             if (err) throw err;
            //             password = hash
            //         });
            //     }
            // });
            VehicleOwner.create({
                name: req.body.name,
                mobile: req.body.mobile,
                email: req.body.email,
                address: req.body.address,
                password: password,
                rc: "rc-"+email.split('.').join(""),
                license: "license-"+email.split('.').join(""),
                insurance: "insurance-"+email.split('.').join("")
            })
            .then(createdOwner => {
                owner = createdOwner
                return Vehicles.create({
                    modelName: req.body.modelName,
                    rentPerDay: req.body.rentPerDay,
                    seats: req.body.seats,
                    mileage: req.body.mileage,
                    fuelType: req.body.fuelType,
                    type: req.body.type,
                    location: req.body.location,
                    fk_ownerid: owner.id,
                    vehicleImage: "vehicleImage-"+email.split('.').join(""),
                })
                .then(vehicle => {
                    res.status(200).json({
                        success: true,
                        owner: owner
                    })
                })
            })
        }
    })
})

// User Login
app.post('/login', (req,res) => {
    if(req.body.user=="user") {
        const email = req.body.email;
        const password = req.body.password;
        
        // Find user by email
        User.findOne({
            where: {email: email}
        }).then(user => {
        
            // Check if user exists
            if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
            }
            
            // Check password
            // bcrypt.compare(password, user.password).then(isMatch => {
            if(user.password == req.body.password) {
                // User matched
                // Create JWT Payload
                const payload = {
                id: user.id,
                name: user.name
                };

                // Sign token
                jwt.sign(
                payload,
                secretOrKey,
                {
                    expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                    res.json({
                    success: true,
                    token: "Bearer " + token,
                    user: user
                    });
                });
            }
            else {
                return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect" });
            }
        });
    }
    else {
        const email = req.body.email;
        const password = req.body.password;
        
        // Find user by email
        VehicleOwner.findOne({
            where: {email: email}
        }).then(user => {
        
            // Check if user exists
            if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
            }
            
            // Check password
            if(user.password == req.body.password) {
            // bcrypt.compare(password, user.password).then(isMatch => {
            //     if (isMatch) {
                    // User matched
                    // Create JWT Payload
                const payload = {
                id: user.id,
                name: user.name
                };

                // Sign token
                jwt.sign(
                payload,
                secretOrKey,
                {
                    expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                    res.json({
                    success: true,
                    token: "Bearer " + token,
                    user: user
                    });
                }
                );
            }
            else {
                return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect" });
            }
        });
    }
});

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})