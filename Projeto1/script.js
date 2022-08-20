
var campos = document.querySelectorAll("td")
function iniciar(){
    var info = document.getElementById("info")
    info.classList.remove("oculto")

    var button = document.querySelector("button")
    button.classList.remove("btn-success")
    button.classList.add("btn-danger")
    button.textContent = "Reiniciar"
    button.onclick = limpaJogo

    limpaJogo()

}

campos.forEach(campo => {
    campo.addEventListener("click", evento => {
        let elemento = evento.target

        if (elemento.classList.contains("blocked"))return
        console.log(elemento)

        let jogador = document.querySelector(".jogador strong")
        elemento.textContent = jogador.textContent
        elemento.style.color = jogador.style.color
        elemento.classList.add("blocked")

        let ganhador = validaJogada()
        if (ganhador) {
            document.querySelector(".vencedor").classList.remove("oculto")
            document.querySelector(".velha").classList.add("oculto")
            document.querySelector(".vez").classList.add("oculto")
           campos.forEach(campo => campo.classList.add("blocked"))
            return
        }

        if (jogador.textContent === "X"){
            jogador.textContent = "O"
            jogador.style.color = "red"
        }
        else{
            jogador.textContent = "X"
            jogador.style.color = "blue"
        }
    })
})

function validaJogada(){
    var combinacoes = [
        //Combinações Horizontais
        [0,1,2],
        [3,4,5],
        [6,7,8],
        //Verticais
        [0,3,6],
        [1,4,7],
        [2,5,8],
        //Diagonais
        [0,4,8],
        [2,4,6]
    ]
    var ganhador = null
    
    combinacoes.forEach(combinacao =>{
        let valor1 = campos[combinacao[0]].textContent
        let valor2 = campos[combinacao[1]].textContent
        let valor3 = campos[combinacao[2]].textContent

        if (!valor1 || !valor2 || !valor3) return

        if(valor1 === valor2 && valor2 === valor3){
            ganhador = valor1

            let background = ""
            if (valor1 === "X") background ="blue"
            else background = "red"

            campos[combinacao[0]].style.cssText = `background-color: ${background}; color: white;`
            campos[combinacao[1]].style.cssText = `background-color: ${background}; color: white;`
            campos[combinacao[2]].style.cssText = `background-color: ${background}; color: white;`
        }
    })

    var espacosEmBranco = 0 
    campos.forEach(campo => {
        if(campo.textContent === "") espacosEmBranco ++
    })

    if(!ganhador && espacosEmBranco === 0 ){
        document.querySelector(".vencedor").classList.add("oculto")
        document.querySelector(".velha").classList.remove("oculto")
        document.querySelector(".vez").classList.add("oculto")
        document.querySelector(".jogador").classList.add("oculto")
        return ganhador
    }

    return ganhador
}

function limpaJogo(){
    console.log(campos)
    campos.forEach(campo => {
        campo.classList.remove("blocked")
        campo.textContent = ""
        campo.style.cssText = ""
    })
    document.querySelector(".vencedor").classList.add("oculto")
    document.querySelector(".velha").classList.add("oculto")
    document.querySelector(".vez").classList.remove("oculto")
    document.querySelector(".jogador").classList.remove("oculto")




}