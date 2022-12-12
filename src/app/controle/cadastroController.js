const registration = require('../bancoDeDados/schema')

class registrationController {
  async createRegistration(req, res) {
    const usuario = req.body.usuario
    try {
      const reqBody = req.body

      if (reqBody.senha == reqBody.confirm) {
        req.session.usuario = usuario
        await registration.create(reqBody)

        return res.render('logCorrect', { usuario: usuario })
      }
    } catch (error) {
      return res.send(error)
    }
  }
  async pageIni(req, res) {
    return res.render('registration')
  }
}

module.exports = new registrationController()
