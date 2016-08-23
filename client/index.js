import React from 'react';
import {render} from 'react-dom';

// CSS
import css from './styles/style.styl';

// Components
import App from './components/App';

// Routing
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

// Store
import store, {history} from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
			</Route>
		</Router>
	</Provider>
);

render(router, document.getElementById('root'));

// todo: is this the best place for this?
import { newExample } from './actions/actionCreators'
// on each page change, trigger this
history.listen(location => {
	store.dispatch(newExample(location))
})
