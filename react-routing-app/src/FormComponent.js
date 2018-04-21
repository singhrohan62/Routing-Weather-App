import React from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class FormComponent extends React.Component {

	constructor(props){
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onFormSubmit (e) {
		e.preventDefault();
		var location = this.nameInput.value;

		if(location.length>0)
		{
			this.props.onChange(this.nameInput.value);
		}
        this.nameInput.value = ' ';
	}
	onButtonClick () {
        var location = this.nameInput.value;

        if(location.length>0)
        {
            this.props.onChange(this.nameInput.value);
        }
        this.nameInput.value = ' ';
	}

	render() {
		return(
			<div>
			<MuiThemeProvider>

			     <h3 align="center">Get Weather</h3>
				<form onSubmit={this.onFormSubmit}>
					<center>
						<input type="text" placeholder="Enter city name" align="center" ref={(input)=>{this.nameInput=input;}}/>
					</center>

				</form>
				<center>
					<RaisedButton label="Get Weather" secondary={true}  onClick={this.onButtonClick}/>
				</center>

			</MuiThemeProvider>
			</div>
		)
	}
}

export default FormComponent;