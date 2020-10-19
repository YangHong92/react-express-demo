import React, { Component } from 'react';
import { fetchReq } from '../utils/utils';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
        this.email = React.createRef()
        this.password = React.createRef()

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(e) {
        const { loginCallback } = this.props;

        e.preventDefault();

        const email = this.email;
        const pwd = this.password;

        fetchReq('/api/login', {
            body: JSON.stringify({
                email: email.current.value,
                password: pwd.current.value
            })
        }).then(data => {
            loginCallback(data);
        }).catch(msg => {
            alert(msg);
        });
    }

    render() {
        const { confirmButtonText } = this.props;

        return (
            <form className="">
                <div className="form-group ">
                    <label>Email</label>
                    <input type="email" className="form-control" ref={this.email} placeholder="email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" ref={this.password} placeholder="*******" />
                </div>
                <div>
                    <Link to ="/forgot-password">Forgot Password?</Link>
                </div>
                <div style={{maxWidth: 'inherit'}} className="btn" onClick={this.handleLogin}> {confirmButtonText} </div>
            </form>
        )
    }
}