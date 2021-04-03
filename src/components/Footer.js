import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWhatsapp, faInstagram, faYoutube, faFacebook} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

const FooterElem = styled.footer`
    padding: 2vw 0;
    width: 100%;
    margin: 0 auto;
    background: rgba(0,0,0,0.2);
    background-size: cover;
    background-repeat: no-repeat;
    .top {
        width: 80%;
        margin: 1vw auto;
        display: flex;
        align-items: top;
        justify-content: center;
        .lists {
            width: 40%;
            margin: 0 auto;
            color: white;
            text-align: left;
            h2 {
                margin: 1vw 0 2vw 0;
            }
            ul {
                list-style: none;
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: left;
                
                li {
                    width: 23%;
                    margin: 0;
                    text-align: left;
                    a {
                        font-size: 1.2vw;
                        color: white;
                        text-decoration: none;
                        &:active {
                            color: white;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
        #social {
            margin-left: 10%;
            text-align: left;
            ul {
                display: flex;
                align-items: center;
                justify-content: center;
                li {
                    text-align: left;
                    width: 25%;
                    margin: 0 auto;
                    a {
                        font-size: 2vw;
                    }
                }
            }
        }
    }
    .bottom {
        width: 90%;
        margin: 2vw auto 1vw auto;
        color: white;
        border-top: 2px solid white;
        padding: 2vw 0;
        p {
            text-align: center;
            font-size: 1vw;
            width: 90%;
            margin: 0 auto;
        }
    }
`

const Footer = () => {
    return (
        <FooterElem>
            {/* Top Links Element */}
            <div className="top">
                <div className="lists">
                    <h2>USEFUL LINKS</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Services</Link></li>
                        <li><Link to="/">FAQs</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
                <div className="lists" id="social">
                    <h2>FOLLOW US</h2>
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faWhatsapp}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faYoutube}/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright Element */}
            <div className="bottom">
                <p>Copyright 2021 &copy; All Right Reserved. Rent-A-Ride, Vadodara, India. Developed By Devanshi Patel and Janmejay Shastri.</p>
            </div>
        </FooterElem>
    )
}

export default Footer
