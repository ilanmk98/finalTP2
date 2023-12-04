Entrega de examen final TP2.

Las consignas realizadas fueron 1A y 1C

El mismo esta configurado para correr sobre el puerto 8081.

El programa cuenta con dos scripts: start y watch.

npm run start: Ejecuta el programa simplemente.

npm run watch: Ejecuta el programa con Nodemon.


El programa consta de 3 endpoints.

/cargarVoto de tipo POST: Este endpoint recibe por parametro un objeto voto que solo puede contener 2 atributos: Candidato y distrito. 
Los unicos valores posibles para candidato son: "candidatoA", "candidatoB", "candidatoC","enblanco" y los unicos valores posibles para distrito son: "zona1", "zona2", "zona3","zona4".
Si el objeto voto tiene atributos que no sean los mencionados aca arriba, los mismos seran ignorados por el programa.

El endpoint devuelve un 200 cuando la informacion cargada es correcta y un 400 con un mensaje explicando cual fue el error.

/obtenerVotos de tipo GET: Este endpoint no recibe parametros y devuelve todos los votos, incluida su zona junto a un codigo 200.

/obtenerVotosGenerales de tipo GET: Este endpoint no recibe parametros y muestra un objeto donde se especifican cuantos votos obtuvo cada opcion de candidato al momento de ser llamado el mismo junto a un codigo 200.
