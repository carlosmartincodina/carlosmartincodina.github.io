let boton = document.getElementById("botonDePrueba")
boton.addEventListener("click", () => {
    console.log("Se ha clickado en el botón")
})

let botonColor = document.getElementById("cambiarColorFondo")

let texto = document.getElementById("texto")

// :hover cambia los estilos mientras el ratón está encima y los cambia cuando el ratón no está encima.
// mouseover ejecuta una función de JavaScript al entrar, permitiendo realizar cambios
// como modificar texto o mostrar mensajes, pero si no se cambia la accion a realizar despues de que no esté
// encima se queda igual.
texto.addEventListener("mouseover", () => {
    texto.textContent = "estas sobre este texto"
})

function cambiarFondo() {
    document.body.classList.toggle("oscuro")
}

botonColor.addEventListener("click", cambiarFondo)

// C3
let botonMenu = document.querySelector(".btn-hamburguesa")
let menu = document.querySelector(".menu")

function alternarMenu() {
    menu.classList.toggle("abierto")
}

botonMenu.addEventListener("click", alternarMenu)

// C4
let preguntas = document.querySelectorAll(".faq details")

preguntas.forEach((pregunta) => {
    pregunta.addEventListener("toggle", () => {
        if (pregunta.open) {
            preguntas.forEach((otra) => {
                if (otra !== pregunta) {
                    otra.open = false
                }
            })
        }
    })
})