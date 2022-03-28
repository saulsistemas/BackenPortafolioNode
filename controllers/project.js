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
}

module.exports = controller;