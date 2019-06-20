import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateReview from './components/CreateReview';
import EditReview from './components/EditReview';
import NavBar from './components/NavBar';
import ReviewList from './components/ReviewList';

export default class AppRouter extends React.Component {
	render() {
		return (
			<div className="">
			<Router>
				<NavBar/>
				<Route path="/create" component={CreateReview} />
				<Route path="/read" component={ReviewList} />
			</Router>

			<link
	        rel="stylesheet"
	        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	        crossOrigin="anonymous"
	        />
			</div>
		)
	}
}
