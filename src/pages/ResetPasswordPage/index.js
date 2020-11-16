import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchReq } from '../../utils/utils';

class ResetPasswordPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: props.match.params.token,
            email: '',
            role: null,
            password: ''
        }

        this.updatePassword = this.updatePassword.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        const { token } = this.state;

        const url = `/api/resetPassword/${token}`
        fetchReq(url).then(data => {
            this.setState({
                email: data.account_name,
                role: data.permission_role
            })
        }).catch(msg => {
            alert(msg);
        });
    }

    handleInputChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    updatePassword(e) {
        e.preventDefault();

        const { email, password } = this.state;

        fetchReq('/api/updatePassword', {
            body: JSON.stringify({
                email,
                password
            })
        }).then(data => {
            alert(data);

            this.props.history.replace('/login');
        }).catch(msg => {
            alert(msg);
        });
    }

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Update Password</h3></div>
                                    <div className="card-body">
                                        <div className="small mb-3 text-muted">Enter your new password.</div>
                                        <form onSubmit={this.updatePassword}>
                                            <div className="form-group">
                                                <label className="small mb-1">Email</label>
                                                <label className="form-control py-4"> {email} </label>
                                            </div>
                                            <div className="form-group">
                                                <label className="small mb-1">New Password</label>
                                                <input className="form-control py-4" type="password" placeholder="Enter new password"
                                                        value={password} onChange={(e) => this.handleInputChange(e, 'password')} required />
                                            </div>
                                            <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <Link className="small" to="/login">Return to login</Link>
                                                <button type="submit" className="btn btn-primary">Update Password</button>
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

export default withRouter(ResetPasswordPage)