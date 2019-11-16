var Premio = require('../models/premios')

module.exports.listar = () => {
    return Premio.find().exec()
}

module.exports.consultar = id => {
    return Premio.findOne({_id:id}).exec()
}

module.exports.categorias = () => {
    return Premio.distinct("category").exec()
}

module.exports.categoria = nome =>{
    return Premio.find({category:nome}).exec()
}

module.exports.catyear = (nome,ano) =>{
    return Premio.find({category:nome,year:{$gt:ano}}).exec()
}

module.exports.laureados = () =>{
    return Premio
    .aggregate([{$unwind:"$laureates"},
    {$project:{name: {$concat:["$laureates.firstname"," ","$laureates.surname"]},premio:{year:"$year",category:"$category"}}},
    {$group:{_id:"$name",premios:{$push:"$premio"}}},
    {$sort:{_id:1}}])
    .exec();
}
