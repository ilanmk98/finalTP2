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


        this.router.use((req, res, next) => {
            const error = new Error('Ruta no encontrada');
            error.status = 404;
            next(error);
          });
          
          this.router.use((err, req, res, next) => {
            res.status(err.status || 500);
            res.json({
              error: {
                message: err.message,
              },
            });
          });



        return this.router
    }
} export default Router