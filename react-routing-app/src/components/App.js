import React, { Component } from 'react';
import Home from './MessageComponent';
import About from './About';
import Contact_Us from './Contact_Us';
import '../static/css/App.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    } from 'react-router-dom';


class App extends Component {

    componentWillMount () {
        document.body.style.backgroundColor = '#eeeeff'
    }
  render() {
    return (
        <div>

            <Router>
                <div id="findWeather">
                    <ul>

                        <li style={{float:"left"}}><Link to="/" >Home</Link></li>
                        <li style={{float:"left"}}><Link to="/about">About</Link></li>
                        <li style={{float:"left"}}> <Link to="/contact-us" /* style={{fontWeight:'bold'}}   make link bold!!*/>Contact Us</Link></li>
                    </ul>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact-us" component={Contact_Us}/>

                </div>
            </Router>

        </div>
    );
  }
}

export default App;
