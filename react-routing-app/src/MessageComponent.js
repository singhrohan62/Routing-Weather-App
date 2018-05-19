import React from 'react';
import FormComponent from './FormComponent';
import SnackBar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = {
	card : {
		maxWidth : 300,
	},
	media : {
		height : 0,
		paddingTop : '56.25',//16:9
	},
}


class MessageComponent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			location : 'Surat',
            temp : '23',
			error : null,
			isLoaded : false,
			items : {},
			coord : {},
			name : {},
			open : false,
			openDialog : false,
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
						coord : result.coord,
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
                        coord : result.coord,
                        name : result.name,
                        open : true,
                        openDialog : true,
                    });
				this.setState({message:`You typed ${this.state.name} and the temperature is ${this.state.items.temp}`});
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
		});
	}

	handleOpenDialog = () => {
		this.setState({
			openDialog : true
		});
	}

	handleClosedDialog = () => {
		this.setState({openDialog : false});
	}

	render () {

		const actions = [
			<FlatButton label="Thanks" primary={true}
			onClick = {this.handleClosedDialog}
			/>
		];

		const {classes} = this.props;

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
						
						<Dialog
					actions = {actions}
					modal = {true}
					open = {this.state.openDialog}>
					
					<Card className={classes.card}>
					        <CardMedia
					          className={classes.media}
					          image="./CollegeID.jpg"
					          title="Contemplative Reptile"
					        />
					        <CardContent>
					          <Typography gutterBottom variant="headline" component="h2">
					            {this.state.location}
					          </Typography>
					          <Typography component="p">
					          The city of {this.state.location} has longitude 
					 {this.state.coord.lon} and latitude {this.state.coord.lat}. 
					The current temperature is {this.state.items.temp} and
					humidity is {this.state.items.humidity}%.
					          </Typography>
					        </CardContent>

					      </Card>
					</Dialog>
					      
					    
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


MessageComponent.propTypes = {
	classes : PropTypes.object.isRequired,
}


/*
					<Dialog
					title = {this.state.location}
					actions = {actions}
					modal = {true}
					open = {this.state.openDialog}>
					The city of {this.state.location} has longitude 
					 {this.state.coord.lon} and latitude {this.state.coord.lat}. 
					The current temperature is {this.state.items.temp} and
					humidity is {this.state.items.humidity}%.
					</Dialog>
			    <CardActions>
					          <Button size="small" color="primary">
					            Share
					          </Button>
					          <Button size="small" color="primary">
					            Learn More
					          </Button>
				</CardActions>
*/

export default withStyles(styles)(MessageComponent);