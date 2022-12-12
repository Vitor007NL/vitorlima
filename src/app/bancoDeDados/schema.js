const mongoose = require('mongoose')

const registro = new mongoose.Schema({
  usuario: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
})

const registros = mongoose.model('registro', registro)

module.exports = registros
