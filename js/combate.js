
const containerS = document.getElementById("clasSelec")
function recuperarPJ() {
    let contenidoS = ""
    const pjSelect2 = JSON.parse(localStorage.getItem("mipjSelect")) || []
    (pjSelect2.length > 0) && pjSelect2.forEach(pjSelect => contenidoS += retornoPjSelect(pjSelect))
    containerS.innerHTML = contenidoS
}
recuperarPJ()

function cargarPersonajeSelect(array) {
    let contenidoS = ""
        if (array.length > 0) {
            array.forEach(personaje => {
                contenidoS += retornoPjSelect(personaje)
            })
            containerS.innerHTML = contenidoS
        }
  }
  cargarPersonajeSelect(pjSelect)
  

//   const btnSelect = document.querySelector("#btnSelect")

//   btnSelect.addEventListener("click", ()=> {
//   Swal.fire({
//     icon: 'question',
//     title: '¿Confirmas la Seleccion de este personaje?',
//     showCancelButton: true,
//     confirmButtonText: 'Confirmar',
//         cancelButtonText: `Cancelar`,
//       }) 
//       .then(result => {
//         if (result.isConfirmed) {
//             localStorage.removeItem("mipjSelect")
//             Swal.fire("Preparate para la aventura!", '', 'info')
//                 .then(()=> {
//                     location.href = 'index.html'
//                 })
//         }
//       })
// })

