const section = document.querySelector("section")
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
    <button id="${espec.id}" class="a-active" tittle="Elegir clase">Elegir clase </button>
  </div>
</div>`
}
// Cargar los personajes en el HTML
const cargarPersonajes = (array) =>{
  let cardHTML =""
  if (array.length > 0){
    array.forEach( espec => cardHTML += armarCardsPersonajes(espec))
  } else {
    cardHTML= "<h2 class='error'>Error al cargar los personajes </2>"
  }
  section.innerHTML = cardHTML
} 
cargarPersonajes(espec)

const guardarPersonaje = () => {

}

const recuperarPersonaje = () => {
  
}