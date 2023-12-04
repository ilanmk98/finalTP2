class Model {
    constructor(){
        this.votos = [];
    }

    cargarVoto= async(voto)=>{
        this.votos.push(voto);
    }

    obtenerVotos = async()=>{
        return this.votos
    }
   
}

export default Model