import React from 'react';
import FormComponent from './FormComponent';
//import openweathermap from './openweathermap';// eslint-disable-next-line

//import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?';

const APP_ID = 'dceedfaf22fc0d7279dd4e219823de75';

class MessageComponent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			/*location : 'Surat',
            temp : '23',*/
			error : null,
			isLoaded : false,
			items : {}
		};
		this.handleChange = this.handleChange.bind(this);
		//this.getTemp = this.getTemp.bind(this);
	}

	componentDidMount() {
		fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=dceedfaf22fc0d7279dd4e219823de75')
			.then(res => res.json())
			.then(
				(result) => {
					console.log(result);
					this.setState({
						isLoaded: true,
						items : result.main
					});

				},

				(error) => {
					this.setState({
						isLoaded : true,
						error
					});
				}
			)
	}

	/*
    componentWillMount() {
        console.log('componene will mount');
        debugger;
    }
    componentDidMount() {
		console.log('done mounting');
        debugger;
    }*/
    /*getTemp (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}q=${encodedLocation}&appid=${APP_ID}`;

        return axios.get(requestUrl).then(function (res) {
                if(res.data.cod && res.data.message){
                    throw new Error(res.data.message);
                } else{
                    return res.data.main.temp;
                }
            },
            function (res) {
                throw new Error(res.data.message);
            });
    }*/

	handleChange(location){

	    this.setState({
            location: location
        });

	/*this.getTemp(location).then(function (temp) {

            this.setState({
                location: location,

            });
        },function (errormsg) {
            alert(errormsg);
        });*/
	}

	render () {

		const{ error, isLoaded, items} = this.state;
		if(error){
			return <div>Error : {error.message}</div>
		}
		else if(!isLoaded){
			return <div>Loading...</div>
		}


		else {
			return(
				<ul>
					<li>{items.temp}</li>
				</ul>
			)
		}
		/*return (
				<div>
					<FormComponent onChange={this.handleChange}/>
					<center><h2>Its {this.state.temp} C in {this.state.location}</h2></center>
				</div>
			)*/
	}
}


export default MessageComponent;