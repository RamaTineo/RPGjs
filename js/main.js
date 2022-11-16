function crearCodigo() {
    return parseInt(Math.random() * 10_000_000)
}
function buscarClase(codigo) {
    let resultado = profesion.find(profesion => profesion.codigo === codigo)
        return resultado
}
function login() {
    const codigoElegido = parseInt(prompt(mensajeBienvenida))
          if (codigoElegido !== 1 && codigoElegido !== 2 && codigoElegido !== 3) {
            alert("⛔️ Error, no eligio una clase valida")
            return 
          }
          let seleccionado = buscarClase(codigoElegido)
          let mensaje = `Has seleccionado: ${seleccionado.tipo} . Vida ${seleccionado.vida}. daño ${seleccionado.danio}.`
              alert(mensaje)
          const respuesta = confirm("¿Confirmas esta clase?")
          if (respuesta) {
            mostrarProgresion(seleccionado.vida)
          }
}
function mostrarProgresion(vida) {
    const prog = new Progresion(vida, nivel)
    let msjProgresion = "✅ Progreso de vida por nivel " + prog.calcularProgresNivel() + "\n" +
                        "✅ Progreso de vida con suerte " + prog.calcularProgresNivelSuerte() + "\n" +
                        "\n" +
                        "El codigo unico de su personaje es: " + crearCodigo()
        alert(msjProgresion)
}