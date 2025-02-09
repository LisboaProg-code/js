function calcular(){
    let start = document.getElementById('inicio').value
    let end = document.getElementById('fim').value
    let pass = document.getElementById('passo').value
    let n1 = Number(start)
    let n2 = Number(end)
    let n3 = Number(pass)
    let res = document.getElementById('resultado')

    if(start.length == 0 || end.length == 0 || pass.length == 0){
        res.innerHTML = "Impossível contar!"
        return
    }

    else{

        res.innerHTML = 'Contando...' + '<br>'
        res.style.textAlign = 'center'

        if (n1 < n2){
            for(let c = n1; c <= n2; c +=n3){
                res.innerText += `${c} 👉`
            }
        }
        else{
            for (let c = n1; c >= n2; c-=n3){
                res.innerText += `${c} 👉`
            }
        }
        res.innerText += `🏁`
    
    }

    
}