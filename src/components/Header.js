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


const HeadElem = styled.div`
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

const Header = () => {
    
    const [location, setLocation] = useState("")



    const handleInput = e => {
        setLocation(e.target.value)
    }

    const [cars,setCars] = useState([
            {
                    "name": "WagonR",
                    "rent": "800",
                    "seats": "5",
                    "mileage": "18",
                    "fuel": "petrol",
                    "type": "compact",
                    "location": "vadodara",
                    "image": wagonr
            },
            {
                    "name": "DatsonGo",
                    "rent": "800",
                    "seats": "5",
                    "mileage": "19",
                    "fuel": "perol",
                    "type": "compact",
                    "location": "leh",
                    "image": datson
            },
            {
                    "name": "i10Grand",
                    "rent": "1200",
                    "seats": "5",
                    "mileage": "16",
                    "fuel": "petrol",
                    "type": "compact",
                    "location": "ladakh",
                    "image": i10
            },
            {
                    "name": "ignis",
                    "rent": "1000",
                    "seats": "5",
                    "mileage": "19",
                    "fuel": "petrol",
                    "type": "compact",
                    "location": "goa",
                    "image": ignis
            },
            {
                    "name": "sedan",
                    "rent": "1400",
                    "seats": "5",
                    "mileage": "19",
                    "fuel": "diesel",
                    "type": "sedan",
                    "location": "udaipur",
                    "image": sedan
            },
            {
                    "name": "suv",
                    "rent": "2000",
                    "seats": "7",
                    "mileage": "8",
                    "fuel": "diesel",
                    "type": "suv",
                    "location": "ladakh",
                    "image": suv
            },
            {
                    "name": "muv",
                    "rent": "2500",
                    "seats": "8",
                    "mileage": "10",
                    "fuel": "diesel",
                    "type": "muv",
                    "location": "leh",
                    "image": muv
            },
            {
                "name": "jeep",
                "rent": "2000",
                "seats": "6",
                "mileage": "12",
                "fuel": "diesel",
                "type": "jeep",
                "location": "goa",
                "image": jeep
            }
        ])
    
    const handleCheck = e => {
        setFilters({...filters, [e.target.name]: e.target.checked})
    }

    const [filters,setFilters] = useState({
        "twowheeler": false,
        "fourwheeler": false
    })

    const [twoWheel, setTwoWheel] = useState({
        "activa": false,
        "vespa": false,
        "fascino": false,
        "bullet": false
    })

    const [fourWheel, setFourWheel] = useState({
        "wagonr": false,
        "datsongo": false,
        "i10": false,
        "ignis": false,
        "sedan": false,
        "suv": false,
        "muv": false,
        "jeep": false
    })

    const [seats,setSeats] = useState({
        "five": false,
        "six": false,
        "seven": false,
        "eight": false
    })

    return(
        <HeadElem>
            <div className="header">
                <Navbar />
                <div className="search">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <FormControl style={{width: "90%",margin: "0 auto 1vw 5%", padding: "0 1vw"}}>
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
                            <input id="activa" name="activa" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="vespa">Vespa</label>
                            <input id="vespa" name="vespa" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="fascino">Fascino</label>
                            <input id="fascino" name="fascino" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="bullet">Royal Enfield</label>
                            <input id="bullet" name="bullet" type="checkbox"/>
                        </div>
                    </div>
                    <div style={{display: (filters.fourwheeler ? "block" : "none"),borderTop: "2px solid black"}} className="item">
                        <h5>4-Wheeler Models</h5>
                        <div className="check">
                            <label for="wagonr">WagonR</label>
                            <input id="wagonr" name="wagonr" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="datsongo">Datson Go</label>
                            <input id="datsongo" name="datsongo" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="i10">i10 Grand</label>
                            <input id="i10" name="i10" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="ignis">Maruti Ignis</label>
                            <input id="ignis" name="ignis" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="sedan">Sedan</label>
                            <input id="sedan" name="sedan" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="suv">SUV</label>
                            <input id="suv" name="suv" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="muv">MUV</label>
                            <input id="muv" name="muv" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="jeep">Jeep</label>
                            <input id="jeep" name="jeep" type="checkbox"/>
                        </div>
                    </div>
                    <div style={{display: (filters.fourwheeler ? "block" : "none"),borderTop: "2px solid black"}} className="item">
                        <h5>Number of Seats</h5>
                        <div className="check">
                            <label for="five">Five</label>
                            <input id="five" name="five" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="six">Six</label>
                            <input id="six" name="six" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="seven">Seven</label>
                            <input id="seven" name="seven" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="eight">Eight</label>
                            <input id="eight" name="eight" type="checkbox"/>
                        </div>
                    </div>
                </div>
                <div className="cars">
                    {cars.map((car,index) => 
                        (car.location == location ) ?
                            (
                            <div className="item">
                                <div className="image">
                                    <img src={car.image} />
                                </div>
                                <h1 className="name"><span>Model :</span>{car.name}</h1>
                                <h3 className="charges"><span>Rent per day :</span> {car.rent}</h3>
                                <h3 className="seats"><span>Seats :</span> {car.seats}</h3>
                                <h3 className="mileage"><span>Mileage :</span> {car.mileage}</h3>
                                <h3 className="fuel"><span>Fuel Type :</span> {car.fuel}</h3>
                                <h3 className="type"><span>Car Type :</span> {car.type}</h3>
                                <h4 className="location"><span>Location :</span> {car.location}</h4>
                            </div>
                        ) : ""
                    )
                    }          
                </div>
            </section>
            <Footer />
        </HeadElem>
    )
}

export default Header