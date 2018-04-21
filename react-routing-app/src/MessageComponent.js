import React from 'react';
import FormComponent from './FormComponent';
import SnackBar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class MessageComponent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			location : 'Surat',
            temp : '23',
			error : null,
			isLoaded : false,
			items : {},
			name : {},
			open : false,
			message : 'Nahi Chal raha',
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
						name : result.name,
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
            location: location,
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
                        name : result.name,
                        open : true,
                    });
				this.setState({message:`The temperature in ${this.state.name} is ${this.state.items.temp}`});
                },

                (error) => {
                    this.setState({
                        isLoaded : true,
                        error
                    });
                }
            )

	}

	handleSnackBar = () => {
		this.setState({
			open : false,
		})
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
					<MuiThemeProvider>
					<FormComponent onChange={this.handleChange}/>
					<SnackBar open={this.state.open} message={this.state.message}
							  autoHideDuration = {4000}
							  onRequestClose={this.handleSnackBar}
					/>
					</MuiThemeProvider>
				</div>

			)
		}


	}
}


export default MessageComponent;