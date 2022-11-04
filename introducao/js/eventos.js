
//Carragamento da pagina
window.addEventListener("load", function () {
    console.log("Apagina foi carregada")
})

//Duplo clique
document.querySelector("h2").addEventListener("dbclick", function () {
    alert("Duplo Clique")
})

//change
document.getElementById("nome").addEventListener("change", function (evento) {
    alert("O novo nome é:" + evento.target.value)
})

//Input
document.getElementById("idade").addEventListener("input", function (evento) {
    console.log("A nova idade é:" + evento.target.value)
})

//clique
document.querySelector("button").addEventListener("click", function () {
    alert("Clique")
})

//Submit
document.querySelector("form").addEventListener("submit", function (evento) {
    evento.preventDefault()
    alert("submit")
})
