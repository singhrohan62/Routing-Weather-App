import React from 'react';
import './App.css';

class FormComponent extends React.Component {

	constructor(props){
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
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
	
	render() {
		return(
			<div>
			     <h3 align="center">Get Weather</h3>
				<form onSubmit={this.onFormSubmit}>
					<center>
						<input type="text" placeholder="Enter city name" align="center" ref={(input)=>{this.nameInput=input;}}/>
					</center>
					<center>
						<button className="button-submit">Get Weather</button>
					</center>
				</form>
			</div>
		)
	}
}

export default FormComponent;