//action selector
export function selectBook(book) {
	// as an action creator it needs to return an action 
	// an acion as a type and a payload 
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}