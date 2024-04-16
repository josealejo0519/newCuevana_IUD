const {
    obtenerGeneros,
    crearGenero,
    actualizarGenero,
    borrarGenero
} = require('../allControllers/genController')

const { Router } = require('express')
const router = Router ()

//consultar generos
router.get('/', obtenerGeneros)

//crear genero
router.post('/', crearGenero)

//actualizar genero por ID
router.put('/:id', actualizarGenero)

//eliminar un genero por ID
router.delete('/:id', borrarGenero)

module.exports = router