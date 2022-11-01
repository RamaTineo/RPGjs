let especSelecc;


let total = parseInt(prompt("De cuantos personajes sera tu grupo?"))
for (let i = 0; i < total; i++) {

function login() {
    let espec = prompt("Elige tu clase (mago, guerrero, arquero)")
    if (espec.trim() !== "" && espec.trim().length > 0) {
        especSelecc = espec
    switch(especSelecc) {
        case "mago":
            
           return console.log("Bienvenido señor mago")

        case "guerrero":
            
           return console.log("Bienvenido señor guerrero")

        case "arquero":
           
           return console.log("Bienvenido señor arquero")

        default:
            return console.log("⛔️ clase invalida.")
}
}
else{
    console.error("No ingreso una clase")
}
}
login ()
}
