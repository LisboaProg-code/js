
function calcular(){
    
    let numero = document.getElementById("num").value
    let numerof = document.getElementById("nfim").value
    let resultado = document.getElementById("tabu")
    let tabuada = resultado

    if (numero === '' || numerof === ''){
        alert("[ERROR] Falta de dados!")
        resultado.innerText += "Impossivel contar"
        return
    }

    else{
        let n1 = Number(numero)
        let nf = Number(numerof)
        resultado.innerHTML = ""        
        for (let c = 1; c <= nf; c++) {
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            item.value = `tab${c}`
            resultado.appendChild(item)
        }

        
  
    }  


}