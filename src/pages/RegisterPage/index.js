import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { setToken, fetchReq } from '../../utils/utils';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showError: false
        }

        this.allFields = ['firstname', 'lastname', 'email', 'password', 'confirmPassword'];

        this.createRefByField(this.allFields);

        this.handleRegister = this.handleRegister.bind(this);

    }

    createRefByField(field) {
        _.forEach(field, (item, index) => {
            this[item] = React.createRef()
        });
    }

    handleRegister(e) {
        e.preventDefault();

        const firstname = this.firstname;
        const lastname = this.lastname;
        const email = this.email;
        const password = this.password;
        const confirmPassword = this.confirmPassword;

        if (this.validate(password, confirmPassword)) {
            fetchReq('/api/signup', {
                body: JSON.stringify({
                    firstname: firstname.current.value,
                    lastname: lastname.current.value,
                    email: email.current.value,
                    password: password.current.value,
                    role: 'expert'
                })
            }).then(data => {
                setToken(data.token);
                this.props.history.replace("/s/home");
            }).catch(msg => {
                alert(msg);
            });
        } else {

        }
    }

    validate(p, cP) {
        let isValid = true;

        if (typeof p.current.value !== "undefined" && typeof cP.current.value !== "undefined") {
            if (p.current.value != cP.current.value) {
                isValid = false;
            }
        }

        this.setState({
            showError: !isValid
        });

        return isValid;
    }

    render() {
        const { showError } = this.state;
        return (
            <div>
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                                    <div className="card-body">
                                        <form onSubmit={this.handleRegister}>
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="small mb-1">First Name</label>
                                                        <input className="form-control py-4" ref={this.firstname} required type="text" placeholder="Enter first name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="small mb-1">Last Name</label>
                                                        <input className="form-control py-4" ref={this.lastname} required type="text" placeholder="Enter last name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="small mb-1">Email</label>
                                                <input className="form-control py-4" ref={this.email} required type="email" aria-describedby="emailHelp" placeholder="Enter email address" />
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="small mb-1">Password</label>
                                                        <input className="form-control py-4" ref={this.password} required type="password" placeholder="Enter password" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="small mb-1">Confirm Password</label>
                                                        <input className="form-control py-4" ref={this.confirmPassword} required type="password" placeholder="Confirm password" />
                                                        <div className="text-danger" style={showError ? { display: 'block' } : { display: 'none' }}>Passwords don't match.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group mt-4 mb-0">
                                                <button type="submit" className="btn btn-primary btn-block">Create Account</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center">
                                        <div className="small"><Link to="/login">Have an account? Go to login</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}