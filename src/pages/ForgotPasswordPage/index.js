import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchReq } from '../../utils/utils';

export default class ForgotPasswordPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
         
        }
        this.email = React.createRef();

        this.forgotPassword = this.forgotPassword.bind(this);
    }

    forgotPassword(e){
        e.preventDefault();

        const email = this.email;

        fetchReq('/api/forgotPassword', {
            body: JSON.stringify({
                email: email.current.value
            })
        }).then(data => {
            alert(data);
        }).catch(msg => {
            alert(msg);
        });
    }

    render() {
        return (
            <div>
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Password Recovery</h3></div>
                                    <div className="card-body">
                                        <div className="small mb-3 text-muted">Enter your email address and we will send you a link to reset your password.</div>
                                        <form onSubmit={this.forgotPassword}>
                                            <div className="form-group">
                                                <label className="small mb-1">Email</label>
                                                <input className="form-control py-4" id="inputEmailAddress" 
                                                        type="email" aria-describedby="emailHelp" placeholder="Enter email address"
                                                        ref={this.email} required />
                                            </div>
                                            <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <Link className="small" to="/login">Return to login</Link>
                                                <button type="submit" className="btn btn-primary">Reset Password</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center">
                                        <div className="small"><Link to="/register">Need an account? Sign up!</Link></div>
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