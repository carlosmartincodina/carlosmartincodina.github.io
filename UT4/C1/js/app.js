//3
console.log("app.js conectado")
//4
let header = document.querySelector("header")
//5
let tarjetas = document.querySelectorAll(".tarjeta")
//6
console.log(tarjetas.length)

//7
document.getElementById("cambiarTexto").addEventListener("click", () => {
    document.querySelector("h1").textContent = "Has cambiado el texto del h1"
})

//9
tarjetas[0].classList.add("destacado")

//10
document.getElementById("alternarClase").addEventListener("click", () => {
    tarjetas[0].classList.toggle("destacado");
})
