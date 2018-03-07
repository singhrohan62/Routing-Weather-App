import React from 'react';
import FormComponent from './FormComponent';



class MessageComponent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			location : 'Surat',
            temp : '23',
			error : null,
			isLoaded : false,
			items : {},
			name : {}
		};
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {

		fetch(`http://api.openweathermap.org/data/2.5/weather?q=Surat&units=metric&appid=dceedfaf22fc0d7279dd4e219823de75`)
			.then(res => res.json())
			.then(
				(result) => {
					console.log(result);
					this.setState({
						isLoaded: true,
						items : result.main,
						name : result.name
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



	handleChange(location){

	    this.setState({
            location: location
        });

        var encodedLocation = encodeURIComponent(location);

        console.log(encodedLocation);

        fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodedLocation}&appid=dceedfaf22fc0d7279dd4e219823de75`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items : result.main,
                        name : result.name
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
				<div>
					<FormComponent onChange={this.handleChange}/>
					<center><h2>Its {items.temp} degrees in {this.state.name}</h2></center>
				</div>

			)
		}


	}
}


export default MessageComponent;