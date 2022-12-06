const pjSelect = JSON.parse(localStorage.getItem("mipjSelect")) || []

// Armar tabla en html
const retornoCard = (espec) =>{
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
      <button id="${espec.id}" class="btn-espec" tittle="Elegir clase" >Elegir clase </button>
    </div>
  </div>`
  }

  function retornoError() {
    return `<div class="card-error">
                <h2>Houston, tenemos un problema 🔌</h2>
                <h3>No pudimos cargar los personajes. 🤦🏻‍♂️</h3>
                <h3>Intenta nuevamente en unos instantes...</h3>
            </div>`
}

const retornoPjSelect = (pjSelect) =>{
    return `
    <div class="card">
    <img src="${pjSelect.imagen}" class="card-img-top" alt="${pjSelect.tipo}">
    <div class="card-body">
      <h5 class="card-title">${pjSelect.tipo}</h5>
      <p class="card-text"></p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Daño: ${pjSelect.danio}</li>
      <li class="list-group-item">Salud: ${pjSelect.vida}</li>
      <li class="list-group-item">Defensa: ${pjSelect.defensa}</li>
    </ul>
    <div class="card-body">
    <a href="./pages/combate.html" class="a-active"></ <button id="${pjSelect.id}" class="btnSelect" tittle="Elegir clase">Confirmar clase </button></a>
    </div>
  </div>`
  }