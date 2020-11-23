import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import { fetchReq } from '../../utils/utils';

import _ from 'lodash';
import LogoutButton from '../LogoutButton';
import Chart from '../Chart';
import SideNav from '../../components/SideNav'
import ProgressStep from '../../components/progressStep';

import '../../styles/apps.scss';

class AppS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidebar: true
    }

    this.sidebarToggle = this.sidebarToggle.bind(this);
  }

  sidebarToggle() {
    const { showSidebar } = this.state;
    this.setState({
      showSidebar: !showSidebar
    })
  }

  render() {
    const { showSidebar } = this.state;

    return (
      <div className={showSidebar ? "sb-nav-fixed" : "sb-sidenav-toggled sb-nav-fixed"} >
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">Logo</Link>
          <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" onClick={this.sidebarToggle}><i className="fas fa-bars"></i></button>
          <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div className="input-group">
              <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
              </div>
            </div>
          </form>

          <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <a className="dropdown-item" href="#">Settings</a>
                <div className="dropdown-divider"></div>
                <LogoutButton className="dropdown-item" />
              </div>
            </li>
          </ul>
        </nav>

        <div id="layoutSidenav">
          <SideNav />
          <div id="layoutSidenav_content">
            <main>
              <Switch>
                <Route path="/s/home">
                  <Chart />
                </Route>
                <Route path="/s/apis">

                </Route>
                <Route path="/s/progress-step">
                  <ProgressStep />
                </Route>
                <Route path="/s">
                  <Redirect to='/s/home' />
                </Route>
              </Switch>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default AppS;