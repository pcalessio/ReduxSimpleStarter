import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
				onClick={() => this.props.selectBook(book)}
				key={book.title} className="list-group-item">{book.title}</li>
			)
		})

	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}

}


function mapStateToProps(state) {
	//whatever is returned will show up as props
	//get the app state and return component props 
	return {
		books: state.books
	};
}

// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	//whenever selectBook is called, the result tshould be pass to all of our reducers. 
	return bindActionCreators({selectBook: selectBook}, dispatch)
}

//connect function from the react-redux library is the glue of react and redux 
// it transform the component into a container (which is aware of redux state)

export default connect(mapStateToProps, mapDispatchToProps)(BookList); 