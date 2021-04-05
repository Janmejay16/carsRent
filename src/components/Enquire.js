import Navbar from './Navbar'
import TextField from '@material-ui/core/TextField';
import {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Footer from './Footer';
import Dashboard from './Dashboard'

const Form = styled.div`
    width: 60%;
    margin: 0 auto;
    padding: 2vw 0;
    margin: 2vw auto;
    border-radius: 2vw;
    box-shadow: 1px 2px 2px 2px #666;
    text-align: center;
    button {
        border: none;
        border-radius: 2vw;
        color: white;
        background: #ffa900;
        padding: 1vw 2vw;
        color: white;
        font-weight: 600;
    }
`

const Enquire = (props) => {
    
    const {isLoggedIn, setLoggedIn, setPopup, currentUser, setCurrentUser, currentCar, setCurrentCar} = props
    
    const [details,setDetails] = useState({
        "owner_id": currentCar ? currentCar.fk_ownerid : "",
        "vehicle_id": currentCar ? currentCar.vehicleId : "",
        "modelName": currentCar ? currentCar.modelName : "",
        "vehicleType": currentCar ? currentCar.vehicleType : "",
        "requiredDate": "",
        "returnDate": "",
        "pickupLocation": "",
        "message": "",
        "user_id": currentUser ? currentUser.id : "",
        "location": currentCar ? currentCar.location : ""
    })

    const handleInput = e => {
        setDetails({...details, 
            [e.target.name]: e.target.value
        })
    }

    const submit = () => {
        (isLoggedIn) ? (
            axios.post('/enquiries',details)
            .then(res => {
                if(res.data.success == true) {
                    console.log(res.data)
                    alert('Enquiry Sent Successfully! The Vehicle Owner will shortly respond to your enquiry :)')
                    setPopup(false)
                    setCurrentCar(null)
                }
            })
        ) : alert('You need to Login!!')
    }

    return (
        <div>
            {isLoggedIn ?
                (<div>        
                    <Navbar
                        isLoggedIn={isLoggedIn}
                        currentUser={currentUser}
                        setLoggedIn={setLoggedIn}
                        setCurrentUser={setCurrentUser}
                    />
                    <Form>
                        <h1>Enquire Now</h1>
                        <TextField
                            name="modelName"
                            onChange={handleInput}
                            value={details.modelName}
                            style={{width: "35%",margin: "2vw 7.5%"}}
                            variant="outlined"
                            label="Model Name"
                            id="outlined-size-small"
                            size="small"
                        />
                        <TextField
                            name="vehicleType"
                            onChange={handleInput}
                            value={details.vehicleType}
                            style={{width: "35%",margin: "2vw 7.5%"}}
                            variant="outlined"
                            label="Vehicle Type"
                            id="outlined-size-small"
                            size="small"
                        />
                        <TextField
                            style={{width: "35%",margin: "2vw 7.5%"}}
                            id="datetime-local"
                            label="Required Date"
                            type="datetime-local"
                            name="requiredDate"
                            onChange={handleInput}
                            value={details.requiredDate}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <TextField
                            style={{width: "35%",margin: "2vw 7.5%"}}
                            id="datetime-local"
                            label="Return Date"
                            type="datetime-local"
                            name="returnDate"
                            onChange={handleInput}
                            value={details.returnDate}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <TextField
                            name="pickupLocation"
                            onChange={handleInput}
                            value={details.pickupLocation}
                            style={{width: "35%",margin: "2vw 7.5%"}}
                            variant="outlined"
                            label="Pickup Location"
                            id="outlined-size-small"
                            size="small"
                            placeholder="Pickup Location"
                        />
                        <TextField
                            name="message"
                            onChange={handleInput}
                            value={details.message}
                            style={{width: "35%",margin: "2vw 7.5%"}}
                            variant="outlined"
                            label="Message"
                            id="outlined-size-small"
                            size="small"
                            placeholder="Message"
                        />
                        <TextField
                            name="location"
                            onChange={handleInput}
                            value={details.location}
                            style={{width: "35%",margin: "2vw 7.5%"}}
                            variant="outlined"
                            label="Message"
                            id="outlined-size-small"
                            size="small"
                            placeholder="Location"
                        />
                        <button
                            style={{width: "35%",margin: "2vw 7.5%"}}
                            onClick={submit}
                        >
                            Submit
                        </button>
                    </Form>
                </div>)
                :
                <Dashboard
                    isLoggedIn={isLoggedIn}
                    currentUser={currentUser}
                    setLoggedIn={setLoggedIn}
                    setCurrentUser={setCurrentUser}
                />
            }
            <Footer />
        </div>
    )
}

export default Enquire