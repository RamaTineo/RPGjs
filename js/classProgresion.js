class Progresion {
    constructor(valorProgresion, nivel) {
        this.valorProgresion = valorProgresion
        this.nivel = nivel
    }
    calcularProgresNivel() {
        return ((this.valorProgresion * 0.5) * this.nivel)
    }
    calcularProgresNivelSuerte() {
        return (this.calcularProgresNivel() *2)
    }
}