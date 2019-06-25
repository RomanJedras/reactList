import React from 'react';


class MyComponents extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		   text : ''
		}
		
	}
	
	handleChange  = (e) => {
		this.setState({
			text: e.target.value.toUpperCase()
		});
	}
	
	
	render () {
		return (
			<>
			<h1>{this.state.text}</h1>
			<input
				placeholder="your text"
				type="text"
				onChange={this.handleChange}
				value={this.state.text}
			/>
			</>
		)
	}
}


export default MyComponents;