import React from "react";
// import "../styles/cars_pro.css";
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = (props) => {
    const {isLoggedIn, setLoggedIn, currentUser, setCurrentUser} = props
    return (
    <div>
        <div>
            <h1 className="contact">Get In Touch</h1>
            <div className="row">
                <div className="box col-lg-6 col-md-6 col-sm-6">
                    <section id="middle-area">
                        <h2 className="starting">Contact Us</h2>
                        <div className="row">
                            <div className="box col-lg-12 col-md-12 col-sm-12">
                                <p className="hum">
                                    <i className="icon fas fa-map-marker-alt fa-2x"></i>
                            2       912 Meadowbrook Road<br/>
                                    Los Angelas,CA<br />
                                    90017
                                </p>
                            </div>
                            <div className="box col-lg-12 col-md-12 col-sm-12">
                                <p className="hum">
                                    <i className="icon2 fas fa-envelope fa-2x"></i> devanshipatel2611@gmail.com
                                </p>
                            </div>
                            <div className="box col-lg-12 col-md-12 col-sm-12">
                                <p className="hum"><i className="icon3 fas fa-phone-alt fa-2x"></i>310-386-1234</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="box col-lg-6 col-md-6 col-sm-6">
                    <section id="pricing">
                        <div className="classy classic card">
                            <div className="card-body">
                                <h2>Send Message</h2>
                                <div className="row">
                                    <hr/>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <form className="contactPage" action="/contact" method="post" autocomplete="off">
                                            <label className="name" for="fname">First Name</label>
                                            <input type="FirstName" name="fname" className="form-control"/>
                                            <input type="Email" name="email" className="form-control" placeholder="Email Address" required/>
                                            <textarea id="texting" name="TextArea" placeholder="Write your message here" rows="4" cols="50"></textarea>
                                            <button type="button" className="submit btn btn-dark">Submit</button>
                                        </form>
                                    </div>
                                    <div className="part2 col-lg-6 col-md-6 col-sm-6">
                                        <form className="contactPage" action="/contact" method="post" autocomplete="off">
                                            <label className="name" for="lname">Last Name</label>
                                            <input type="LastName" name="lname" className="form-control"/>
                                            <input type="number" name="PhoneNumber" className="form-control" placeholder="Phone Number"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>)
}

export default Contact;