import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SignUpIn from './components/SignUpIn';

ReactDOM.render(
  <Router>
    <Route exact path ="/" component={App} />
    <Route exact path ="/join" component={SignUpIn} />
  </Router>,
  document.getElementById('root')
);
