import Navbar from './Navbar'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components'
import {useState, useEffect} from 'react'

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

const SignUpIn = () => {

    const [vehicleOwner,setVehicleOwner] = useState(false)

    const [details, setDetails] = useState({})

    const handleInput = e => {
        setDetails({...details,[e.target.name]: e.target.value})
    }

    const handleChange = e => {
        setVehicleOwner(!vehicleOwner)
    }

    const handleSubmit = e => {
        console.log(details)
    }

    const [signIn,setSignIn] = useState(true)

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
                        name="model"
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
                        name="rent"
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
                    {/* Car Type */}
                    {/* Location */}
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