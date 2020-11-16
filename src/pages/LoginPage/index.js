import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { setToken, fetchReq } from '../../utils/utils';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.email = React.createRef();
        this.password = React.createRef();

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin = () => {
        const email = this.email;
        const pwd = this.password;

        fetchReq('/api/login', {
            body: JSON.stringify({
                email: email.current.value || 'admin',
                password: pwd.current.value || '123456'
            })
        }).then(data => {
            setToken(data.token);
            this.props.history.replace("/s/home");
        }).catch(msg =>
            alert(msg)
        )
    };

    render() {
        return (
            <div>
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                    <div className="card-body">
                                        {/* <form onSubmit={this.handleLogin}> */}
                                            <div className="form-group">
                                                <label className="small mb-1">Email</label>
                                                <input className="form-control py-4" ref={this.email} type="email" placeholder="Enter email address" />
                                            </div>
                                            <div className="form-group">
                                                <label className="small mb-1">Password</label>
                                                <input className="form-control py-4" ref={this.password} type="password" placeholder="Enter password" />
                                            </div>
                                            <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <Link className="small" to="/forgot-password">Forgot Password?</Link>
                                                <button onClick={this.handleLogin} className="btn btn-primary">Log in</button>
                                            </div>
                                        {/* </form> */}
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
        );
    }
}

export default withRouter(LoginPage)