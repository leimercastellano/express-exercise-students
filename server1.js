//initialize npm
//npm init -y

//Install dependencies 
//npm install express

//Install nodemon
//npm install --save-dev nodemon


const express = require('express');
const app = express();
//* en get pilla todos los endpoint
app.get('*',function(require, response){
response.status(200);
response.send("Dein localhost ist 127.0.0.1");
});

app.listen(3000)