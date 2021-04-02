import styled from 'styled-components'
import {Link} from 'react-router-dom'
import header from '../images/header.png'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import amaze from '../images/amaze.jpg'
import Footer from './Footer'


const HeadElem = styled.div`
    .header{
        background: url(${header});
        background-size: cover;
        background-repeat: no-repeat;
        margin: 0 auto;
        width: 100%;
        height: 100vh;

        .search {
            width: 40%;
            margin: 30vh auto 0 55vw;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            background: rgba(0,0,0,0.4);
            padding: 0;
            .icon {
                width: 10%;
                color: white;
            }
            select {
                border: none;
                background: rgba(255,255,255,0.7);
                width: 90%;
                padding: 1vw;
                margin: 0;
            }
        }
    }
    section {
        display: flex;
        flex-direction: row;
        align-items: center;
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
            justify-content: center;
            align-items: center;
            .item {
                width: 27%;
                margin: 1vw auto;
                display: flex;
                flex-direction: column;
                padding: 0;
                border-radius: 10px;
                border: 1px solid black;
                .image {
                    width: 100;
                    img {
                        height: 25vh;
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
                        width: 40%;
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
    return(
        <HeadElem>
            <div className="header">
                <Navbar />
                <div className="search">
                    <div class="icon">
                        <FontAwesomeIcon icon={faSearchLocation} />
                    </div>
                    <select name="location" id="location">
                        <option value="">Location</option>
                        <option value="ahmedabad">Ahmedabad</option>
                        <option value="goa">Goa</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="vadodara">Vadodara</option>
                    </select>
                </div>
            </div>
            <section>            
                <div className="filter">
                    <div className="item">
                        <h5>Vehicle Type</h5>
                        <div className="check">
                            <label for="twowheeler">Two Wheeler</label>
                            <input id="twowheeler" name="twowheeler" type="checkbox"/>
                        </div>
                        <div className="check">
                            <label for="fourwheeler">Four Wheeler</label>
                            <input id="fourwheeler" name="fourwheeler" type="checkbox"/>
                        </div>
                    </div>
                    <div style={{borderTop: "2px solid black"}} className="item">
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
                    <div style={{borderTop: "2px solid black"}} className="item">
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
                    <div style={{borderTop: "2px solid black"}} className="item">
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
                    <div className="item">
                        <div className="image">
                            <img src={amaze} />
                        </div>
                        <h1 className="name"><span>Model :</span> Honda Amaze</h1>
                        <h3 className="charges"><span>Rent per day :</span> 1500</h3>
                        <h3 className="seats"><span>Seats :</span> 5</h3>
                        <h3 className="mileage"><span>Milega :</span> 15</h3>
                        <h3 className="fuel"><span>Fuel Type :</span> Diesel</h3>
                        <h3 className="type"><span>Car Type :</span> Sedan</h3>
                        <h4 className="location"><span>Location :</span> Vadodara</h4>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src={amaze} />
                        </div>
                        <h1 className="name"><span>Model :</span> Honda Amaze</h1>
                        <h3 className="charges"><span>Rent per day :</span> 1500</h3>
                        <h3 className="seats"><span>Seats :</span> 5</h3>
                        <h3 className="mileage"><span>Milega :</span> 15</h3>
                        <h3 className="fuel"><span>Fuel Type :</span> Diesel</h3>
                        <h3 className="type"><span>Car Type :</span> Sedan</h3>
                        <h4 className="location"><span>Location :</span> Vadodara</h4>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src={amaze} />
                        </div>
                        <h1 className="name"><span>Model :</span> Honda Amaze</h1>
                        <h3 className="charges"><span>Rent per day :</span> 1500</h3>
                        <h3 className="seats"><span>Seats :</span> 5</h3>
                        <h3 className="mileage"><span>Milega :</span> 15</h3>
                        <h3 className="fuel"><span>Fuel Type :</span> Diesel</h3>
                        <h3 className="type"><span>Car Type :</span> Sedan</h3>
                        <h4 className="location"><span>Location :</span> Vadodara</h4>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src={amaze} />
                        </div>
                        <h1 className="name"><span>Model :</span> Honda Amaze</h1>
                        <h3 className="charges"><span>Rent per day :</span> 1500</h3>
                        <h3 className="seats"><span>Seats :</span> 5</h3>
                        <h3 className="mileage"><span>Milega :</span> 15</h3>
                        <h3 className="fuel"><span>Fuel Type :</span> Diesel</h3>
                        <h3 className="type"><span>Car Type :</span> Sedan</h3>
                        <h4 className="location"><span>Location :</span> Vadodara</h4>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src={amaze} />
                        </div>
                        <h1 className="name"><span>Model :</span> Honda Amaze</h1>
                        <h3 className="charges"><span>Rent per day :</span> 1500</h3>
                        <h3 className="seats"><span>Seats :</span> 5</h3>
                        <h3 className="mileage"><span>Milega :</span> 15</h3>
                        <h3 className="fuel"><span>Fuel Type :</span> Diesel</h3>
                        <h3 className="type"><span>Car Type :</span> Sedan</h3>
                        <h4 className="location"><span>Location :</span> Vadodara</h4>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src={amaze} />
                        </div>
                        <h1 className="name"><span>Model :</span> Honda Amaze</h1>
                        <h3 className="charges"><span>Rent per day :</span> 1500</h3>
                        <h3 className="seats"><span>Seats :</span> 5</h3>
                        <h3 className="mileage"><span>Milega :</span> 15</h3>
                        <h3 className="fuel"><span>Fuel Type :</span> Diesel</h3>
                        <h3 className="type"><span>Car Type :</span> Sedan</h3>
                        <h4 className="location"><span>Location :</span> Vadodara</h4>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src={amaze} />
                        </div>
                        <h1 className="name"><span>Model :</span> Honda Amaze</h1>
                        <h3 className="charges"><span>Rent per day :</span> 1500</h3>
                        <h3 className="seats"><span>Seats :</span> 5</h3>
                        <h3 className="mileage"><span>Milega :</span> 15</h3>
                        <h3 className="fuel"><span>Fuel Type :</span> Diesel</h3>
                        <h3 className="type"><span>Car Type :</span> Sedan</h3>
                        <h4 className="location"><span>Location :</span> Vadodara</h4>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src={amaze} />
                        </div>
                        <h1 className="name"><span>Model :</span> Honda Amaze</h1>
                        <h3 className="charges"><span>Rent per day :</span> 1500</h3>
                        <h3 className="seats"><span>Seats :</span> 5</h3>
                        <h3 className="mileage"><span>Milega :</span> 15</h3>
                        <h3 className="fuel"><span>Fuel Type :</span> Diesel</h3>
                        <h3 className="type"><span>Car Type :</span> Sedan</h3>
                        <h4 className="location"><span>Location :</span> Vadodara</h4>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src={amaze} />
                        </div>
                        <h1 className="name"><span>Model :</span> Honda Amaze</h1>
                        <h3 className="charges"><span>Rent per day :</span> 1500</h3>
                        <h3 className="seats"><span>Seats :</span> 5</h3>
                        <h3 className="mileage"><span>Milega :</span> 15</h3>
                        <h3 className="fuel"><span>Fuel Type :</span> Diesel</h3>
                        <h3 className="type"><span>Car Type :</span> Sedan</h3>
                        <h4 className="location"><span>Location :</span> Vadodara</h4>
                    </div>
                </div>
            </section>
            <Footer />
        </HeadElem>
    )
}

export default Header