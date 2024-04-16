const Genero = require('../models/genero')
const {request, response} = require('express')


const obtenerGenero= async (
    req = request, res = response
) => {
    try{
        const { estado } = req.query
        const generos = await Genero.find({estado})
        return res.json(generos)
    } catch(e){
        return res.status(500).json({
            msj: e
        })
    }
}

const crearGenero = async (
    req = request, res = response
) => {
    try{
        const body = req.body
        const genero = new Genero(body)
        await genero.save()
        return res.status(201).json(genero)
    } catch(e){
        return res.status(500).json({
            msj: e
        })
    }
}

const actualizarGenero = async (
    req = request, res = response
) => {
    try{
        const id = req.params.id
        const body= req.body
        console.log(body)
        body.fechaActializacion = new Date()
        const genero = 
            await Genero.findByIdAndUpdate(id, body, {new: true})
        return res.status(201).json(genero)
    } catch(e){
        return res.status(500).json({
            msj: e
        })
    }
}

const borrarGenero = async (
    req = request, res = response
) => {
    try{
        const id = req.params.id
            await Genero.findByIdAndDelete(id)
        return res.status(204).json({
            msj: "Borrado"
        })
    } catch(e){
        return res.status(500).json({
            msj: e
        })
    }
}

module.exports = {
    obtenerGenero,
    crearGenero,
    actualizarGenero,
    borrarGenero
}