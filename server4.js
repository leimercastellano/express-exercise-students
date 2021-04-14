const utils = require('./utils/palindrome/index');

const express = require('express');
const path = require('path');
const app = express();
app.get('/check/:world', function(request, response){
   var mens;
  if(utils.palindrome(request.params.world)){
      response.status(200);
     mens ="Is a palindrome";
  }else{
      mens ="No is a palindrome";
  }
  response.send(men)
    });
    
app.use(function(request, response){
    response.status(404);
    response.send("Error 404, File not Found");
    });
    
app.listen(3000)