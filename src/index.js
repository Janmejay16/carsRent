import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App';
import SignUpIn from './components/SignUpIn';
import FAQs from './components/FAQs'

ReactDOM.render(
  <Router>
    <Route exact path ="/" component={App} />
    <Route exact path ="/join" component={SignUpIn} />
    <Route exact path="/faq" component={FAQs} />
  </Router>,
  document.getElementById('root')
);
