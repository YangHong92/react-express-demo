import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SideNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <NavLink className="nav-link" to="/s/home">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Dashboard
                            </NavLink>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Server Side
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <NavLink className="nav-link" to="/s/apis">APIs</NavLink>
                                </nav>
                            </div>

                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <NavLink className="nav-link" to="/login">Login</NavLink>
                                            <NavLink className="nav-link" to="/register">Register</NavLink>
                                            <NavLink className="nav-link" to="/forgot-password">Forgot Password</NavLink>
                                            <NavLink className="nav-link" to="/reset-password">Reset Password</NavLink>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Addons</div>
                            <NavLink className="nav-link" to="/s/progress-step">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Progress Step
                            </NavLink>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                            User
                    </div>
                </nav>
            </div>
        );
    }
}