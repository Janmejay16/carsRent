
import React from "react";
import image from "../styles/AboutUs.png";

function About(){
    const mystyle={
       width: "800px",
       height: "100%"
    };
    return (
        <div>
  <div className="About col-lg-6 col-md-12 col-sm-12">

  <h1 className="moon">About Us</h1>
  <p>Rent-a-Ride was co-founded by Mrunali Thakkar and Maitri Patel in March 2021.
Customers can rent the 2-wheeler or 4-wheeler for their trips or work.
The company is based in Vadodara and has started to provide its services in famous tourist destinations like Udaipur, goa, leh Ladakh etc.
</p>
<p>Rent-a-Ride is a self-driven C2C rental service which provides a platform for both the customers to provide and enjoy the rides with the largest fleet of all kinds of vehicles including hatchback, SUV, Sedan and 2-wheeler including activa 5g, vespa, bullet etc. We offer 24/7 services. We specialise in the best customer service, well maintained vehicles. All the vehicles are checked and sanitize when the customers need them. We provide all the user friendly and safety facilities like mask and sanitizer (keeping the COVID situation in top priority). Our fleet is always in excellent condition and is topped up with round the clock service providing attitude, we are extremely respected by our clients for our appropriate and the most cost-effective car rental service.
</p>
</div>
<div className="col-lg-6 col-md-12 col-sm-12">
<div>
<img className="images" src={image} alt="Image" style={mystyle}/>
</div>
</div>
</div>
);
}
export default About;