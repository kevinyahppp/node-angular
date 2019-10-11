'use strict'
var app = require('./app');
var port = process.env.PORT || 3678;

app.listen(3678, function(){
    console.log(`API REST FAVORITOS WORKING ON: http://localhost:${port}`);
    console.log(`Prueba Nodemon`);
});