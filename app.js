let acc = ''

function mostrarPersonaje(personaje) {
    acc += `
    <div class='cont-personaje'>
      <div class="cont-img">
        <img src="${personaje.image}"/>
      </div>
      <div class="cont-info">
        <h5 class="name">${personaje.name}</h5>
        <p class="gender">genero: ${personaje.gender}</p>
        <p class="species">especie: ${personaje.species}</p>
        <p class="status">status:${personaje.status}</p>
        </div>
     </div>
    `
}

let personaje = document.querySelector('.personajes')
let localidades = document.querySelector('.localidades')
let episodios = document.querySelector('.episodios')

let arrPersonajes = []
let arrLocalidades = []
let arrEpisodios = []
let resultados = document.getElementById('resultados')

console.log(personaje)

personaje.addEventListener('click', (e) => {
    console.log('click')
    fetch(`https://rickandmortyapi.com/api/character`)
        .then(res => res.json())
        .then(data => {
            arrPersonajes = [...data.results];
            console.log(arrPersonajes)
            arrPersonajes.map((personaje) => {
                mostrarPersonaje(personaje)
            })
            resultados.innerHTML = acc;
        })
        .catch(err => { console.log(err) })
})

localidades.addEventListener('click', (e) => {
    fetch(`https://rickandmortyapi.com/api/location`)
        .then(res => res.json())
        .then(data => {
            arrLocalidades = [...data.results];
            console.log(arrLocalidades)
            arrLocalidades.map((localidad) => {
                //mostrarPersonaje(localidad)
            })
            resultados.innerHTML = acc;
        })
        .catch(err => { console.log(err) })
})

episodios.addEventListener('click', (e) => {
    fetch(`https://rickandmortyapi.com/api/episode`)
        .then(res => res.json())
        .then(data => {
            arrEpisodios = [...data.results];
            console.log(arrEpisodios)
            arrEpisodios.map((episodio) => {
                //mostrarPersonaje(episodio)
            })
            resultados.innerHTML = acc;
        })
        .catch(err => { console.log(err) })
})