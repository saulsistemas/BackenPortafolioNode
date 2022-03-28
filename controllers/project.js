var Project = require('../models/project');
var controller ={
    home: function(request, response){
        return response.status(200).send({
            message:'Hola desde home',
        });
    },
    test: function(request, response){
        return response.status(200).send({
            message:'Hola soy test',
        });
    },

    saveProject: function(request,response){
        var project = new Project();
        var params = request.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save(function(error,projectStored){
            if (error) return response.status(500).send({message:'error al guardar'})
            if(!projectStored) return response.status(404).send({message:'no se ha podido guardar el dodcumento'})

            return response.status(200).send({project:projectStored})
        });
        //return response.status(200).send({
        //    project:project,
        //    message:'metodo save project',
        //})
    },
}

module.exports = controller;