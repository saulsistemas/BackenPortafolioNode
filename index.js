var mongoose = require('mongoose');
var app  = require('./app');
var port = 3700;
mongoose.Promise = global.Promise;
//CONEXION A BASE DE DATOS
mongoose.connect('mongodb://0.0.0.0:27017/bdbacken')
        .then(()=>{
            console.log('se conecto correctamente');
            //creacion del servidor
            app.listen(port,function(){
                console.log('creacion de servidor satisfactoriamente en localhosto s');
            })
        })
        .catch(err=>{
            console.log(err)
        })