const {Schema, model} = require('mongoose')
const ProductoraSchema = Schema({
    nombre: {
        type: String,
        unique: [true, 'Nombre debe ser único'],
        required: [true, 'Nombre es requerido'],
        minLength: 1
    },
    estado:{
        type: Boolean,
        default: true,
        required: true
    },
    fechaCreacion: {
        type: Date
    },
    fechaActualizacion: {
        type: Date
    },
    slogan: {
        type: String,
    },
    descripcion: {
        type: String,
    },
})

module.exports = model('Productora', ProductoraSchema)