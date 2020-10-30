import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect, useHistory, useLocation } from "react-router-dom";
import { getToken } from './utils/utils';
import AppS from './pages/AppS';
import App from './pages/App';
import LoginPage from './pages/LoginPage';

import * as serviceWorker from './serviceWorker';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>  
        <PrivateRoute path="/s">
          <AppS />
        </PrivateRoute>
        <Route path="/">
          <App />
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
