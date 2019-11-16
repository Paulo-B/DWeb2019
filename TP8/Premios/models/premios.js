var mongoose = require('mongoose')

var laureatesSchema = new mongoose.Schema({
    id: Number,
    firstname: String,
    surname: String,
    motivation: String,
    share: Number
})

var premioSchema = new mongoose.Schema({
    year:String,
    category:String,
    overallMotivation:String,
    notas:[laureatesSchema]
})

module.exports = mongoose.model('premios',premioSchema) 