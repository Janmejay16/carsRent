const express = require('express');
const users = express.Router();
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const VehicleOwner = require('./models/VehicleOwner');
var bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const multer = require('multer')
var multiparty = require('multiparty');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' +file.originalname)
    }
})

const upload = multer({ storage: storage })

const secretOrKey = "youcannevereverguessthisstringifursmarthahalol"

users.use(cors())

var app = express();
var port = process.env.PORT || 9000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({extended: false})
)

app.get('/', (req,res) => {
    res.json({"Message": "Hey"})
})

app.get('/user', (req,res) => {
    User.findAll({})
    .then(users => {
        res.json(users)
    })
})

app.get('/vehicleowner', (req,res) => {
    VehicleOwner.findAll({})
    .then(users => {
        res.json(users)
    })
})

// Register User
app.post('/register', (req,res) => {
    var name;
    var mobile;
    var email;
    var address;
    var password;
    var modelName;
    var rentPerDay;
    var seats;
    var mileage;
    var fuelType;
    var type;
    if(req.body.user == "user") {
        User.findOne({
            where: Sequelize.or(
                {email: req.body.details.email},
                {mobile: req.body.details.mobile}
            )
        })
        .then(user => {
            if(user) {
                return res.status(400).json({ email: "Email already exists"})
            }
            else {
                newUser = new User({
                    name: req.body.details.name,
                    email: req.body.details.email,
                    mobile: req.body.details.mobile,
                    address: req.body.details.address,
                    password: req.body.details.password
                })
                
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                    });
                  });
            }
        })
    }
    else {
        var form = new multiparty.Form();
        form.parse(req, function(err, fields, files) {
            // fields fields fields
            name = fields.name[0]
            mobile = fields.mobile[0]
            email = fields.email[0]
            address = fields.address[0]
            password = fields.password[0]
            modelName = fields.modelName[0]
            rentPerDay = fields.rentPerDay[0]
            seats = fields.seats[0]
            mileage = fields.mileage[0]
            fuelType = fields.fuelType[0]
            type = fields.type[0]
            location = fields.location[0]

            var fullName = name.split(" ").join("")
            for (file in files) {
                fs.writeFile("./uploads/"+file+"-"+email+"-"+fullName+'-'+files[file][0].originalFilename, files[file], function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log("The file was saved!");
                });
            }

            VehicleOwner.findOne({
                where: Sequelize.or(
                    {email: email},
                    {mobile: mobile}
                )
            })
            .then(user => {
                if(user) {
                    return res.status(400).json({ email: "Email already exists"})
                }
                else {
                    newUser = new VehicleOwner({
                        name: name,
                        email: email,
                        mobile: mobile,
                        address: address,
                        password: password,
                        modelName: modelName,
                        rentPerDay: rentPerDay,
                        seats: seats,
                        mileage: mileage,
                        fuelType: fuelType,
                        type: type,
                        location: location
                    })
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                        });
                      }
                    );
                }
            })
        });   
    }
})

// User Login
app.post('/login', (req,res) => {
    if(req.body.user=="user") {
        const email = req.body.email;
        const password = req.body.password;
        
        // Find user by email
        User.findOne({ email }).then(user => {
        
            // Check if user exists
            if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
            }
            
            // Check password
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
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
        });
    }
});

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})