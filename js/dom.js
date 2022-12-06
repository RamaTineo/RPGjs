const personajes = []
const container = document.getElementById("clases")
const containerS = document.getElementById("clasSelec")
const URL = './js/personajes.json'

async function obtenerDatos() {
  try {
      const response = await fetch(URL)
      const data = await response.json()
          if (data.length > 0) {
              personajes.push(...data)
              cargarPersonajes(personajes)
             activarBotones()
             
          }
  } catch (error) {
      console.error(error)
      container.innerHTML = retornoError()
      containerS.innerHTML = retornoError()
  }
}
obtenerDatos()

  function cargarPersonajes(array) {
    let contenido = ""
        if (array.length > 0) {
            array.forEach(personaje => {
                contenido += retornoCard(personaje)
            })
            container.innerHTML = contenido
        }
}

function cargarPersonajeSelect(array) {
  let contenidoS = ""
      if (array.length > 0) {
          array.forEach(personaje => {
              contenidoS += retornoPjSelect(personaje)
          })
          containerS.innerHTML = contenidoS
      }
}


function activarBotones() {
  const botonesAdd = document.querySelectorAll("button.btn-espec")
  botonesAdd.forEach(btn => {
      btn.addEventListener("click", ()=> {
        if (pjSelect.length < 1){
        let resultado = personajes.find(pj => pj.id === parseInt(btn.id))
        pjSelect.push(resultado)
        localStorage.setItem("mipjSelect", JSON.stringify(pjSelect))
        cargarPersonajeSelect(pjSelect)
        }
        else{
          localStorage.removeItem("mipjSelect")
        }
      })
  })
}



