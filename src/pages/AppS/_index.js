import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import CallAPI from '../../components/callAPI';
import logo from '../../assets/img/logo.svg';
import '../../styles/app.scss';

class AppS extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className="bannerS">
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-transperent px-3">
              <NavLink className="navbar-brand" to="/s/home"><h2>Welcome</h2></NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <NavLink to="/s/home" activeClassName="App-link">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/s/apis" activeClassName="App-link">APIs</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/home" activeClassName="App-link">
                      <div className="fa fa-home"></div>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </header>

          <div className="row">
            <div className="col-md-6 px-3 text-primary text-right">
              <h1 className="display-4">Secured Website Slogan</h1>
            </div>
          </div>
        </section>

        <main>
          <Switch>
            <Route path="/s/home">
              <Home />
            </Route>
            <Route path="/s/apis">
              <CallAPI />
            </Route>
            <Route path="/s">
              <Redirect to='/s/home' />
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
      <header className="App-header">
        <div className="spinner"></div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default AppS;