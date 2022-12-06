const personajes = []
const section = document.querySelector("section")
const URL = './variables.js'


async function obtenerDatos() {
  try {
      const response = await fetch(URL)
      const data = await response.json()
          if (data.length > 0) {
              personajes.push(...data)
              cargarPersonajes(personajes)
              activarClickBotones()
          }
  } catch (error) {
      console.error(error)
      container.innerHTML = retornoError()
  }
}
obtenerDatos()

// Armar tabla en html
const armarCardsPersonajes = (espec) =>{
    return `
    <div class="card">
    <img src="${espec.imagen}" class="card-img-top" alt="${espec.tipo}">
    <div class="card-body">
      <h5 class="card-title">${espec.tipo}</h5>
      <p class="card-text"></p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Daño: ${espec.danio}</li>
      <li class="list-group-item">Salud: ${espec.vida}</li>
      <li class="list-group-item">Defensa: ${espec.defensa}</li>
    </ul>
    <div class="card-body">
      <button id="${espec.id}" class="btn-espec" tittle="Elegir clase">Elegir clase </button>
    </div>
  </div>`
  }

  function cargarPersonajes(array) {
    let contenido = ""
        if (array.length > 0) {
            array.forEach(producto => {
                contenido += retornoCard(producto)
            })
            container.innerHTML = contenido
        }
}