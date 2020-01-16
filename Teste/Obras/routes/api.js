var express = require('express');
var router = express.Router();

var Obras = require('../controllers/obras')

/* GET users listing. */
router.get('/obras', function(req, res, next) {
  console.log(req.query.year)
  if(req.query.compositor!=undefined && req.query.instrumento==undefined){
    Obras.compositor(req.query.compositor)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.compositor==undefined && req.query.instrumento!=undefined){
    Obras.instrumento(req.query.instrumento)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else{
    Obras.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
});

router.get('/obras/:id', function(req, res, next) {
  Obras.consultar(req.params.id)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

router.get('/tipos', function(req, res, next) {
  Obras.tipos()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

router.get('/obrasQuant', function(req, res, next) {
  Obras.obrasQuant()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router