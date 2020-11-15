import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import { fetchReq } from '../../utils/utils';
import Table from '../../components/table';
import LogoutButton from '../LogoutButton';
import _ from 'lodash';

import logo from '../../assets/img/logo.svg';
import '../../styles/App.scss';

class AppS extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section className="bannerS">
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-transperent px-3">
              <NavLink className="navbar-brand" to="/s/home"><h2>Welcome</h2></NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <NavLink to="/s/home" activeClassName="App-link">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/s/apis" activeClassName="App-link">APIs</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/home" activeClassName="App-link">
                      <div className="fa fa-home"></div>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </header>

          <div className="row">
            <div className="col-md-6 px-3 text-primary text-right">
              <h1 className="display-4">Secured Website Slogan</h1>
            </div>
          </div>
        </section>

        <main>
          <Switch>
            <Route path="/s/home">
              <Home />
            </Route>
            <Route path="/s/apis">
              <APIS />
            </Route>
            <Route path="/s">
              <Redirect to='/s/home' />
            </Route>
          </Switch>
        </main>

      </div>
    );
  }
}


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="spinner"></div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

class APIS extends Component {
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
        <LogoutButton />
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

export default AppS;
