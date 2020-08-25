import React, { Component } from 'react';
import {
  Switch,
  Route,
  NavLink, Redirect
} from 'react-router-dom';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav>
          {/* <Redirect to="/home" /> */}
          <NavLink to="/home" activeClassName="App-link">Home</NavLink>
          <br></br>
          <NavLink to="/about" activeClassName="App-link">About</NavLink>
        </nav>

        <Switch>
          {/* If URL is /about, this route is rendered
              while the rest are ignored */}
          <Route path="/about">
            <About />
          </Route>
          {/*  this route is a fallback, because all URLs begin with a /. So that's
              why we put this one last of all */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
  )
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: '',
      get: '',
      name: '',
      param: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleGetSubmit = this.handleGetSubmit.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleGetSubmit(event) {
    event.preventDefault();
    fetch(`/api/get?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  handlePostSubmit = (event) => {
    event.preventDefault();

    fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( { post: this.state.param } )
    })
    .then(response => response.text())
    .then(body => this.setState({post: body}));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleGetSubmit}>
            <label htmlFor="name">Test GET Request: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
        </form>
        <p>{this.state.get}</p>
      

        <form onSubmit={this.handlePostSubmit}>
            <label htmlFor="name">Test POST Request: </label>
            <input
              type="text"
              value={this.state.param}
              onChange={e => this.setState({ param: e.target.value })}
            />
            <button type="submit">Submit</button>
        </form>
        <p>{this.state.post}</p>
      </div>
    );
  }
}

export default App;
