import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Contact_Us from './Contact_Us';
import './App.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <ul class="topnav">
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact-us" component={Contact_Us}/>
            </div>
        </Router>
    );
  }
}

export default App;
