import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  NavLink, useHistory, useLocation
} from 'react-router-dom';
import { isLoggedIn, login, fetchReq } from './utils/utils';
import logo from './logo.svg';
import Table from './components/table';
import _ from 'lodash';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav>
          <NavLink to="/home" activeClassName="App-link">Home</NavLink>
          <br></br>
          <NavLink to="/about" activeClassName="App-link">About</NavLink>
        </nav>

        <Switch>
          {/* If URL is /about, this route is rendered
              while the rest are ignored */}
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/about">
            <About />
          </PrivateRoute>
          {/* fallback route */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={(location) => isLoggedIn() != null
        ? children
        : <Redirect to={{ pathname: '/login' }} />}
    />
  )
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let handleLogin = () => {
    login();
    history.replace("/home");

  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
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
      param: '',
      data: []
    };

    this.fields = ['amount', 'transaction_id', 'transaction_type']

    this.handleChange = this.handleChange.bind(this);
    this.handleGetSubmit = this.handleGetSubmit.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }

  componentDidMount(){
    fetchReq('/api/fetchDB').then(data => {
      const pick_data = _.map(data, (item, index) => {
        let obj = {}
        _.forEach(this.fields, (_item, _index) => {
          obj[_item] = item[_item] || ''
        })   
        return obj;
      })

      this.setState(
        { data: pick_data }
      )
    }).catch( err =>  console.log(err) );
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
      body: JSON.stringify({ post: this.state.param })
    })
      .then(response => response.text())
      .then(body => this.setState({ post: body }));
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

        <Table header={this.fields} data={this.state.data}/>
      </div>
    );
  }
}

export default App;
