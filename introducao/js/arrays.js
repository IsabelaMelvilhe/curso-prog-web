
var frutas = ["Maçã", "Banana", "Manga"]
console.log(frutas)

//Adiciona um item ao final do array
frutas.push("Mamão")
console.log(frutas)

//Remove o ultimo item do array 
frutas.pop()
console.log(frutas)

//Adiciona um item ao inicio do array
frutas.unshift("Limão")
console.log(frutas)

//Remove o primeiro item do array
frutas.shift()
console.log(frutas)

//Encontra a posição de um item no array
var posicao = frutas.indexOf("Banana")
console.log(posicao)

//Ordenar alfabeticamente
frutas.sort()
console.log(frutas)

//Inverte dados do Array
frutas.reverse()
console.log(frutas)

//Seleciona um pedaço do array
var pedaco = frutas.slice(0, 2)
console.log(pedaco)

//Remover diversos itens de um array
var removidos = frutas.splice(1,2)
console.log(frutas)

//Unifica todos os itens de um array
var nome = ["Isabela", "Melvilhe"]
var nomeCompleto = nome.join(" ")
console.log(nomeCompleto)

//Unifica dois arreys
var a = [1,2,3]
var b = [4,5,6]
var unificado = a.concat(b)
console.log(unificado)

var alunos = [
    {
        nome: "Isabela",
        idade: 26
    },
    {
        nome: "Jhon",
        idade: 35
    }
]
    
//Acessa cada item de um array
alunos.forEach(function(aluno, posicao){
    console.log(`${posicao} = ${aluno.nome}`)
})
// Encontra a posição de um item 
var posicao = alunos.findIndex(function(aluno){
    return aluno.nome == "Isabela"
})
console.log(posicao)

//Modifica cada item do array
var idades = alunos.map(function(aluno){
    return aluno.idade
})
console.log(idades)

//Busca um dado no array (retorna o primeiro dado)
var encontrado = alunos.find(function(aluno){
    return aluno.nome == "Jhon"
})
console.log(encontrado)

//Busca dados no array (todas correspondencias)
var encontrados = alunos.filter (function(aluno){
    return aluno.idade < 40
})
console.log(encontrados)


