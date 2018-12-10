import React from 'react';
import FormComponent from './FormComponent';

class MessageComponent extends React.Component {

	state = {
			error : null,
			isLoaded : true,
		};

	handleChange =(location) => {

        fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=dceedfaf22fc0d7279dd4e219823de75`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                    });
				alert(`You typed ${result.name} and the temperature is ${result.main.temp}`)
                },
                (error) => {
                    this.setState({
                        isLoaded : true,
                        error
                    });
                }
            )

	}

	render () {
		if(this.state.error){
			return <div>Error : {this.state.error.message}</div>
		}
		else if(!this.state.isLoaded){
			return <div>Loading...</div>
		}

		else {
			return(
				<div>
					<FormComponent onChange={this.handleChange}/>
				</div>
			)
		}


	}
}

export default MessageComponent;