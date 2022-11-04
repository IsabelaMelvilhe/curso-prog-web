

//Cria objeto manualmente
var objeto = {
    nome: "Isabela",
    sobrenome: "Melvilhe"
}
console.log(objeto)

//Cria objeto com o construtor
var novoObejeto = Object.create(objeto)
console.log(novoObejeto.nome)

//Retorna matrix com as chaves e valores do objeto
var entries = Object.entries(objeto)
console.log(entries)

//Retorna array com as chaves do objeto
var keys = Object.keys(objeto)
console.log(keys)

//Retorna um array com os valores do objeto
var values = Object.values(objeto)
console.log(values)

//Unifica dois objetos
var objeto2 = { sobrenome: "Zany", idade: 26 }
var objetoUnificado = Object.assign(objeto, objeto2)
console.log(objetoUnificado)

//Inifica dois objetos com espalhamento de dados
var espalhamentoObjetos = { ...objeto, idade: 26 }
console.log(espalhamentoObjetos)

