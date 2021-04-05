import React from "react";
// import "../styles/cars_pro.css";
import Navbar from './Navbar'
import Footer from './Footer'
import styled from 'styled-components'

const Con = styled.div`
.contactPage{
    text-align: center;
    padding: 2vw 3vw;
    }
    .c-row {
        margin: 5vw auto;
    }
    #middle-area {
        width: 70%;
        margin: 0 auto;
        box-shadow: 1px 2px 2px 1px #999;
        border-radius: 3vw;
        padding: 2vw;
        .contact{
        text-align: center;
        font-weight: 500;
        font-family: 'Merriweather', serif;
        }
        .icon:hover{
        color: #8f4f4f;
        }
        
        .hum{
            padding: 1vw;
        }
    }
`

const Contact = (props) => {
    const {isLoggedIn, setLoggedIn, currentUser, setCurrentUser} = props
    return (
    <Con>
        <Navbar />
        <h1 class="contactPage">Contact Us</h1>
        <div class="c-row">
            <section id="middle-area">
                <p class="hum"> <i class="icon fas fa-map-marker-alt fa-2x"></i>
                2912 Meadowbrook Road<br/>
                Los Angelas,CA<br />
                90017
                </p>
                <p class="hum"> <i class="icon2 fas fa-envelope fa-2x"></i>
                devanshipatel2611@gmail.com
                </p>
                <p class="hum"><i class="icon3 fas fa-phone-alt fa-2x"></i>310-386-1234   </p>
            </section>
        </div>
        <Footer />
    </Con>)
}

export default Contact;