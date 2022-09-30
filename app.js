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
        <p class="status">status: ${personaje.status}</p>
        </div>
     </div>
    `
}

function mostrarLocalidad(localidad) {
	acc += `
    <div class='cont-localidad'>
      <div class="cont-info">
        <h5 class="name">${localidad.name}</h5>
			  <p class="gender"><span>tipo:</span> ${localidad.type}</p>
        <p class="species"><span>dimension:</span> ${localidad.dimension}</p>
      </div>
     </div>
    `
}

function mostrarEpisodio(episodio) {
	acc += `
    <div class='cont-episodio'>
      <div class="cont-info">
        <h5 class="name">${episodio.name}</h5>
        <p class="fecha">fecha: ${episodio.air_date}</p>
        <p class="episodio"><span>episodio:</span> ${episodio.episode}</p>
      </div>
    </div>
    `
}

let personaje = document.querySelector('.personajes')
let localidades = document.querySelector('.localidades')
let episodios = document.querySelector('.episodios')

let arrPersonajes = [];
let arrLocalidades = [];
let arrEpisodios = [];
let resultados = document.getElementById('resultados');
let resultadosLoc = document.getElementById('resultadosLoc');
let resultadosEpi = document.getElementById('resultadosEpi');

console.log("acc", acc)

personaje.addEventListener('click', (e) => {
	console.log('click')
	fetch(`https://rickandmortyapi.com/api/character`)
		.then(res => res.json())
		.then(data => {
			arrPersonajes = [...data.results];

			resultadosLoc.classList.add("deshabilitar");
			resultadosEpi.classList.add("deshabilitar");
			resultados.classList.remove("deshabilitar");
			resultados.innerHTML = "";

			arrPersonajes.map((personaje) => {
				mostrarPersonaje(personaje)
			})

			resultados.innerHTML = acc;
			acc = "";
		})
		.catch(err => { console.log(err) })
})

localidades.addEventListener('click', (e) => {
	fetch(`https://rickandmortyapi.com/api/location`)
		.then(res => res.json())
		.then(data => {
			arrLocalidades = [...data.results];

			resultados.classList.add("deshabilitar")
			resultadosEpi.classList.add("deshabilitar");
			resultadosLoc.classList.remove("deshabilitar");
			resultadosLoc.innerHTML = "";

			arrLocalidades.map((localidad) => {
				mostrarLocalidad(localidad)
			})

			resultadosLoc.innerHTML = acc;
			acc = "";
		})
		.catch(err => { console.log(err) })
})

episodios.addEventListener('click', (e) => {
	fetch(`https://rickandmortyapi.com/api/episode`)
		.then(res => res.json())
		.then(data => {
			arrEpisodios = [...data.results];

			resultados.classList.add("deshabilitar")
			resultadosLoc.classList.add("deshabilitar")
			resultadosEpi.classList.remove("deshabilitar");

			resultadosEpi.innerHTML = "";

			arrEpisodios.map((episodio) => {
				mostrarEpisodio(episodio)
			})

			resultadosEpi.innerHTML = acc;
			acc = ""
		})
		.catch(err => { console.log(err) })
})