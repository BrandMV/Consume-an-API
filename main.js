const cards = document.getElementById('cards')
const formulario = document.querySelector('#formulario');
const text = document.querySelector('#search');
const llamarAPI = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character/') //Fetch funcion s dejavascript que trae informacion de APIS
    const data = await res.json() //convierte lo de la api a objetos que puede entender js
    const personajes = data.results
    const person = text.value.toLowerCase();
    console.log(personajes);
    if(person.length > 0){
            const fPer = personajes.filter((personaje) =>
            
            personaje.name.toLowerCase() === person   
        )
        
        
        const result = fPer
        .map((personaje) => {
             return generarTarjeta(personaje)
        })
        .join(' ')
        cards.innerHTML += result

    }
    text.value=''

        
}


const generarTarjeta = ({image, name, status, species, gender}) => {
    return `
   
    <div class="contenedor">
        <img src="${image}" alt="${name}">
            <div id="datos">
                <h1>${name}</h1>
                <ul>
                    <li>Status: ${status}</li>
                    <li>Specie: ${species}</li>
                    <li>Gender: ${gender}</li>
                </ul>
            </div>
    </div>

    `
}

formulario.addEventListener('submit',(event) => {
    event.preventDefault()
    llamarAPI()
   
})