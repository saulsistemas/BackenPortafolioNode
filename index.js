var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://0.0.0.0:27017/bdbacken')
        .then(()=>{
            console.log('se conecto correctamente')
        })
        .catch(err=>{
            console.log(err)
        })