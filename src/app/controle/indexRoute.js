const login = require('./logarRoute')
const registration = require('./cadastroRoute')

const routes = (app) => {
  app.use(login)
  app.use(registration)
}

module.exports = routes
