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
    },

    getProject:function(request,response){
        var projectId = request.params.id;
       
        console.log(projectId);
        if (projectId == null || projectId =='') return response.status(404).send({message:'id no existe'}); 

        Project.findById(projectId,function(error,project){
            if (error) return response.status(500).send({message:'error al devolver dato'})
            if(!project) return response.status(404).send({message:'no se ha podido buscar el dodcumento'})

            return response.status(200).send({
                project,
            })
        });
        
    }
}

module.exports = controller;