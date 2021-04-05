import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import header from '../images/header.png'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import datson from '../images/datsun.png'
import wagonr from '../images/wagonr.png'
import jeep from '../images/jeep.png'
import suv from '../images/suv.png'
import muv from '../images/muv.png'
import i10 from '../images/i10.png'
import ignis from '../images/ignis.png'
import sedan from '../images/sedan.png'
import Footer from './Footer'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ProfilePage from './ProfilePage'
import axios from 'axios'

const HeadElem = styled.div`
    .popup {
        position: fixed;
        height: 90vh;
        width: 95vw;
        top: 5vh;
        left: 2.5vw;
        border-radius: 3vw;
        background: rgba(255,255,255,0.98);
        box-shadow: 1px 2px 2px 3px #555;
        z-index: 10;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        .icon {
            position: absolute;
            z-index: 11;
            right: 5vw;
            top: 7vh;
            font-size: 3vw;
            font-weight: 400;
            color: #ffa900;
            cursor: pointer;
        }
        .image {
            width: 40%;
            margin: 1vw auto;
            img {
                width: 100%;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }
        }
        .text {
            display: flex;
            flex-direction: column;
            width: 40%;
            margin: 1vw auto;
            text-align: left;
            h1, h3, h4 {
                font-weight: 700;
                margin: 1vw 0;
                padding: 0 1vw;
                color: #666;
                span {
                    display: inline-block;
                    width: 50%;
                    color: black;
                }
            }
            h1 {
                font-size: 2.3vw;
                span {
                    font-weight: 400;
                }
            }
            h3 {
                span {
                    font-weight: 500;
                }
                font-size: 1.6vw;
            }
            h4 {
                span {
                    font-weight: 700;
                }
                font-size: 1.2vw;
            }
            button {
                width: 40%;
                border: none;
                border-radius: 2vw;
                color: white;
                background: #ffa900;
                padding: 1vw 2vw;
                margin: 2vw 0;
                a {
                    text-decoration: none;
                    color: white;
                    font-weight: 600;
                    &:active {
                        text-decoration: none;
                        color: white;
                    }
                }   
            }
        }
    }
    .header{
        background: url(${header});
        background-size: cover;
        background-repeat: no-repeat;
        margin: 0 auto;
        width: 100%;
        height: 100vh;
        @media only screen and (max-width: 768px) {
            height: 50vh;
        } 

        .search {
            width: 35%;
            margin: 30vh auto 0 57vw;
            display: flex;
            align-items: center;
            text-align: left;
            justify-content: center;
            padding: 0 2vw;
            background: rgba(255,255,255,0.6);
            font-size: 1.6vw;
        }
    }
    section {
        display: flex;
        flex-direction: row;
        align-items: top;
        .filter {
            border-right: 3px solid #ffa900;
            padding: 0 2vw;
            width: 20%;
            margin: 2vw 0;
            .item {
                margin: 3vw auto;
                h5 {
                    margin: 1vw auto;
                }
                .check {
                    margin: 0.5vw auto;
                }
            }
        }
        .cars {
            width: 80%;
            margin: 2vw 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            .item {
                width: 20%;
                margin: 1vw 0 1vw 4%;
                display: flex;
                flex-direction: column;
                padding: 0 0 1vw 0;
                border-radius: 10px;
                border: 1px solid black;
                .image {
                    width: 100%;
                    margin-bottom: 1vw;
                    img {
                        height: 11vw;
                        width: 100%;
                        border-top-left-radius: 10px;
                        border-top-right-radius: 10px;
                    }
                }
                text-align: left;
                h1, h3, h4 {
                    font-weight: 700;
                    margin: 0.1vw 0;
                    padding: 0 1vw;
                    color: #666;
                    span {
                        display: inline-block;
                        width: 50%;
                        color: black;
                    }
                }
                h1 {
                    font-size: 1.3vw;
                    span {
                        font-weight: 400;
                    }
                }
                h3 {
                    span {
                        font-weight: 500;
                    }
                    font-size: 1vw;
                }
                h4 {
                    span {
                        font-weight: 700;
                    }
                    font-size: 0.8vw;
                }
            }
        }
    }
`

const Header = (props) => {

    const {location, setLocation, isLoggedIn, setLoggedIn, popup, setPopup, currentCar, setCurrentCar, currentUser, setCurrentUser} = props
    const handleInput = e => {
        setLocation(e.target.value)
    }

    const [cars, setCars] = useState([])

    const seeDetails = (id) => {
        axios.get('/vehicle/'+id)
        .then(res => {
            setPopup(true)
            console.log(res.data)
            setCurrentCar(res.data)
        })
    }

    const handleCheck = e => {
        setFilters({...filters, [e.target.name]: e.target.checked})
    }

    const [filters,setFilters] = useState({
        "twowheeler": false,
        "fourwheeler": false
    })
    const [twoWheel,setTwowheel] = useState([])
    const [fourWheel,setFourwheel] = useState([])
    const [seats,setSeats] = useState([])

    useEffect(() => {
        axios.get('/vehicles')
        .then ((records) => {
            setCars(records.data)
            console.log(records.data)
        })
    },[])


    const handleTwoWheel = e => {
        if (e.target.checked) {
            var arr = twoWheel
            arr.push(e.target.name)
            setTwowheel(arr)
            // console.log("Twowheel : ",twoWheel, twoWheel.length)
        }
        else {
            var index = twoWheel.indexOf(e.target.name)
            twoWheel.splice(index,1)
            // console.log("Twowheel : ",twoWheel, twoWheel.length)
        }
    }
    const handleFourWheel = e => {
        if (e.target.checked) {
            fourWheel.push(e.target.name)
            // console.log("Fourwheel : ",fourWheel, fourWheel.length)
        }
        else {
            var index = fourWheel.indexOf(e.target.name)
            fourWheel.splice(index,1)
            // console.log("Fourwheel : ",fourWheel, fourWheel.length)
        }
    }
    const handleSeats = e => {
        if (e.target.checked) {
            seats.push(e.target.name)
            // console.log("Seats : ",seats, seats.length)
        }
        else {
            var index = seats.indexOf(e.target.name)
            seats.splice(index,1)
            // console.log("Seats : ",seats, seats.length)
        }
    }

    const filterString = car => {
        var res = false;
        if(car.location.toLowerCase() == location) {
            if (filters.twowheeler == true && filters.fourwheeler==false) {
                if (twoWheel.length>0) {
                    if(twoWheel.includes(car.modelName)) {
                        console.log(459)
                        res = true
                    }
                    else {
                        return false
                    }
                }
                else if (twoWheel.length==0 && car.vehicleType=="twowheeler") {
                    console.log(467)
                    res = true
                }
            }
            else if (filters.twowheeler == true && filters.fourwheeler==true) {
                if (twoWheel.length==0 && fourWheel.length==0) {
                    return true
                }
                else if(twoWheel.includes(car.modelName) || (fourWheel.includes(car.modelName)|| seats.includes(car.seats))) {
                    console.log(473)
                    res = true
                }
                else {
                    console.log("False, ",477)
                    res = false
                }
            }
            else if (filters.twowheeler == false && filters.fourwheeler==true) {
                if (seats.length==0 && fourWheel.length==0 && car.vehicleType=="fourwheeler") {
                    console.log(483)
                    res = true
                }
                else if (fourWheel.length>0 && fourWheel.includes(car.modelName)) {
                    console.log(487)
                    res = true
                }
                else if (seats.length>0 && seats.includes(car.seats.toString())) {
                    console.log(491)
                    res = true
                }
                else {
                    console.log("False, ", 495)
                    res = false
                }
            }
            else if (filters.twowheeler == false && filters.fourwheeler==false) {
                res = true
            }
        }
        return res
    }

    return(
        <HeadElem>
                {popup ? (
                <div className="popup" style={{display: popup ? "flex" : "none"}}>
                    <div className="icon" onClick={() => setPopup(false)}>X</div>
                    <div className="image">
                        <img src={`http://localhost:9000/uploads/${currentCar.vehicleImage}.png`} />
                    </div>
                    <div className="text">
                        <h1 className="name"><span>Model :</span>{currentCar.modelName}</h1>
                        <h3 className="charges"><span>Rent per day :</span> {currentCar.rentPerDay}</h3>
                        <h3 className="seats"><span>Seats :</span> {currentCar.seats}</h3>
                        <h3 className="mileage"><span>Mileage :</span> {currentCar.mileage}</h3>
                        <h3 className="fuel"><span>Fuel Type :</span> {currentCar.fuelType}</h3>
                        <h3 className="type"><span>Type :</span> {currentCar.type}</h3>
                        <h4 className="location"><span>Location :</span> {currentCar.location}</h4>
                        <button><Link to="/enquire">Enquire Now</Link></button>
                    </div>
                </div>
                ) : ""
                }
            <div className="header">
                <Navbar
                    isLoggedIn={isLoggedIn}
                    currentUser={currentUser}
                    setLoggedIn={setLoggedIn}
                    setCurrentUser={setCurrentUser}
                />
                <div className="search">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <FormControl style={{width: "90%",margin: "0 auto 1vw 5%", padding: "0 1vw"}}>
                    <InputLabel id="demo-simple-select-label">Location</InputLabel>
                        <Select
                            name="location"
                            onChange={handleInput}
                        >
                            <MenuItem value={"goa"}>Goa</MenuItem>
                            <MenuItem value={"udaipur"}>Udaipur</MenuItem>
                            <MenuItem value={"kolkata"}>Kolkata</MenuItem>
                            <MenuItem value={"leh"}>Leh</MenuItem>
                            <MenuItem value={"ladakh"}>Ladakh</MenuItem>
                            <MenuItem value={"mumbai"}>Mumbai</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <h1 style={{textAlign: "center", width: "80%", margin: "2vw auto"}}>Cars Available</h1>
            <section style={{visibility: (location ? "visible" : "hidden")}}>            
                <div className="filter">
                    <div className="item">
                        <h5>Vehicle Type</h5>
                        <div className="check">
                            <label for="twowheeler">Two Wheeler</label>
                            <input onChange={handleCheck} value={filters.twowheeler} id="twowheeler" name="twowheeler" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="fourwheeler">Four Wheeler</label>
                            <input onChange={handleCheck} value={filters.fourwheeler} id="fourwheeler" name="fourwheeler" type="checkbox"/>
                        </div>
                    </div>
                    <div style={{display: (filters.twowheeler ? "block" : "none"),borderTop: "2px solid black"}} className="item">
                        <h5>2-Wheeler Models</h5>
                        <div className="check">
                            <label for="activa">Activa 5G</label>
                            <input onChange={handleTwoWheel} id="activa" name="activa" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="vespa">Vespa</label>
                            <input onChange={handleTwoWheel} id="vespa" name="vespa" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="fascino">Fascino</label>
                            <input onChange={handleTwoWheel} id="fascino" name="fascino" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="bullet">Royal Enfield</label>
                            <input onChange={handleTwoWheel} id="bullet" name="bullet" type="checkbox"/>
                        </div>
                    </div>
                    <div style={{display: (filters.fourwheeler ? "block" : "none"),borderTop: "2px solid black"}} className="item">
                        <h5>4-Wheeler Models</h5>
                        <div className="check">
                            <label for="wagonr">WagonR</label>
                            <input onChange={handleFourWheel} id="wagonr" name="wagonr" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="datson">Datson Go</label>
                            <input onChange={handleFourWheel} id="datson" name="datson" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="i10">i10 Grand</label>
                            <input onChange={handleFourWheel} id="i10" name="i10" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="ignis">Maruti Ignis</label>
                            <input onChange={handleFourWheel} id="ignis" name="ignis" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="sedan">Sedan</label>
                            <input onChange={handleFourWheel} id="sedan" name="sedan" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="suv">SUV</label>
                            <input onChange={handleFourWheel} id="suv" name="suv" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="muv">MUV</label>
                            <input onChange={handleFourWheel} id="muv" name="muv" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="jeep">Jeep</label>
                            <input onChange={handleFourWheel} id="jeep" name="jeep" type="checkbox"/>
                        </div>
                    </div>
                    <div style={{display: (filters.fourwheeler ? "block" : "none"),borderTop: "2px solid black"}} className="item">
                        <h5>Number of Seats</h5>
                        <div className="check">
                            <label for="five">Five</label>
                            <input onChange={handleSeats} id="five" name="5" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="six">Six</label>
                            <input onChange={handleSeats} id="six" name="6" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="seven">Seven</label>
                            <input onChange={handleSeats} id="seven" name="7" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="eight">Eight</label>
                            <input onChange={handleSeats} id="eight" name="8" type="checkbox"/>
                        </div>
                    </div>
                </div>
                <div className="cars">
                    {
                        cars.map((car,index) => (
                            filterString(car) ?
                            (
                            <div className="item" onClick={() => seeDetails(car.fk_ownerid)}>
                                <div className="image">
                                    <img src={`http://localhost:9000/uploads/${car.vehicleImage}.png`} />
                                </div>
                                <h1 className="name"><span>Model :</span>{car.modelName}</h1>
                                <h3 className="charges"><span>Rent per day :</span> {car.rentPerDay}</h3>
                                <h3 className="seats"><span>Seats :</span> {car.seats}</h3>
                                <h3 className="mileage"><span>Mileage :</span> {car.mileage}</h3>
                                <h3 className="fuel"><span>Fuel Type :</span> {car.fuelType}</h3>
                                <h3 className="type"><span>Type :</span> {car.type}</h3>
                                <h4 className="location"><span>Location :</span> {car.location}</h4>
                            </div>
                            ) : ""
                        ))  
                    }         
                </div>
            </section>
            <Footer />
        </HeadElem>
    )
}

export default Header