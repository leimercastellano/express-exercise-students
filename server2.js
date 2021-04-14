const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended:false}));

app.get('/mensaje', function(require, response){
    response.status(200);
    response.send("The server is running");
})

app.use(function(require, response){
    response.status(404).send("Error 404, File not found");
})

app.listen(3000);
