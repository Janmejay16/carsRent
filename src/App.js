import Header from './components/Header'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import FAQs from './components/FAQs'
import SignUpIn from './components/SignUpIn'
import Dashboard from './components/Dashboard'

const App = () => {
      
  const [isLoggedIn,setLoggedIn] = useState(false)

  const [currentUser,setCurrentUser] = useState({
      "name": "Janmejay",
      "email": "janmejay.shastri01@gmail.com",
      "mobile": "8160741358",
      "address": "34 Narayan Gardens"
  })

  return (
    <Router>
      <Route exact path ="/" component={Header} />
      <Route exact path ="/account" component={
        () => <Dashboard
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          setLoggedIn={setLoggedIn}
          setCurrentUser={setCurrentUser}
        />}
      />
      <Route exact path="/faq" component={FAQs} />
    </Router>
  )
}

export default App;
