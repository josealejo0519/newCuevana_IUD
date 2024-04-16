const {
    obtenerGenero,
    crearGenero,
    actualizarGenero,
    borrarGenero
} = require('../controllers/generoControllers')

const { Router } = require('express')
const router = Router ()

//consultar generos
router.get('/', obtenerGenero)

//crear genero
router.post('/', crearGenero)

//actualizar genero por ID
router.put('/:id', actualizarGenero)

//eliminar un genero por ID
router.delete('/:id', borrarGenero)

module.exports = router