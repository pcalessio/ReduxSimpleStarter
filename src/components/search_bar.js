import React, { Component } from 'react';

class SearchBar extends Component {


	constructor(props) {
		super(props);

		this.state = { term: '' }
	}

	//every class based component need to have the render
	render() {
		return (
			<div>
				<input 
				value={this.state.term}
				onChange={event => this.setState( {term: event.target.value} )} />
			</div>
			);
	}

}



export default SearchBar;