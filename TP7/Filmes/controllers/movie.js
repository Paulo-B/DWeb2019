var Movie = require('../models/movies')

const Movies = module.exports

Movies.listar = () => {
    return Movie
            .find()
            .sort({title:1})
            .exec()
}

Movies.consultar = fid => {
    return Movie.findOne({_id:fid}).exec()
}

Movies.projetar = campos => {
    return Movie.find({},campos).exec()
}

Movies.contar = () => {
    return Movie.countDocuments().exec()
}

Movies.agregar = campo => {
    return Movie.aggregate([{$group_: {_id: "$" + campo, contador: {$sum:1}}},{$sort:{contador:-1}}]).exec()
}

Movies.apagar = fid => {
    return Movie.remove({_id:fid}).exec()
}

Movies.inserir = obj =>{
    return obj.save(function (err, filme) {
        if (err) return console.error(err);
        else
          console.log(filme.title + ' foi gravado com sucesso.')
      });
}

Movies.atualizar = (fid,obj) =>{
    return Movie.findOneAndUpdate({ _id: fid }, {$set:obj}).exec()
}