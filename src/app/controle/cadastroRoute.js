const express = require('express')
const router = express.Router()
const registrarController = require('./cadastroControle')

router
  .get('/registrar.ejs', registrarController.pageIni)
  .post('/registrar.ejs', registrarController.createregistrar)

module.exports = router
