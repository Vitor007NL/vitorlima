const registration = require('../bancoDeDados/schema')
class LogController {
  async logPost(req, res) {
    try {
      const usuario = req.body.usuario
      const senha = req.body.senha
      const searchusuario = await registration.findOne({
        usuario: usuario,
        senha: senha,
      })

      if (!searchusuario) {
        return res.render('logError')
      } else {
        req.session.usuario = usuario

        return res.render('logCorrect', { usuario: usuario })
      }
    } catch (error) {
      return res.send(error)
    }
  }

  async pageIni(req, res) {
    try {
      return res.render('index')
    } catch (error) {
      return res.send(error)
    }
  }
}

module.exports = new LogController()
