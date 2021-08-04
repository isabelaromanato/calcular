const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const resultado = document.getElementById("resultado")
const somar = document.getElementById("somar")
const formulario = document.getElementById("formulario")

function soma () {
    resultado.value = parseInt(numero1.value) + parseInt(numero2.value)
    formulario.classList.add('green')
}

function subtracao () {
    resultado.value = parseInt(numero1.value) - parseInt(numero2.value)
    formulario.classList.add('blue')
}

function multiplicacao () {
    resultado.value = parseInt(numero1.value) * parseInt(numero2.value)
    formulario.classList.add('pink')
}

function divisao () {
    resultado.value = parseInt(numero1.value) / parseInt(numero2.value)
    formulario.classList.add('yellow')
}

somar.addEventListener("click", soma)
subtrair.addEventListener("click", subtracao)
multiplicar.addEventListener("click", multiplicacao)
dividir.addEventListener("click", divisao)