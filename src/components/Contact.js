import React , {useState} from "react";
// import "../styles/cars_pro.css";
import Navbar from './Navbar'
import Footer from './Footer'
import styled from 'styled-components'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhoneAlt, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import TextField from '@material-ui/core/TextField';

const Con = styled.div`
.contactPage{
    text-align: center;
    padding: 2vw 3vw;
    }
    .c-row {
        height: 35vw;
        width: 70%;
        margin: 1vw auto;
        box-shadow: 1px 2px 2px 1px #999;
        border-radius: 3vw;
        margin: 5vw auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        section {
            color: black;
            text-align: center;   
            width: 45%;
            height: 35vw;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }
    }
    #middle-area {
        background: #51c4d3;
        text-align: left;
        color:  #f9f3f3;
        align-items: flex-start;
        font-size: 1vw;
        text-align: center;
        font-weight: 500;
        font-family: 'Merriweather', serif;
        border-top-left-radius: 3vw;
        border-bottom-left-radius: 3vw;
        
        .hum{
            padding: 1vw 0 1vw 4vw;
        }
    }
    #hori {
        position: absolute;
        width: 35vw;
        transform: rotate(90deg) translateY(-17vw);
    }
`

const Contact = (props) => {
    const {isLoggedIn, setLoggedIn, currentUser, setCurrentUser} = props

    const [details, setDetails] = useState({})
    const handleInput = e => {
        setDetails({...details,[e.target.name]: e.target.value})
    }

    return (
    <Con>
        <Navbar />
        <h1 class="contactPage">Contact Us</h1>
        <div class="c-row">
            <section id="middle-area">
                <p class="hum"> <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;&nbsp;2912 Meadowbrook Road,&nbsp;Los Angelas,CA,&nbsp;90017
                </p>
                <p class="hum">
                <FontAwesomeIcon icon ={faEnvelope} />&nbsp;&nbsp;devanshipatel2611@gmail.com
                </p>
                <p class="hum"><FontAwesomeIcon icon ={faPhoneAlt} />&nbsp;&nbsp;310-386-1234   </p>
            </section>

            <svg id="hori" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#51c4d3" fill-opacity="1"d="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,101.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

            <section id="pricing">
                <h2>Send Message</h2>
                <div class="row">
                        {/* Name */}
                        <TextField
                            name="name"
                            onChange={handleInput}
                            style={{width: "40%",margin: "2vw 5%"}}
                            variant="standard"
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
                            style={{width: "40%",margin: "2vw 5%"}}
                            variant="standard"
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
                            style={{width: "40%",margin: "2vw 5%"}}
                            variant="standard"
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
                            style={{width: "40%",margin: "2vw 5%"}}
                            variant="standard"
                            label="Email"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            placeholder="Enter Your Email"
                        />
                </div>
            </section>
        </div>
        <Footer />
    </Con>)
}

export default Contact;