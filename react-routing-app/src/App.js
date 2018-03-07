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


                    <Link to="/contact-us" /* style={{fontWeight:'bold'}}   make link bold!!*/>Contact Us</Link>
                    <Link to="/about">About</Link>
                    <Link to="/" >Home</Link>


                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact-us" component={Contact_Us}/>

            </div>
        </Router>
    );
  }
}

export default App;
