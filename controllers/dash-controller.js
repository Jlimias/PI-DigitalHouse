const listaBarbeiro = require('../bd-teste/bd')

const listar = require('../models/dashModels')

const index = (req, res) => {
  let lista = listar.listarProfissionais(listaBarbeiro)
  console.log(lista)
  res.render('dash', {barbeiros: lista});
}

module.exports = { index };