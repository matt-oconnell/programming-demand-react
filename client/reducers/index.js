import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import searchTerms from './search-terms';

const rootReducer = combineReducers({
	searchTerms,
	routing: routerReducer
});

export default rootReducer;
