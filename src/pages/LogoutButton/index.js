import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { removeToken, fetchReq } from '../../utils/utils';

class LogoutButton extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout = (e) => {
    e.preventDefault();

    fetchReq('/api/logout')
      .then(data => {
        removeToken();
        this.props.history.push('/login')
      }).catch(msg =>
        alert(msg)
      )
  }

  render() {
    const props = this.props
    
    return (
      <button className={props.className} onClick={this.handleLogout}>
        Logout
      </button>
    )
  }
}

export default withRouter(LogoutButton)