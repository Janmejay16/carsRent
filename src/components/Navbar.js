import styled from 'styled-components'
import {Link} from 'react-router-dom'
import header from '../images/header.png'

const Nav = styled.div`
    display: flex;
    background: rgba(0,0,0,0.3);
    padding: 1vw 0;
    margin: 0;
    width: 100%;
    aling-items: center;
    .logo {
        margin: 0;
        width: 20%;
        text-align: center;
        img {
            width: 40%;
        }
    }
    ul {
        width: 70%;
        margin: 0 auto;
        padding: 0;
        padding-left: 10%;
        display: flex;
        margin: 0;
        justify-content: space-evenly;
        align-items: center;
        list-style: none;
        li {
            width: 10%;
            margin: 0;
            a {
                color: white;
                text-decoration: none;
                &:active {
                    color: white;
                    text-decoration: none;
                }
            }
        }
    }
`

const Navbar = () => {
    return(
        <Nav>
            <div className="logo">
                <img src={header} />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Services</Link></li>
                <li><Link to="/">FAQs</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/join">Login</Link></li>
            </ul>
        </Nav>
    )
}

export default Navbar