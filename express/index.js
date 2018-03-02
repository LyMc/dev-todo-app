const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './ex4.html')))
app.get('/ex4.js', (req, res) => res.sendFile(path.join(__dirname, './ex4.js')))
app.get('/ex4.css', (req, res) => res.sendFile(path.join(__dirname, './ex4.css')))
app.get('/user', (req, res) => res.send({
  name: 'Victor',
  email: 'victor@locoman.ro'
}))

app.listen(3000, () => console.log('Listening...'))
