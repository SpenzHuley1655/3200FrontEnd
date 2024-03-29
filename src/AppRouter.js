import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateReview from './App';
import EditReview from './EditReview';
import ReviewList from './ReviewList';

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
			        		<Link to="/read">Read Reviews</Link>
			        	</li>
			        	<li>
			        		<Link to="/edit/:id">Edit Reviews</Link>
			        	</li>
			        </ul>
			    </nav>
				<Route path="/create" component={CreateReview} />
				<Route path="/read" component={ReviewList} />
				<Route path="/edit/:id" component={EditReview} />
				<link
			      rel="stylesheet"
			      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
			      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
			      crossOrigin="anonymous"
			      />
			</Router>
		)
	}
}