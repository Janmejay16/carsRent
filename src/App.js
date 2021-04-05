import Header from './components/Header'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import FAQs from './components/FAQs'
import Dashboard from './components/Dashboard'
import Contact from './components/Contact'
import About from './components/about'
import Services from './components/services'
import Enquire from './components/Enquire'

const App = () => {
      
  const [isLoggedIn,setLoggedIn] = useState(false)
  const [popup, setPopup] = useState(false)
  const [currentCar, setCurrentCar] = useState({})
  // const [currentUser,setCurrentUser] = useState({})
  const [currentUser,setCurrentUser] = useState({})
  const [location, setLocation] = useState(null)
  const [role, setRole] = useState("user")

  return (
    <Router>
      <Route exact path="/" component={
        () => <Header
          currentCar={currentCar}
          setCurrentCar={setCurrentCar}
          popup={popup}
          setPopup={setPopup}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          setLoggedIn={setLoggedIn}
          setCurrentUser={setCurrentUser}
          location={location}
          setLocation={setLocation}
        />} 
      />
      
      <Route exact path ="/account" component={
        () => <Dashboard
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          setLoggedIn={setLoggedIn}
          setCurrentUser={setCurrentUser}
          role={role}
          setRole={setRole}
        />}
      />
      
      <Route exact path="/faq" component={
        () => <FAQs
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          setLoggedIn={setLoggedIn}
          setCurrentUser={setCurrentUser}
        />} 
      />

      <Route exact path="/enquire" component={
        () => <Enquire
          currentCar={currentCar}
          setCurrentCar={setCurrentCar}
          popup={popup}
          setPopup={setPopup}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          setLoggedIn={setLoggedIn}
          setCurrentUser={setCurrentUser}
        />} 
      />
      
      <Route exact path="/contact" component={
        () => <Contact
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          setLoggedIn={setLoggedIn}
          setCurrentUser={setCurrentUser}
        />} 
      />
      
      <Route exact path="/about" component={
        () => <About
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          setLoggedIn={setLoggedIn}
          setCurrentUser={setCurrentUser}
        />} 
      />

      <Route exact path="/services" component={
        () => <Services
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          setLoggedIn={setLoggedIn}
          setCurrentUser={setCurrentUser}
        />} 
      />
    </Router>
  )
}

export default App;
