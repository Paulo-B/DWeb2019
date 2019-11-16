var express = require('express');
var router = express.Router();

var Premios = require('../controllers/premios')

/* GET users listing. */
router.get('/premios', function(req, res, next) {
  console.log(req.query.year)
  if(req.query.categoria!=undefined && req.query.year==undefined){
    Premios.categoria(req.query.categoria)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.categoria!=undefined && req.query.year!=undefined){
    Premios.catyear(req.query.categoria,req.query.year)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else{
    Premios.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
});

router.get('/premios/:idPremio', function(req, res, next) {
  Premios.consultar(req.params.idPremio)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

router.get('/categorias', function(req, res, next) {
  Premios.categorias()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

router.get('/laureados', function(req, res, next) {
  Premios.laureados()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router