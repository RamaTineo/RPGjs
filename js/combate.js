const URL = '../js/enemigos.json'
const enemigos = []
const container = document.getElementById("enemigo")

async function obtenerDatos() {
  try {
      const response = await fetch(URL)
      const data = await response.json()
          if (data.length > 0) {
              enemigos.push(...data)
              cargarEnemigos(enemigos)
             
          }
  } catch (error) {
      console.error(error)
      container.innerHTML = retornoError()
      containerS.innerHTML = retornoError()
  }
  function cargarEnemigos(array) {
    let contenido = ""
        if (array.length > 0) {
            array.forEach(enemigos => {
                contenido += retornoCardEnem(enemigos)
            })
            container.innerHTML = contenido
        }
}
}
obtenerDatos()
const containerS = document.getElementById("clasSelec")
function recuperarPJ() {
    let contenidoS = ""
    const pjSelect2 = JSON.parse(localStorage.getItem("mipjSelect")) || []
    (pjSelect2.length > 0) && pjSelect2.forEach(pjSelect => contenidoS += retornoPjSelectCom(pjSelect))
    containerS.innerHTML = contenidoS
}
recuperarPJ()

function cargarPersonajeSelect(array) {
    let contenidoS = ""
        if (array.length > 0) {
            array.forEach(personaje => {
                contenidoS += retornoPjSelectCom(personaje)
            })
            containerS.innerHTML = contenidoS
        }
  }
  cargarPersonajeSelect(pjSelect)
   
  function capNick () {
      const nick = document.getElementById("ingresoNick").value;
      console.log(nick)
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



