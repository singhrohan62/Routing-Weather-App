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

    componentWillMount () {
        document.body.style.backgroundColor = '#eeeeff'
        //document.body.style.backgroundImage = "url('http://xinature.com/wp-content/uploads/2016/10/winter-snow-weather-storm-snowstorm-3d-wallpaper-download.jpg')";
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
