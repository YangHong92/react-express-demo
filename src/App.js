import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  NavLink, useHistory, useLocation
} from 'react-router-dom';
import { getToken, setToken, removeToken, fetchReq, fetchStream } from './utils/utils';
import logo from './logo.svg';
import Table from './components/table';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav>
          <NavLink to="/home" activeClassName="App-link">Home</NavLink>
          <br></br>
          <NavLink to="/about" activeClassName="App-link">About</NavLink>
        </nav>

        <Switch>
          {/* If URL is /about, this route is rendered
              while the rest are ignored */}
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/about">
            <About />
          </PrivateRoute>
          {/* fallback route */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

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
      history.replace("/home");
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

function LogoutPage() {
  let history = useHistory();
  
  let handleLogout = (e) => {
    e.preventDefault();

    fetchReq('/api/logout')
      .then(data => {
        removeToken();
        history.push('/login')
      }).catch(msg =>
        alert(msg)
      )
  }
  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  )
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: '',
      get: '',
      name: '',
      param: '',
      data: [],
      selectedFile: null,
      fileName: null
    };

    this.columns = [
      {
        Header: 'Amount',
        // accessor is the "key" in the data
        accessor: 'amount',
        sortable: true
      },
      {
        Header: 'transaction ID',
        accessor: 'transaction_id',
      },
      {
        Header: 'Transaction Type',
        accessor: 'transaction_type',
      }
    ]

    this.handleGetSubmit = this.handleGetSubmit.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.singleFileUploadHandler = this.singleFileUploadHandler.bind(this);
    this.singleFileDownloadHandler = this.singleFileDownloadHandler.bind(this);
  }

  componentDidMount() {
    fetchReq('/api/fetchDB').then(data => {
      return _.map(data, (item, index) => {
        let obj = {}
        _.forEach(this.columns, (_item, _index) => {
          obj[_item.accessor] = item[_item.accessor] || ''
        })
        return obj;
      })
    })
      .then(data => {
        this.setState(
          { data }
        )
      })
      .catch(err => alert(err));
  }

  handleGetSubmit(event) {
    event.preventDefault();
    fetch(`/api/get?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(body => this.setState({ get: body.get }));
  }

  handlePostSubmit = (event) => {
    event.preventDefault();

    fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.param })
    })
      .then(response => response.text())
      .then(body => this.setState({ post: body }));
  }

  singleFileUploadHandler = () => {
    if (this.state.selectedFile) {
      const data = new FormData();

      data.append('username', 'abc123');

      // the name for file must be 'file' to match multer.single('file')
      data.append('file', this.state.selectedFile, this.state.selectedFile.name);

      const option = {
        // overwrite header to avoid default setting 'Content-Type': 'application/json' 
        // in file submit, Content-Type: multipart/form-data; 
        headers: {
          'accept': 'application/json'
        },
        body: data
      }
      fetchReq('/api/file/upload', option)
        .then(fileName => { this.setState(fileName) })
        .catch(err => alert(err));
    }
  }

  singleFileDownloadHandler = () => {
    if (this.state.fileName) {
      const option = {
        method: 'GET'
      }
      // fetchStream(`/api/file/${this.state.fileName}`, option)
      //   .then(blob => {
      //     const url = window.URL.createObjectURL(new Blob([blob]));
      //     const link = document.createElement('a');
      //     link.href = url;
      //     link.setAttribute('download', `sample.${this.state.fileName}`);
      //     document.body.appendChild(link);
      //     link.click();
      //     link.parentNode.removeChild(link);
      //   })
      //   .catch(err => alert(err));
    }
  }

  render() {
    return (
      <div>
        <LogoutPage />
        <form onSubmit={this.handleGetSubmit}>
          <label htmlFor="name">Test GET Request: </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.get}</p>


        <form onSubmit={this.handlePostSubmit}>
          <label htmlFor="name">Test POST Request: </label>
          <input
            type="text"
            value={this.state.param}
            onChange={e => this.setState({ param: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.post}</p>

        <Table columns={this.columns} data={this.state.data} />

        <input
          type="file"
          onChange={e => this.setState({ selectedFile: e.target.files[0] })}
        />
        <button onClick={this.singleFileUploadHandler}>Upload File</button>

        {
          this.state.fileName !== null ?
            <div>
              <p>uploaded {this.state.fileName}</p>
              <button onClick={this.singleFileDownloadHandler}>Download File</button>
            </div>
            : null
        }
      </div>
    );
  }
}

export default App;
