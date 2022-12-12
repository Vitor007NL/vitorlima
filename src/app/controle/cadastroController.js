const registrar = require('../bancoDeDados/schema')

class registrarController {
  async createregistrar(req, res) {
    const usuario = req.body.usuario
    try {
      const reqBody = req.body

      if (reqBody.senha == reqBody.confirm) {
        req.session.usuario = usuario
        await registrar.create(reqBody)

        return res.render('loginCorreto', { usuario: usuario })
      }
    } catch (error) {
      return res.send(error)
    }
  }
  async pageIni(req, res) {
    return res.render('registrar')
  }
}

module.exports = new registrarController()
