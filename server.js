const app = require('./app')
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => {
    console.log(`El servidor arrancó por el puerto ${app.get('port')} `)
})
