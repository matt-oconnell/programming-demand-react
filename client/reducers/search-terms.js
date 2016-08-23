function searchTerms(state = [], action) {
	switch(action.type) {
		case 'ADD_SEARCH_TERMS':
      console.log('ADDDING!', action.terms)
			return state
		default:
			return state
	}
}

export default searchTerms
