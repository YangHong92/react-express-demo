import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { useLocation } from "react-router-dom";
import { setToken, fetchReq } from '../../utils/utils';

class LoginPage extends Component {
    constructor(props) {
      super(props);
    }
    
    handleLogin = () => {
      fetchReq('/api/login', {
        body: JSON.stringify({
          email: 'admin',
          password: '123456'
        })
      }).then(data => {
        setToken(data.token);
        this.props.history.replace("/s/home");
      }).catch(msg =>
        alert(msg)
      )
    };
  
    render(){
        // let location = useLocation();
        // let { from } = location.state || { from: { pathname: "/" } };
        // let path = from.pathname

        return (
            <div>
              <p>You must log in to view the page</p>
              <button onClick={this.handleLogin}>Log in</button>
            </div>
          );
    }
}

export default withRouter(LoginPage)