const express = require('express')
const router = express.Router()
const registrationController = require('./cadastroController')

router
  .get('/registration.ejs', registrationController.pageIni)
  .post('/registration.ejs', registrationController.createRegistration)

module.exports = router
