import styled from 'styled-components'
import { Route, Redirect } from 'react-router-dom';
import SignUpIn from './SignUpIn'

const Profile = styled.div`
    width: 80%;
    margin: 2vw auto;
    padding: 3vw;
    background: rgba(150,150,150,0.1);
    border-radius: 2vw;
    box-shadow: 2px 3px 4px 2px rgba(0,0,0,0.6);
`

const Dashboard = (props) => {
    
    const {isLoggedIn, setLoggedIn, currentUser, setCurrentUser} = props
    
    if(isLoggedIn) {
        return (
            <Profile>
                <h1> {currentUser.name} </h1>
                <h2> {currentUser.email} </h2>
                <h3> {currentUser.mobile} </h3>
                <h3> {currentUser.address} </h3>
            </Profile>
        )
    }
    else {
        return <SignUpIn isLoggedIn={isLoggedIn} currentUser={currentUser} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} />
    }
}

export default Dashboard