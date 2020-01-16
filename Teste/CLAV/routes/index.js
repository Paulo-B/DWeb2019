var express = require('express');
var router = express.Router();

var axios = require('axios');

var ultimo1;
var ultimo2;

router.get('/', function(req, res, next) {
  if (ultimo1!=req.url){
    ultimo2=ultimo1;
    ultimo1=req.url;
  }

  axios.get('http://clav-api.dglab.gov.pt/api/entidades?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
  .then(dados=>{
    res.render('index',{entt:dados.data})
  })
  .catch(erro=>{
    res.render('error',{error:erro});
  })
});

router.get('/entidade/:id', function(req, res, next) {

  if (ultimo1!=req.url){
    ultimo2=ultimo1;
    ultimo1=req.url;
  }

  var id = req.params.id;
  axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+id+'?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
  .then(dados=>{
    var info=dados.data;
    axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+id+'/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
    .then(dados=>{

      var tipologias=dados.data;
      axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+id+'/intervencao/dono?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(dados=>{
        
        var dona = dados.data;
        axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+id+'/intervencao/participante?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
        .then(dados=>{
          var participante = dados.data;
          res.render('entidade',{entt:info,tipo:tipologias,don:dona,part:participante})
        })
        .catch(erro=>{
          res.render('error',{error:erro});
        })

      })
      .catch(erro=>{
        res.render('error',{error:erro});
      })
    
    })
    .catch(erro=>{
      res.render('error',{error:erro});
    })
  })
  .catch(erro=>{
    res.render('error',{error:erro});
  })
});

router.get('/tipologia/:id', function(req, res, next) {

  if (ultimo1!=req.url){
    ultimo2=ultimo1;
    ultimo1=req.url;
  }

  var id = req.params.id;


  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/'+id+'?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
  .then(dados=>{
    res.render('tipologia',{tipo:dados.data,ult:ultimo2})
  })
  .catch(erro=>{
    res.render('error',{error:erro});
  })
});

module.exports = router;
