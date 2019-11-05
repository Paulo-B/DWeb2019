var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var fs = require('fs')
var ObjectID = require("bson-objectid");

var myDB = __dirname + "/../arqsonevo.json"
console.log("My database " + myDB)

/* GET home page. */
router.get('/', function(req, res, next) {
  jsonfile.readFile(myDB,(erro,arqson)=>
  {
    if(!erro)
    {
      res.render('index',{lista: arqson})
    }
    else
    {
      res.render('error',{error:erro})
    }
  })
});

router.get('/adicionar', function(req, res, next) {
  res.render('adicionar')
});

router.get('/apagar.js',(req,res,next)=>
{
  fs.readFile('./public/javascripts/apagar.js',(erro,dados)=> 
  {
    if(!erro) res.write(dados)
    else res.render('error',{error: erro})
    res.end()
  })
})

router.get('/updateElem.js',(req,res,next)=>
{
  fs.readFile('./public/javascripts/updateElem.js',(erro,dados)=> 
  {
    if(!erro) res.write(dados)
    else res.render('error',{error: erro})
    res.end()
  })
})


router.get('/ver/:id',function(req,res,next){
  var id = req.params.id
  console.log('id: '+id)
  jsonfile.readFile(myDB, (erro,arqson)=>{
    if(!erro){
      var index = arqson.findIndex(a => a._id.$oid == id)
      if(index > -1){
        var musica = arqson[index]
        console.log(musica)
        res.render('elemento',{elemento: musica})
        
      }
      else {
          console.log('Not Found <- Elemento')
          res.end('1')
      }
  }
  })
})

router.post('/adicionar', function(req,res){
  jsonfile.readFile(myDB, (erro,arqson)=>{
    if(!erro){
      var index = 1
      var id = 0
      while(index > -1)
      {
       id = ObjectID.generate()
        index = arqson.findIndex(a => a._id.$oid  == id)  
      }
      req.body["_id"] = {"$oid" : id}
      arqson.push(req.body)
      jsonfile.writeFile(myDB, arqson,erro=>{
          if(erro) console.log(erro)
          else console.log('Registo gravado com sucesso')
      })
    }
  })
  res.redirect('/adicionar')
})


router.delete('/:id',function(req,res){
  var id = req.params.id
  console.log('ID : ' + id)
  jsonfile.readFile(myDB, (erro,arqson)=>{
    if(!erro){
      var index = arqson.findIndex(a => a._id.$oid == id)
      if(index > -1){
          arqson.splice(index, 1)
          jsonfile.writeFile(myDB, arqson, erro => {
              if(erro) console.log(erro)
              else console.log('BD Updated')
          })
          res.redirect(303,'/')
      }
      else {
          console.log('Cant Remove')
          res.end('1')
      }
  }
  })
})


router.put('/',function(req,res){
  var prov=req.body.uprov
  var local=req.body.ulocal
  var tit=req.body.utit
  var musico=req.body.umusico
  var id = req.body.uid
  jsonfile.readFile(myDB, (erro,arqson)=>{
    if(!erro){
      var index = arqson.findIndex(a => a._id.$oid == id)
      console.log("Index: " +index)
      
      if(index > -1){
          arqson.splice(index, 1)
          var toJson = {"_id": {"$oid" : id},"prov":prov,"local":local,"tit":tit,"musico":musico}
          console.log('toJson:' + toJson)
          arqson.push(toJson)
          jsonfile.writeFile(myDB, arqson, erro => {
              if(erro) console.log(erro)
              else console.log('BD updated.')
          })
          res.redirect(303,'/ver/' + id)
      }
      else {
          console.log('Not Found')
          res.end('1')
      }
  }
  })  

})


module.exports = router;
