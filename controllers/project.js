var Project = require('../models/project');
var fs = require('fs');
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
        
    },

    getProjects:function(request,response){
        Project.find({}).sort('id').exec(function(error,projects){
            if(error) return response.status(500).send({message:'error al devolver los datoss'});
            if(!projects) return response.status(404).send({message:'no hay proyector para mostrar'});
            return response.status(200).send({projects});
        });
    },

    updateProject:function(request,response){
        var projectId = request.params.id;
        var update = request.body;

        Project.findByIdAndUpdate(projectId,update,{new:true},(error,projectUpadate)=>{
            if(error) return response.status(500).send({message:'error al actualizar'});
            if(!projectUpadate) return response.status(404).send({message:'no existe el proyecto para actualizar'});

            return response.status(200).send({project:projectUpadate});
        });

    },

    deleteProject:function(request,response){
        var projectId = request.params.id;
        Project.findByIdAndRemove(projectId,(error, projectRemoved)=>{
            if(error) return response.status(500).send({message:'error al devolver los datos'});
            if(!projectRemoved) return response.status(404).send({message:'no hay proyector para eliminar'});
            return response.status(200).send({
                project:projectRemoved,
            })
        })
    },

    uploadImage:function(request,response){
        var projectId = request.params.id;
        var filName = 'Imagen no subida';
        
        if (request.files) {
            var filePath = request.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1]
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];

            if (fileExt == 'png' || fileExt == 'jpg'|| fileExt == 'jpeg'|| fileExt == 'gif') {
                Project.findByIdAndUpdate(projectId,{image:fileName},{new:true},(error,projectUpadate)=>{
                    if(error) return response.status(500).send({message:'error al actualizar imagen'});
                    if(!projectUpadate) return response.status(404).send({message:'no existe el proyecto para actualizar'});
        
                    return response.status(200).send({files:projectUpadate});
                })
            }else{
                fs.unlink(filePath,function(error){
                    return response.status(200).send({ message:'la extension no es valida'})
                });
            }
            
            
            
        }
    }
}

module.exports = controller;