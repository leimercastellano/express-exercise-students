var numPeticiones = 0

const express = require('express')

const app = express()

// Middleware absurdo que nos enriquece el objeto REquest con el numero de peticiones a nuestro servidor 
app.use((req, res, next) => {
  numPeticiones++
  req.numPeticiones = numPeticiones
  next()
})

app.use((req, res, next)=> {
  console.log("He recbidio una petición a " + req.url)
  next()
})

// Necesito la funcionalidad que permite hacer GET a los recursos ubicados en la carpeta 'server-6-static-files'.
app.use(express.static('server-6-static-files'));

// Necesito la funcionalidad que permite 'parsear' la información de los métodos POST codificados con url-encoded
app.use(express.urlencoded({ extended: false }))

app.get('/formulario', (req, res) => {
  console.log('Numero peticiones: ', req.numPeticiones)
    res.status(200).send(`
    <html>
    <head>
    <link rel="stylesheet" href="estilos.css">
    </head>
    <body>
    <form class="form" method="POST" action="/formulario">
    <label for="name" class="label-name">Name</label>
    <input type="text" id="name" name="name" maxlength="40" class="field field-name" />
  
    <label for="email" class="label-email">Email Address</label>
    <input type="email" id="email" name="email" maxlength="40" class="field field-email" />
  
    <label for="message" class="label-message">Message</label>
    <textarea id="message" name="message" cols="30" rows="5" maxlength="400" class="field field-message"></textarea>
  
    <input type="submit" value="Send Message" class="button" />
  </form>
  </body>
    </html>
  `)
})

app.post('/formulario', (req, res)=> {
  console.log(req.body)
    res.send((req.body))
})

app.use((req, res) => {
    res.status(404).send('Recurso no encontrado...')
})

app.listen(3000)
  