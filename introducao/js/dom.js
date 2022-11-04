function acessarDOM() {
    //Busca pela tag
    var tagsP = document.getElementsByTagName("p")
    console.log(tagsP)

    // Busca pela classe
    var divs = document.getElementsByClassName("conteiner")
    console.log(divs)
    //busca por nome 
    var radios = document.getElementsByName("curtir")
    console.log(radios)
    //Busca por id 
    var nome = document.getElementById("nome")
    console.log(nome.value)
    alert(nome.value)

    //Buscar por seletor 
    var curtido = document.querySelector("input[type='radio']:checked")
    console.log(curtido.value)

    var pS = document.querySelector("p")
    console.log(pS)

}

//Insere um atributo
var input = document.getElementById("nome")
input.setAttribute("placeholder", "Digite seu nome")

//Le o valor de um atributo
var atributo = input.getAttribute("placeholder")
console.log(atributo)

//Altera conteudo interno
var paragrafo = document.querySelector("p")
paragrafo.innerHTML = "Altera o Conteudo Interno de um Elemento"

//Escutador de eventos 
paragrafo.addEventListener("click", function () {
    alert("Primeiro paragráfo")
})

//Estilo
paragrafo.style.color = "blue"

var button = document.querySelector("button")

//ALtera o display
button.style.display = "block"

//Altera a cor do funto
button.style.backgroundColor = "dodgerblue"

//Altera a cor do texto

button.style.color = "white"

//Altera a borda
button.style.border = "none"

//Altera a margem interna 
button.style.padding = "10px"

//Altera a margem
button.style.margin = "10px 0px"

//Altera o arredondamento das bordas
button.style.borderRadius = "5px"


//CRUD HTML
//Create
var titulo = document.createElement("h1")
titulo.innerHTML = "Eu sou uma H1 criada por JavaScript"
document.body.appendChild(titulo)
console.log(titulo)

//Read 
var h1 = document.querySelector("h1")
console.log(h1.textContent)

//Update
paragrafo.textContent = "Fui alterado por JavaScript"

//Delete
var p = document.querySelector(".conteiner p")
//p.remove()
var pai = p.parentElement
//pai.removeChild(p)