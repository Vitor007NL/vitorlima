const express = require('express')
const LogController = require('./loginControle')
const router = express.Router()

router.get('/', LogController.pageIni).post('/', LogController.logPost)

module.exports = router
