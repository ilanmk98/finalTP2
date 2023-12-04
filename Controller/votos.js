import Servicio from '../Service/votos.js'

class Controlador{
    constructor(){
        this.servicio = new Servicio();
    }

    cargarVoto = async(req,res)=>{
        const voto = req.body;
        try{
            await this.servicio.cargarVoto(voto);
            res.status(201).json({msg:"Voto cargado"})
        }
        catch(error)
        {
            res.status(400).json({ error: error });
        }
    }

    obtenerVotos = async(req,res)=>{
        const votos = await this.servicio.obtenerVotos()
        res.json(votos)
    }

    obtenerVotosGenerales = async(req,res)=>{
        const votosGenerales = await this.servicio.obtenerVotosGenerales()
        res.json(votosGenerales)
    }

} export default Controlador