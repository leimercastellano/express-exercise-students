const utils = require('./utils/palindrome/index');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('server-6-static-files'));
app.get('/check', function (request, response) {
   
    const palabra = request.query.palabra;
    var mens;

    if (!palabra) {
        return response.status(500).send('No has proporcionado los parámetros de la querystring necesarios.')
    }

    if (utils.palindrome(palabra)) {
        mens = "Is Palindrome"
    } else {
        mens = "Not is Palindrome";
    }

    return response.send(mens);
})

app.use(function (request, response) {
    response.status(404);
    response.send("Error 404, File not Found");
});

app.listen(3000)