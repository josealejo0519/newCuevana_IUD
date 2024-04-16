const express = require('express')
const { mongoConnection } = require('./databases/config')
const dotenv = require('dotenv').config()
const app  = express()

mongoConnection()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
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