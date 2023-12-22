let Negro = document.querySelector("#Negro")
let Blanco = document.querySelector("#Blanco")
let Rojo = document.querySelector("#Rojo")
let imagen = document.querySelector("#fotoCronos")


Negro.onmouseover = function () {
    imagen.src = "cronosNegro.png"
}

Blanco.onmouseover = function() {
    imagen.src = "cronosBlanco.png"
}

Rojo.onmouseover = function () {
    imagen.src = "cronosRojo.png"
}