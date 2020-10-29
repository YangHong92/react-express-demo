import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  NavLink, useHistory, useLocation
} from 'react-router-dom';
import logo from '../../img/logo.svg';
import _ from 'lodash';

import '../../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className="banner">
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-transperent px-3">
              <NavLink className="navbar-brand" to="/home"><h2>Welcome</h2></NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <NavLink to="/home" activeClassName="App-link">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" activeClassName="App-link">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/s" activeClassName="App-link">
                      <div className="fa fa-user-o"></div>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </header>

          <div className="row">
            <div className="col-md-6 px-3 text-primary text-right">
              <h1 className="display-4">Website <br /> Slogan</h1>
            </div>
          </div>
        </section>

        <main>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Redirect to='/home' />
            </Route>
          </Switch>
        </main>

      </div>
    );
  }
}


function Home() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="App">
      <div className="App-header">
        About Page
      </div>
    </div>
  )
}

export default App;
