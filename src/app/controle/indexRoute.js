const login = require('./logarRoute')
const registrar = require('./cadastroRoute')

const routes = (app) => {
  app.use(login)
  app.use(registrar)
}

module.exports = routes
