import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateReview from './App';
import EditReview from './EditReview';

export default class AppRouter extends React.Component {
	render() {
		return (
			<Router>
			    <nav>
			        <ul>
			        	<li>
			        		<Link to="/create">Create Review</Link>
			        	</li>
			        	<li>
			        		<Link to="/edit">Read Reviews</Link>
			        	</li>
			        </ul>
			    </nav>
				<Route path="/create" component={CreateReview} />
				<Route path="/edit" component={EditReview} />
			</Router>
		)
	}
}