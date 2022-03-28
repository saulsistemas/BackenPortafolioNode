var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//CARGAR ARCHIVO RUTAS
var project_routes = require('./routes/project')
//MIDELWARES
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
//CORDS

//RUTAS
app.use('/api',project_routes);

//EXPORTAR
module.exports = app;