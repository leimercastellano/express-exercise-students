const express = require('express');
const path = require('path');
const app = express();

//app.use(express.urlencoded({ extended: false }));

app.get('/nacktschnecke', (req, res) => {
    // Express require una ruta absoluta al recurso que quieres enviar al cliente. Mirar console.log(ruta). 
    //Para solucionar el  problema de direccion de ficheros
    const ruta = path.join(__dirname , 'server3-files','nacktschnecke.html')
    res.sendFile(ruta)
})


app.get('/about', (req, res) => {
    // Express require una ruta absoluta al recurso que quieres enviar al cliente. Mirar console.log(ruta). 
    //Para solucionar el  problema de direccion de ficheros
    const ruta = path.join(__dirname , 'server3-files','about.html')
    res.sendFile(ruta)
})

app.use(function (require, response) {
    response.status(404).send("Error 404, File not found");
})

app.listen(3000);



