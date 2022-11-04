
//Função simples
function aviso() {
    console.log("A função foi executada")
    alert("Esse é um aviso")
}

//Chama a função
aviso()

//Função com parametros
function soma(a, b) {
    var resultado = a + b
    return resultado
}

//Chama a função

var res = soma(3, 2)
console.log(res)

//Escopos
//Variavel Global
var global = 1

function escopo() {
    //Variavel Local
    var local = 2
    console.log(global)
    console.log(local)
}

escopo()

console.log(global)
//console.log(local)

if (global === 1) {
    //Variavel com escopo de bloco
    let bloco = 3
    console.log(bloco)
}

//console.log(bloco)

//Arrow functions 
//Sem nenhum parametro precisa dos parenteses vazio.
const semParametro = () => {
    console.log("Sou uma função sem parametros")
}
semParametro()

//Somente  um parametro não precisa de parenteses. 
const comParametro = parametro => {
    console.log(parametro)
}
comParametro("Teste de arrow function com um parametro")

//Recebe mais de um parametro, precisa de parenteses
const multiParametros = (parametro1, parametro2) => {
    console.log(parametro1)
    console.log(parametro2)
}
multiParametros("Parametro1", "Parametro2")

//Arrow function dentro de metodo que recebe uma função
var valores = [1, 2, 3, 4]
valores.forEach(valor => {
    console.log(valor)
})

//Arrow function com retorno dentro de metodo que recebe uma função
var valoresMaisUm = valores.map(valor => valor + 1)
console.log(valoresMaisUm)

//Função que retorna promessa
function delay(seg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(seg)
        }, seg * 1000)
    })
}

//Função assincrona
async function assincrona() {
    console.log("Iniciou a execução da função")
    let segundos
    segundos = await delay(3)
    console.log(`demorou ${segundos} segundos para logar`)
    segundos = await delay(5)
    console.log(`demorou ${segundos} segundos para logar`)
    segundos = await delay(10)
    console.log(`demorou ${segundos} segundos para logar`)
}
assincrona()

//Função assincrona que faz o fetch
async function getData() {
    try {
        const req = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log(req)
        const res = await req.json()
        console.log(res)
    }
    catch (error) {
        console.log(error.message)
    }

}

getData()


