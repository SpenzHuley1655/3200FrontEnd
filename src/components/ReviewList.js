import React from 'react';
import '../App.css';
import {Table, Button} from 'react-bootstrap';

export default class ReviewList extends React.Component {
	constructor(props) {
	    super(props);
	    this.deleteReview = this.deleteReview.bind(this);
	    this.state = {
	      reviews: []
	    }
  	}

  	componentWillMount() {
  		fetch('http://127.0.0.1:5000/reviews', {
  			method: 'get',
  			headers : {
		        'Content-Type': 'application/json',
		        'Accept': 'application/json'
		    }
  		})
  		.then((res) => res.json())
  		.then((res) => this.setState({reviews: res.data}))
  		.then((res) => console.log(this.state));
  	}

  	deleteReview(id) {
  		fetch('http://127.0.0.1:5000/reviews/delete/' + id, {
  			method: 'DELETE',
  			headers : {
		        'Content-Type': 'application/json',
		        'Accept': 'application/json'
		    }
  		})
		.then(res => res.json())
		//.then(res => console.log(res))
		.then(res => this.setState({reviews: res.data}))
  	}

  	render() {
  		return (
  			<div className="App">
	      			<Table striped border hover>
	      				<thead>
	      					<tr>
	      						<th> Reviewer ID </th>
	      						<th> Movie ID </th>
	      						<th> Rating </th>
	      						<th> Date Posted </th>
	      						<th> Description </th>
	      						<th> Options </th>
	      					</tr>
	      				</thead>
	      				<tbody>
	      					{this.state.reviews.map((r,i) => (
	      						<tr key={r.review_id}>
	      							<td>
	      								{r.reviewer_id}
	      							</td>
	      							<td>
	      								{r.movie_id}
	      							</td>
	      							<td>
	      								{r.rating}
	      							</td>
	      							<td>
	      								{r.date_posted}
	      							</td>
	      							<td>
	      								{r.description}
	      							</td>
	      							<td>
	      								<Button variant="danger" onClick={() => this.deleteReview(r.review_id)}>Delete</Button>
	      							</td>
	      						</tr>))}
	      				</tbody>
	      			</Table>
      		</div>
  		)
  	}
}
