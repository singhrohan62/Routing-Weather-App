import React from 'react';
import '../static/css/App.css';
import '../static/css/FormComponent.css';

class FormComponent extends React.Component {

	onFormSubmit = (e) => {
		e.preventDefault();
		var location = this.nameInput.value;

		if(location.length>0)
		{
			this.props.onChange(this.nameInput.value);
		}
        this.nameInput.value = ' ';
	}
	onButtonClick = () => {
        var location = this.nameInput.value;

        if(location.length>0)
        {
            this.props.onChange(this.nameInput.value);
        }
        this.nameInput.value = '';
	}

	render() {
		return(
			<div>
				<center><p>Type a city name and see the magic!</p></center>
				<div id="form">
					<h3 align="center">Enter the city name</h3>
					<form onSubmit={this.onFormSubmit}>
						<center>
							<input type="text" placeholder="eg: London" align="center" ref={(input)=>{this.nameInput=input;}}/>
						</center>

					</form>
					<center>
						<button  onClick={this.onButtonClick}>Go</button>
					</center>
				</div>
			</div>
		)
	}
}

export default FormComponent;