import styled from 'styled-components'
import {Link} from 'react-router-dom'
import header from '../images/logo.png'

const Nav = styled.div`
    display: flex;
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
            margin: 0;
            font-size: 1.2vw;
            a {
                padding: 0.3vw 0;
                color: white;
                text-decoration: none;
                &:active {
                    color: white;
                    text-decoration: none;
                }
            }
            &:hover {
                a {
                    border-bottom: 0.07vw solid white;
                }
            }
        }
    }
`

const Navbar = (props) => {
    const {bg ,isLoggedIn, setLoggedIn, currentUser, setCurrentUser} = props
    return(
        <Nav style={{background:"transparent"}}>
        {/* <Nav> */}
            <div className="logo">
                <img src={header} />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                {/* <li><Link to="/contact">Contact</Link></li> */}
                <li><Link to="/account">{(isLoggedIn ? "Hi, "+currentUser.name : "Login")}</Link></li>
            </ul>
        </Nav>
    )
}

export default Navbar