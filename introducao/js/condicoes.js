var idade = 20 
// Maior ou igual 
if (idade >= 18) {
    console.log("Maior de idade")
}
else {
    console.log("Menor de idade")
}

//Igual 
if(idade == "20") console.log("É igual a '20' ")
//Estritamente igual 
if(idade === "20") console.log ("é igual a '20' ")
else console.log ("É diferente de '20'")

// Diferente
if (idade != "20") console.log ("é diferente de '20' ")
else console.log("É igual a '20' ")

//Estritamente diferente
if(idade !== "20")console.log ("É difetente de '20' ")
else console.log("É igual a '20' ")

//Maior
if (idade > 10) console.log("tem mais de 10 anos")

//menor
if (idade < 40) console.log("menor de 40 anos")

//menor ou igual 
if(idade <= 17) console.log ("tem 17 anos ou menos ")

// Else if
if (idade <= 10) console.log("Não paga entrada")
else if (idade < 18) console.log ("paga meia")
else if (idade >= 18) console.log("paga entrada completa")

//Usando o AND

var entrada = 15
var saldo = 20
if (idade >= 18 && saldo >= entrada) console.log ("consegue comprar")
else console.log("não consegue comprar")

//Usando o OR || 
idade = 12 
var classificação = 16
var responsavel = true 
if(idade >= classificação || responsavel === true) console.log("Permitido entrar")
else console.log("não é permitido entrar")

//Switch case
var estado = "SP"
console.log(estado)

switch(estado){
    case "MG": estado = "Minas Gerais"; break;
    case "ES": estado = "Espirito Santo"; break;
    case "RJ": estado = "Rio de Janeiro"; break;
    case "SP": estado = "São Paulo"; break;
    default: estado = "Não especificado"; break;
}

console.log(estado)

// Operador ternário

//Caso retorne True
var idade = 26
var maiorDeIdade = idade >=18 ? "Maior de idade": "Menor de idade"
console.log(maiorDeIdade)

//Caso retorne false
var idade = 17
        var maiorDeIdade = idade >=18 ? "Maior de idade": "Menor de idade"
        console.log(maiorDeIdade)

//Testando se o valor existe
var idadeExiste = idade ? true : false
console.log(idadeExiste)

//Testando se o valor não existe
idade = null
var idadeExiste = idade ? true : false
console.log(idadeExiste)