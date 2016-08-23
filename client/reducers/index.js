import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import inputs from './inputs';

const rootReducer = combineReducers({
	inputs,
	routing: routerReducer
});

export default rootReducer;
