import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'

// import root reducer
import rootReducer from './reducers/index'

import searchTerms from './data/search-terms'

// create an object for the default data
const defaultState = {
	searchTerms
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk))

export const history = syncHistoryWithStore(browserHistory, store)

export default store
