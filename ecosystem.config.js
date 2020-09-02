module.exports = {
    apps: [{
      name: "react-express-mysql-demo",
      script: "./nodeApp.js",
      env: {
        NODE_ENV: "dev"
      },
      env_production: {
        NODE_ENV: "prod",
      }
    }]
  }
  