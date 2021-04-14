  const express = require('express')
const app = express()

app.get('/about', (req, res) => res.download('server3-files/about.html'))
app.listen(3000, () => console.log('Server ready')) 