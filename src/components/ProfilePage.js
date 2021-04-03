import styled from 'styled-components'

const Profile = styled.div`
    width: 80%;
    margin: 2vw auto;
    padding: 3vw;
    background: rgba(150,150,150,0.1);
    border-radius: 2vw;
    box-shadow: 2px 3px 4px 2px rgba(0,0,0,0.6);
`

const ProfilePage = (props) => {
    const {user} = props
    return (
        <Profile>
            <h1> {user.name} </h1>
            <h2> {user.email} </h2>
            <h3> {user.mobile} </h3>
            <h3> {user.address} </h3>
        </Profile>
    )
}

export default ProfilePage