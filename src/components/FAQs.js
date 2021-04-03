import styled from 'styled-components'
import Navbar from './Navbar'
import Footer from './Footer'
import faq from '../images/faq2.png'
import faq3 from '../images/faq3.png'

const Faq = styled.div`
    width: 80%;
    margin: 3vw auto;
    border-radius: 3vw;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.8);
    background: rgba(0,0,0,0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70vh;
    .image {
        order: 2;
        width: 50%;
        height: 70vh;
        margin: 0 auto;
        text-align: center;
        border-top-right-radius: 3vw;
        border-bottom-right-radius: 3vw;
        background: url(${faq});
        @media only screen and (max-width: 768px) {
            background: url(${faq3});
        }
        background-size: cover;
        background-repeat: no-repeat;
    }
    .questions {
        list-style-type: none;
        order: 1;
        width: 50%;
        padding: 0;
        margin: 0 auto;
        color: white;
        .item {
            width: 80%;
            margin: 2vw auto;
            h4, p {
                margin: 0.5vw 0;
            }
            h4 {
                font-size: 1.4vw;
            }
            p {
                font-size: 1vw;
                color: rgba(255,255,255,0.7);
            }
        }
    }
`

const Main = styled.div`
    width: 100%;
    background: #ffa900;
    .main {
        padding-bottom: 3vw;
    }
`

const FAQs = () => {
    return (
        <Main>
            <Navbar />
            <div className="main">
                <Faq>
                    <div className="image"></div>
                    <ul className="questions">
                        <li>
                            <div className="item">
                                <h4>Can you rent a car from Dabolim Goa Airport?</h4>
                                <p>Dabolim Airport is popular among tourist looking for Car rentals in Goa, with 70% of tourist hiring cars from the Airport with nominal Delivery and pickup charges.</p>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <h4>What is drink and drive limit in Goa?</h4>
                                <p>In Goa, the legal limit of blood alcohol content (BAC) is 0%. However if you are driving, it is advised not to have any alcohol prior to your journey.</p>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <h4>How is the Car parking around Goa?</h4>
                                <p>There is sufficient parking space for cars at all tourist places and beaches across Goa.</p>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <h4>Whats is the speed limit in Goa?</h4>
                                <p>Currently for cars the speed on highways in Goa is 80-100km/h, the limit drops to 40km/h in interior roads.</p>
                            </div>
                        </li>
                    </ul>
                </Faq>
            </div>
            <Footer />
        </Main>
    )
}

export default FAQs