import express from 'express'
import Router from './Router/votos.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(new Router().start())

const PORT = 8081;
const server = app.listen(PORT,()=>console.log(`Servidor express escuchando en http://localhost:${PORT} `))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))