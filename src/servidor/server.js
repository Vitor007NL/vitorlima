const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()

const porta = 3000
const db = mongoose.connection

mongoose.connect(process.env.DB_CONNECTION)

app.listen(porta, () => {
  console.log(`O servidor esta rodando na porta: ${porta}!`)
})

module.exports = db