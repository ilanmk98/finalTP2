import express from 'express'
import Controlador from '../Controller/votos.js'

class Router{
    constructor(){
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start(){
        this.router.post('/cargarVoto',this.controlador.cargarVoto)
        this.router.get('/obtenerVotos',this.controlador.obtenerVotos)
        this.router.get('/obtenerVotosGenerales',this.controlador.obtenerVotosGenerales)
        return this.router
    }
} export default Router