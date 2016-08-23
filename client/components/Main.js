import React from 'react';
import { Link } from 'react-router';

import Graph from './Graph'
import Form from './Form'

const Main = React.createClass({
	render() {
		return (
			<div>
        <h1>Hi This is an app</h1>
        <Graph {...this.props} />
        <Form {...this.props} />
			</div>
		)
	}
});

export default Main;
