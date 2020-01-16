var Obras = require('../models/obras')

module.exports.listar = () => {
    return Obras.find({},"id titulo tipo compositor").exec()
}

module.exports.consultar = id => {
    return Obras.findOne({id:id}).exec()
}

module.exports.tipos = () => {
    return Obras.find({},"tipo").distinct("tipo").exec()
}

module.exports.compositor = nome =>{
    return Obras.find({compositor:nome}).exec()
}

module.exports.instrumento = nome =>{
    return Obras.find({"instrumentos.designacao" : nome }).exec()
}

module.exports.obrasQuant = () =>{
    return Obras
    .aggregate([{$project:{id:"$id",titulo: "$titulo", partituras : "$instrumentos"}},{$unwind: "$partituras"},{$group: "$id"}])
    .exec();
}
