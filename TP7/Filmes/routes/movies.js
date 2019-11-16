var express = require('express');
var router = express.Router();

var Movies = require('../controllers/movie')
var MovieModel = require('../models/movies')
var fs = require('fs')

router.get('/', function(req, res, next) {
  Movies.listar()
    .then(dados => res.render('index',{lista:dados}))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/movies', function(req, res, next) {
  Movies.listar()
    .then(dados => res.render('index',{lista:dados}))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/movies/apagar.js', function(req, res, next) {
  fs.readFile("./public/javascripts/apagar.js",(erro,data) =>
  {
    if(!erro)
      res.send(data)
    else
      res.render("error",{error: erro})
  })
});

router.get('/movies/ver/caixaG.js', function(req, res, next) {
  fs.readFile("./public/javascripts/caixaG.js",(erro,data) =>
  {
    if(!erro)
      res.send(data)
    else
      res.render("error",{error: erro})
  })
});

router.get('/movies/ver/caixa.js', function(req, res, next) {
  fs.readFile("./public/javascripts/caixa.js",(erro,data) =>
  {
    if(!erro)
      res.send(data)
    else
      res.render("error",{error: erro})
  })
});

router.get('/movies/ver.js', function(req, res, next) {
  console.log("Bugs")
  fs.readFile("./public/javascripts/ver.js",(erro,data) =>
  {
    if(!erro)
      res.send(data)
    else
      res.render("error",{error: erro})
    
   
  })
});
router.get('/movies/ver/:id', function(req, res, next) {  
  console.log(req.params.id)
  Movies.consultar(req.params.id)
    .then(dados => res.render('edit',{movie:dados}))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/movies/:id', function(req, res, next) {
  Movies.consultar(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.delete('/:id',function(req, res, next) {
  Movies.apagar(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.post('/',function(req, res, next) {
  var movie = new MovieModel(req.body)
  Movies.inserir(movie)
  res.redirect('/movies')
});

router.post('/edit/:id',function(req, res, next) {
  console.log(req.params.id)
  console.log(req.body)
  Movies.atualizar(req.params.id,req.body)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
  res.redirect('/movies')
});

router.put('/:id',function(req, res, next) {
  var movie = new FilmeModel(req.body)
  console.log(movie)
  Movies.atualizar(req.params.id,req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
