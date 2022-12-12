const express = require('express')
const router = express.Router()
const registrarController = require('./cadastroController')

router
  .get('/registrar.ejs', registrarController.pageIni)
  .post('/registrar.ejs', registrarController.createregistrar)

module.exports = router
