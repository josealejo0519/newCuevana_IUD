const express = require('express')
const { mongoConnection } = require('./databases/config')
const generos = require('./routes/generoRoute')
const dotenv = require('dotenv').config()
const app  = express()
const cors = require('cors')

mongoConnection()

app.use(
    cors({
        origin: '*'
    })
)

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use('/api/v1/generos', generos)

app.get('/Hola', (req, res) => {
    return res.json({
        msj: 'Bienvenido, la conexión es correcta'
    })
})

app.get("*", (req, res) => {
    return res.status(404).json({
        msj: 'Puerto no encontrado',
        Status: 404
    })
})

module.exports = app