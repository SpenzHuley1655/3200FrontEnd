import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CreateReview from './CreateReview';
import EditReview from './EditReview';
import NavBar from './NavBar';
import ReviewList from './ReviewList';

export default class AppRouter extends React.Component {
	render() {
		return (
			<div className="">
			<Router>
				<NavBar/>
				<Route path="/create" component={CreateReview} />
				<Route path="/read" component={ReviewList} />
				<Route path="/edit/:id" component={EditReview} />
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
