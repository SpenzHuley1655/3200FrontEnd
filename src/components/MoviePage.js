import React from 'react';
import NavBar from './NavBar';
import {Table} from 'react-bootstrap';

export default class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie_id: this.props.match.params.id,
            title: '',
            description: 'No description available.',
            release_date: '',
            runtime: '',
            rating: 'No ratings',
            genre: '',
            poster_url: '',
            actors: []
        }
        this.initializeMovie();
        this.initializeActors();
    }

    initializeMovie() {
        fetch('http://127.0.0.1:5000/movies/' + this.state.movie_id)
        .then((res) => res.json())
        .then((res) => this.setState(res.data[0]))
    }

    initializeActors() {
        fetch('http://127.0.0.1:5000/movies/' + this.state.movie_id + '/actors')
        .then((res) => res.json())
        .then((res) => this.setState({actors: res.data}))
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="">{this.state.title}</h1>
                    <div style={{display: 'inline-block'}}>
                        <img src={this.state.poster_url} height="400" width="400"/>
                        <h1 className="display-4 float-right">Rating:     {this.state.rating} / 10</h1>
                        <p className="lead">{this.state.description}</p>
                    </div>
                    <hr class="my-4"/>
                    <p className="lead">
                    </p>
                    <h3>Cast</h3>
                    <Table striped>
                        <tbody>
                        {this.state.actors.map((a,i) => (
                            <tr key={a.actor_id}>
                                <td>
                                    <img src={a.headshot_url} height="100" width="90"/>
                                </td>
                                <th>
                                <h2>{a.name}</h2>
                                </th>
                                <td>
                                    <p>{a.biography}</p>
                                </td>
                            </tr>))}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
