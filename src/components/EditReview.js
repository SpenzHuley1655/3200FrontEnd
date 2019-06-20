import React from 'react';
import '../App.css';
import { Button, InputGroup, FormControl, Col, Container, Form } from 'react-bootstrap';
import {Redirect} from "react-router-dom";

export default class EditReview extends React.Component {

  constructor(props) {
    super(props);
    this.database = this.database.bind(this);
    this.changeReview = this.changeReview.bind(this);
    this.state = {
      review_id: this.props.match.params.id,
      movie_id: '',
      reviewer_id: '',
      rating: '',
      description: ''
    }
  }

  componentWillMount() {
    fetch('http://127.0.0.1:5000/reviews/' + this.state.review_id)
    .then((res) => res.json())
    .then((res) => this.setState(res.data[0]))
    .then(() => console.log(this.state));
  }

  database() {
    fetch('http://127.0.0.1:5000/reviews/' + this.state.review_id, {
      method: 'put',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)})
      .then(() => this.props.history.push('/read'));
  }

  changeReview(fieldname, newvalue) {
    this.state[fieldname] = newvalue;
  }

  render() {
    return (
    <div className="App">
        <h3> Edit Review </h3>
        <hr/>
        <Container>
          <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Movie ID</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                defaultValue={this.state.movie_id}
                onChange={(e) => this.changeReview("movie_id", e.target.value)}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Reviewer ID</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                defaultValue={this.state.reviewer_id}
                onChange={(e) => this.changeReview("reviewer_id", e.target.value)}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Rating     </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                defaultValue={this.state.rating}
                onChange={(e) => this.changeReview("rating", e.target.value)}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Review Body</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                defaultValue={this.state.description}
                onChange={(e) => this.changeReview("description", e.target.value)}
                aria-label="Username"
                aria-describedby="basic-addon1"
              >
              </FormControl>
            </InputGroup>
          </Form>
        </Col>
        <Button onClick={this.database} type="submit">Update Review</Button>
        </Container>
    </div>
    );
  }
}
