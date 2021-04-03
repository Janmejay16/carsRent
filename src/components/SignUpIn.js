import Navbar from './Navbar'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components'
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import {useState, useEffect} from 'react'
import axios from 'axios'

const Button = styled.button`
    display: block;
    width: 10%;
    margin: 1vw auto;
    background: #ffa900;
    border: none;
    border-radius: 1vw;
    color: white;
    font-weight: 700;
    font-size: 1vw;
    padding: 0.5vw 2vw;
`

const Form = styled.div`
    padding: 2vw;
    width: 70%;
    margin: 3vw auto;
    border: 3px solid rgb(255,169,0);
    border-radius: 1vw;
    .upload {
        margin: 2vw auto;
        width: 90%;
        h2 {
            text-align: center;
            margin: 1vw auto 2vw auto;
            font-size: 2vw;
        }
        .items {
            display: flex;
            flex-wrap: wrap;
            .files {
                text-align: center;
                color: white;
                width: 30%;
                font-size: 1vw;
                margin: 1vw auto;
                cursor: pointer;
                padding: 1vw 2vw;
                background: #ffa900;
                border-radius: 1vw;
            }
        }
        .filesuploaded {
            width: 90%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            div {
                width: 45%;
                margin: 0.2vw auto;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.7vw;
                .heading {
                    color: black;
                    fot-size: 0.9vw;
                    font-weight: 500;
                }
                .name {
                    color: #777;
                    font-weight: 700;
                }
            }
        }
    }

`
const Choice = styled.div`
    display: flex;
    justofy-content: center;
    width: 40%;
    border: none;
    margin: 2vw auto;
    color: black;
    button {
        display: inline-block;
        border: none;
        width: 50%;
        font-size: 1.2vw;
        text-align: center;
        margin: 0 auto;
        padding: 1vw 2vw;
        font-weight: 700;
    }
    #left {
        border-top-left-radius: 3vw;
        border-bottom-left-radius: 3vw;
    }
    #right {
        border-top-right-radius: 3vw;
        border-bottom-right-radius: 3vw;
    }
`

const SignUpIn = (props) => {

    const {isLoggedIn, setLoggedIn, currentUser, setCurrentUser} = props

    const [vehicleOwner,setVehicleOwner] = useState(false)

    const [details, setDetails] = useState({})

    const handleInput = e => {
        setDetails({...details,[e.target.name]: e.target.value})
    }

    const handleChange = e => {
        setVehicleOwner(!vehicleOwner)
    }

    const handleFile = e => {
        setDetails({...details, [e.target.name]: e.target.files[0]})
    }

    const handleSubmit = e => {
        // console.log(details)
        if(signIn) {
            axios.post("http://localhost:9000/login", {
                "email": details["email"],
                "password" :details["password"],
                "user": (vehicleOwner ? "vehicleowner" : "user")
            })
            .then(res => {
                console.log(res)
                if(res.data.success == true) {
                    setLoggedIn(true)
                }
            })
        }
        else {
            if(vehicleOwner) {
                const formData = new FormData()
                // for ( var key in details ) {
                //     formData.append(key, details[key]);
                // }
                Object.keys(details).forEach(key => {
                    formData.append(key,details[key])
                })
                // formData.append("file",details.license)
                // formData.append("file",details.vehicleImage)
                // formData.append("file",details.rc)
                // formData.append("file",details.insurance)
                axios.post("http://localhost:9000/register", formData)
                .then(res => {
                    console.log(res)
                })
            }
            // axios.post("http://localhost:9000/register", {
            //     "details": details,
            //     "user": (vehicleOwner ? "vehicleowner" : "user")
            // })
            // .then(res => {
            //     console.log(res)
            //     // if(res.data.success == true) {
            //     //     setLoggedIn(true)
            //     // }
            // })
        }
    }

    const [signIn,setSignIn] = useState(false)

    return (
        <div>
            <Navbar />
            <Choice className="forms">
                <button id="left" style={{background: (signIn ? "rgba(150,150,150,0.1" : "#ffa900"), color: (signIn ? "black" : "white")}} onClick={() => setSignIn(false)}>Sign Up</button>
                <button id="right" style={{background: (signIn ? "#ffa900" : "rgba(150,150,150,0.1"), color: (signIn ? "white" : "black")}} onClick={() => setSignIn(true)}>Sign In</button>
            </Choice>
            <Form style={{display: (signIn ? "none" : "block")}}>
                {/* Name */}
                <TextField
                    name="name"
                    onChange={handleInput}
                    style={{width: "40%",margin: "1vw 5%"}}
                    variant="outlined"
                    label="Name"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    placeholder="Enter Your Name"
                />
                {/* Address */}
                <TextField
                    name="address"
                    onChange={handleInput}
                    style={{width: "40%",margin: "1vw 5%"}}
                    variant="outlined"
                    label="Address"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    placeholder="Enter Your Address"
                />
                {/* Mobile */}
                <TextField
                    name="mobile"
                    onChange={handleInput}
                    style={{width: "40%",margin: "1vw 5%"}}
                    variant="outlined"
                    label="Mobile"
                    type="number"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    placeholder="Enter Your Mobile Number"
                />
                {/* Email */}
                <TextField
                    name="email"
                    onChange={handleInput}
                    style={{width: "40%",margin: "1vw 5%"}}
                    variant="outlined"
                    label="Email"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    placeholder="Enter Your Email"
                />
                <TextField
                    name="password"
                    onChange={handleInput}
                    style={{width: "40%",margin: "1vw 5%"}}
                    variant="outlined"
                    label="Password"
                    type="password"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    placeholder="Enter Your Password"
                />
                <TextField
                    name="confirmpassword"
                    onChange={handleInput}
                    style={{width: "40%",margin: "1vw 5%"}}
                    variant="outlined"
                    label="Confirm Password"
                    type="password"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    placeholder="Confirm Your Password"
                />
                {/* Checkbox : User or Vehicle Owner */}
                <FormControlLabel
                    style={{width: "70%",margin: "1vw 0 1vw 5%"}}
                    control={
                        <Checkbox
                            checked={vehicleOwner}
                            onChange={handleChange}
                            name="vehicle"
                            color="primary"
                        />
                    }
                    label="Sign Up as Vehicle Owner"
                />
                <div id="vehicleowner" style={{display: (vehicleOwner ? "block" : "none")}}>
                    {/* Model Name */}
                    <TextField
                        name="modelName"
                        onChange={handleInput}
                        style={{width: "40%",margin: "1vw 5%"}}
                        variant="outlined"
                        label="Model Name"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        placeholder="Enter Model Name"
                    />
                    {/* Rent Per Day */}
                    <TextField
                        name="rentPerDay"
                        onChange={handleInput}
                        style={{width: "40%",margin: "1vw 5%"}}
                        variant="outlined"
                        label="Rent Per Day"
                        type="number"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        placeholder="Rent Per Day"
                    />
                    {/* Seats */}
                    <TextField
                        name="seats"
                        onChange={handleInput}
                        style={{width: "40%",margin: "1vw 5%"}}
                        variant="outlined"
                        label="Seats"
                        type="number"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        placeholder="Enter Number of Seats"
                    />
                    {/* Mileage */}
                    <TextField
                        name="mileage"
                        onChange={handleInput}
                        style={{width: "40%",margin: "1vw 5%"}}
                        variant="outlined"
                        label="Mileage"
                        type="number"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        placeholder="Mileage"
                    />
                    {/* Fuel Type */}
                    <FormControl style={{width: "40%",margin: "1vw 5%"}}>
                    <InputLabel id="demo-simple-select-label">Fuel Type</InputLabel>
                        <Select
                            name="fuelType"
                            onChange={handleInput}
                        >
                            <MenuItem value={"petrol"}>Petrol</MenuItem>
                            <MenuItem value={"diesel"}>Diesel</MenuItem>
                        </Select>
                    </FormControl>
                    {/* Car Type */}
                    <FormControl style={{width: "40%",margin: "1vw 5%"}}>
                    <InputLabel id="demo-simple-select-label">Car Type</InputLabel>
                        <Select
                            name="type"
                            onChange={handleInput}
                        >
                            <MenuItem value={"wagonr"}>WagonR</MenuItem>
                            <MenuItem value={"datsongo"}>Datson Go</MenuItem>
                            <MenuItem value={"i10"}>i10 Grand</MenuItem>
                            <MenuItem value={"ingnis"}>Maruti Ignis</MenuItem>
                            <MenuItem value={"sedan"}>Sedan</MenuItem>
                            <MenuItem value={"suv"}>SUV</MenuItem>
                            <MenuItem value={"muv"}>MUV</MenuItem>
                            <MenuItem value={"jeep"}>Jeep</MenuItem>
                        </Select>
                    </FormControl>
                    {/* Location */}
                    <FormControl style={{width: "90%",margin: "1vw 5%"}}>
                    <InputLabel id="demo-simple-select-label">Location</InputLabel>
                        <Select
                            name="location"
                            onChange={handleInput}
                        >
                            <MenuItem value={"vadodara"}>Vadodara</MenuItem>
                            <MenuItem value={"goa"}>Goa</MenuItem>
                            <MenuItem value={"udaipur"}>Udaipur</MenuItem>
                            <MenuItem value={"leh"}>Leh</MenuItem>
                            <MenuItem value={"ladakh"}>Ladakh</MenuItem>
                        </Select>
                    </FormControl>

                    <div className="upload">
                        <h2>Upload Files</h2>
                        <div className="items">
                            <input name="vehicleimage" onChange={handleFile} style={{visibility: "hidden", position: "absolute", zIndex: "-1"}} type="file" id="vehicleimage"/>
                            <label className="files" for="vehicleimage">Vehicle Image</label>

                            <input name="license" onChange={handleFile} style={{visibility: "hidden", position: "absolute", zIndex: "-1"}} type="file" id="license"/>
                            <label className="files" for="license">Upload License</label>

                            <input name="rc" onChange={handleFile} style={{visibility: "hidden", position: "absolute", zIndex: "-1"}} type="file" id="rc"/>
                            <label className="files" for="rc">Upload Registration Certificate</label>

                            <input name="insurance" onChange={handleFile} style={{visibility: "hidden", position: "absolute", zIndex: "-1"}} type="file" id="insurance"/>
                            <label className="files" for="insurance">Upload Insurance</label>
                            <div className="filesuploaded">
                                {
                                    details.vehicleimage ?
                                    (<div><p className="heading">Vehicle Image :&nbsp; </p><p className="name"> {details.vehicleimage.name}</p></div>) : (<div></div>)
                                }
                                {
                                    details.license ?
                                    (<div><p className="heading">License :&nbsp; </p><p className="name"> {details.license.name}</p></div>) : (<div></div>)
                                }
                                {
                                    details.rc ?
                                    (<div><p className="heading">Registration Certificate :&nbsp; </p><p className="name"> {details.rc.name}</p></div>) : (<div></div>)
                                }
                                {
                                    details.insurance ?
                                    (<div><p className="heading">Insurance :&nbsp; </p><p className="name"> {details.insurance.name}</p></div>) : (<div></div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Form>


            <Form style={{display: (signIn ? "block" : "none")}}>
                {/* Email */}
                <TextField
                    name="email"
                    onChange={handleInput}
                    style={{width: "40%",margin: "1vw 5%"}}
                    variant="outlined"
                    label="Email"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    placeholder="Enter Your Email"
                />
                <TextField
                    name="password"
                    onChange={handleInput}
                    style={{width: "40%",margin: "1vw 5%"}}
                    variant="outlined"
                    label="Password"
                    type="password"
                    id="outlined-size-small"
                    defaultValue=""
                    size="small"
                    placeholder="Enter Your Password"
                />
            </Form>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default SignUpIn