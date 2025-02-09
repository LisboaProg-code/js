let teste = false
let narray = []
let soma = 0
let qntd = 0
let res = document.getElementById("numeros")
let conteiner = document.getElementById("resultado")
function adicionar(){
    let n = document.getElementById("num").value
    conteiner.style.display = 'none'
    let item = document.createElement("option")
    teste = true
    let numero = Number(n)
    menor = numero
    while(teste == true){
        if (n === ''){
            alert("[ERROR] Dados inválidos! Tente novamente")
            return
        }
        else{
            narray.push(numero)
            console.log(narray)    
            item.text += `Valor ${numero} adicionado`
            res.appendChild(item)
            qntd += 1
            soma+=numero

        }
        teste = false
        return
    }
}



narray.sort()
let teste2 = 0
let res1 = document.getElementById("ress1")
let res2 = document.getElementById("ress2")
let res3 = document.getElementById("ress3")
let res4 = document.getElementById("ress4")
let res5 = document.getElementById("ress5")

function finalizar(){

    if (qntd == 0){
        alert("[ERROR] Dados inválidos! Tente novamente")
        return
    }
    else{
        conteiner.style.display = 'block'
        if (teste2 == 0){
            console.log(narray)
            res1.innerText = `Ao todo, temos ${qntd} números cadastrados.`
            res2.innerText = `O maior valor informado foi ${Math.max(...narray)}`
            res3.innerText = `O menor valor informado foi ${Math.min(...narray)}`
            res4.innerText = `Somando todos os valores, temos ${soma}`
            res5.innerText = `A média dos valores digitados é ${soma/qntd}`
        }
        else{
            return
        }
    }

}
