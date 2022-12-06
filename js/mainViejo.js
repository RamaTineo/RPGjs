const personaje = []
const section = document.querySelector("section")

// Guardar y recuperar el personaje ne localStorage y JSON
const guardarPersonaje = () => (personaje.length > 0) && localStorage.setItem("personajeSelec", JSON.stringify(personaje))

const recuperarPersonaje = () =>JSON.parse(localStorage.getItem("personajeSelec"))||[]

personaje.push(...recuperarPersonaje())

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
    <button id="${espec.codigo}" class="a-active button" tittle="Elegir clase">Elegir clase </button>
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

// Activar eventos en los botones 
const activarClick = () =>{
  const botonesAdd = document.querySelectorAll("button.button")
  botonesAdd.forEach(btn =>{
    btn.addEventListener("click", (e)=>{
      let resultado = buscarEspec(e.target.id)
      personaje.push(resultado)
      guardarPersonaje()
      verPersonaje()
    })
    
  })
}
cargarPersonajes(especs)
activarClick()

const buscarEspec = (codigo)=> especs.find(espec => espec.codigo === parseInt(codigo))

function verPersonaje() {
  if (personaje.length > 0) {
      const perselect = new seleccion(personaje)
      alert(`El personaje seleccionado es ${perselect.obtenerPersonaje()}`)
  } else {
      alert("No selecciono ningun personaje")
  }
}
const btnVerPersonaje = document.querySelector("button.verPersonaje")
btnVerPersonaje.addEventListener("click", verPersonaje)