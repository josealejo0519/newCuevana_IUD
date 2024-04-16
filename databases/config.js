const mongoose = require('mongoose')
const mongoConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{
        //Parámetros
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "nombre_de_tu_base_de_datos"
    })
    console.log('Conexión exitosa!')
    } catch(e){
        console.log('Error de conexión', e)
        throw new Error('Error de conexión')
    }  
}

module.exports = { mongoConnection }