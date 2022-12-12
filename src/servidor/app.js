const express = require('express')
const path = require('path')
const routes = require('../app/controle/indexRoute')
const session = require('express-session')
const bodyParser = require('body-parser')
require('./server')

const app = express()
app.use(express.json())

app.use(
  session({
    secret: 'vitorguilherme',
    resave: true,
    saveUninitialized: true,
  })
)

app.use(bodyParser.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, '../html'))
app.set('view engine', 'ejs')
app.use(express.static('public'))

routes(app)

module.exports = app
