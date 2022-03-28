var express = require('express');
var bodyParser = require('body-parser');
const res = require('express/lib/response');
var app = express();

//MIDELWARES
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
//CORDS

//RUTAS
app.get('/',function(request,response){
    response.status(200).send('<h1>Inicio</h1>')
})
app.get('/test',function(request,response){
    response.status(200).send({
        'message':'Hola mundo'
    })
})

//EXPORTAR
module.exports = app;