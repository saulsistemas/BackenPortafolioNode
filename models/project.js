 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var ProjectSchema = Schema({
     name:String,
     description:String,
     category:String,
     year:Number,
     langs:String,
     image:String,
 });
//lo pone en ninuscula y le agrega la s
 module.exports = mongoose.model('Project',ProjectSchema)