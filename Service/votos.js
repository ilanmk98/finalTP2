import Model from '../Model/votos.js'


class Servicio {
    constructor(){
        this.model = new Model();
        this.distritosValidos = ["zona1", "zona2", "zona3","zona4"];
        this.candidatosValidos = ["candidatoA", "candidatoB", "candidatoC","enblanco"];
    }
    

    cargarVoto=async(voto)=>{
        const error = this.validarVoto(voto);
        if(error==='')
        {
            let votoValidado={}
            votoValidado.candidato=voto.candidato
            votoValidado.distrito=voto.distrito
            await this.model.cargarVoto(votoValidado)
        }
        else
        {
            throw error;
        }

    }

    obtenerVotos = async()=>{
        return await this.model.obtenerVotos()
    }

    validarVoto=(voto)=>{
        let errorMsg="";
       
        if(!this.distritosValidos.includes(voto.distrito))
        {
            errorMsg=errorMsg+"Zona no correspondiente||"
        }
        if(!this.candidatosValidos.includes(voto.candidato))
        {
            errorMsg=errorMsg+"Candidato no valido"
        }
        return errorMsg;
    }

    obtenerVotosGenerales = async()=>{
        const votos = await this.model.obtenerVotos()
        const resultado = votos.reduce((conteo, voto) => {
            const candidato = voto.candidato;
            conteo.generales = conteo.generales || {};
            conteo.generales[candidato] = conteo.generales[candidato] || 0;
            conteo.generales[candidato]++;
            return conteo;
          }, { generales: {} });
          this.candidatosValidos.forEach(candidato => {
            if (!resultado.generales.hasOwnProperty(candidato)) {
              resultado.generales[candidato] = 0;
            }
          });
          return resultado;
    }

} export default Servicio