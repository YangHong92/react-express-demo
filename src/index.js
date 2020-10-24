import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect, useHistory, useLocation } from "react-router-dom";
import { getToken, setToken, fetchReq } from './utils/utils';
import App from './App';
import Home from './pages/Home';

import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/s">
          <App />
        </PrivateRoute>
        {/* fallback route */}
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={(location) => getToken() != null
        ? children
        : <Redirect to={{ pathname: '/login' }} />}
    />
  )
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let handleLogin = () => {
    fetchReq('/api/login', {
      body: JSON.stringify({
        email: 'admin',
        password: '123456'
      })
    }).then(data => {
      setToken(data.token);
      history.replace("/s/home");
    }).catch(msg =>
      alert(msg)
    )
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
