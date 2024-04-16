const {Schema, model} = require('mongoose')
const TiposSchema = Schema({
    nombre: {
        type: String,
        unique: [true, 'Nombre debe ser único'],
        required: [true, 'Nombre es requerido'],
        minLength: 1
    },
    fechaCreacion: {
        type: Date
    },
    fechaActualizacion: {
        type: Date
    },
    descripcion: {
        type: String,
    },
})

module.exports = model('Tipos', TiposSchema)