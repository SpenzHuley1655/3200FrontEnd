import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.database = this.database.bind(this);
  }

  database() {
    fetch("http://127.0.0.1:5000/api/get_chars")
    .then(res => res.json());
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
        </form>
        <button onClick={this.database}>
          Hit DB 
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

