import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import _ from 'lodash';
import VgChart from '../VgChart';
import Dashboard from '../Dashboard';

import '../../styles/App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className="banner">
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-transperent px-3">
              <NavLink className="navbar-brand" to="/chart"><h2>Welcome</h2></NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <NavLink to="/chart" activeClassName="App-link">Chart</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/dashboard" activeClassName="App-link">Dashboard</NavLink>
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
              <h1 className="display-4">Website Slogan</h1>
            </div>
          </div>
        </section>

        <main>
          <Switch>
            <Route exact path="/chart">
              <VgChart />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Redirect to="/chart" />
            </Route>
          </Switch>
        </main>

      </div>
    );
  }
}