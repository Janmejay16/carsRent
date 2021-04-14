
import React from "react";
import image from "../styles/AboutUs.png";
import Navbar from './Navbar'
import Footer from './Footer'
import styled from 'styled-components'

const AboutSection = styled.div`
  width: 100%;
  margin: 0 auto;
  .About {
    padding: 2vw;
    width: 90%;
    margin: 1vw auto;
    border-radius: 1vw;
    display: flex;
    justiy-content: center;
    align-items: center;
    .content {
      text-align: left;
      width: 45%;
      margin: 1vw auto;
      p {
        font-size: 1vw;
      }
    }
    .image {
      width: 45%;
      margin: 1vw auto;
      text-align: center;
      img {
        padding-top 3vw;
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`

function About() {
    return (
      <AboutSection>
        <div>
          <Navbar />
          <div className="About">
            <div className="content">
              <h1 className="moon">About Us</h1>
              <p>Rent-a-Ride was co-founded by Mrunali Thakkar and Maitri Patel in March 2021.
            Customers can rent the 2-wheeler or 4-wheeler for their trips or work.
            The company is based in Vadodara and has started to provide its services in famous tourist destinations like Udaipur, goa, leh Ladakh etc.
            </p>
            <p>Rent-a-Ride is a self-driven C2C rental service which provides a platform for both the customers to provide and enjoy the rides with the largest fleet of all kinds of vehicles including hatchback, SUV, Sedan and 2-wheeler including activa 5g, vespa, bullet etc. We offer 24/7 services. We specialise in the best customer service, well maintained vehicles. All the vehicles are checked and sanitize when the customers need them. We provide all the user friendly and safety facilities like mask and sanitizer (keeping the COVID situation in top priority). Our fleet is always in excellent condition and is topped up with round the clock service providing attitude, we are extremely respected by our clients for our appropriate and the most cost-effective car rental service.
            </p>
            </div>
            <div className="image">
              <img className="images" src={image} alt="Image"/>
            </div>
        </div>
        <Footer />
        </div>
</AboutSection>
);
}
export default About;