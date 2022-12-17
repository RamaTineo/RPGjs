const URL = '../js/enemigos.json'
const enemigos = []
const container = document.querySelector("#enemigo")
const nick = document.querySelector("#nickPJ")
const btnNick = document.querySelector("#swal2-confirm")
const ingresoNick = document.querySelector("#swal2-input")

async function obtenerDatos() {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        if (data.length > 0) {
            enemigos.push(...data)
            cargarEnemigos(enemigos)
            elegirNick()
              
              
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
   


function activarForm() {
    const nick = document.getElementById("swal2-input");
    nick.addEventListener("submit", console.log(nick) )
 }
          

         

