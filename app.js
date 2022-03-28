var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//CARGAR ARCHIVO RUTAS
var project_routes = require('./routes/project')
//MIDELWARES
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
//CORDS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//RUTAS
app.use('/api',project_routes);

//EXPORTAR
module.exports = app;