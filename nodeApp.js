const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const apiHandler = require('./server/apiHandler');
const pino = require('express-pino-logger')();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));

// enable bodyParser to parse content type of application/json, 
// otherwise req.body is {}
app.use(bodyParser.json());

app.use(pino);

// use: match url starts with specified path
// "/" match "/api", "/api/get", ...
app.use('/', apiHandler)


if (process.env.NODE_ENV === 'production') {
    console.log('======Production======')
    console.log(`serving static file from: ${__dirname}/build`)
    
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'build')));
    // therefor in prod mode, nodejs handle unrecognized (default) GET HTTP requests
    // as React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
  }

if (process.env.NODE_ENV == 'development') {
    console.log('======Development======')
    console.log('read from .env: FOO = ', process.env.FOO);

    // serve no static files
    // therefore in dev mode, nodejs can only respond to recognized api
}

app.listen(port, () => console.log(`Listening on port ${port}`));