
function verificar(){
    // variaveis 
    let aano = document.getElementById('ano').value
    let masc = document.getElementById('m').checked
    let fem = document.getElementById('f').checked

    let conteiner = document.getElementById('conteiner2')
    let img = document.getElementById('foto')
    let res = document.getElementById('ress')

    // variavel para ano atual
    let aatual = new Date()
    let atualano = aatual.getFullYear()

    // if para retornar caso nn tenha os dados preenchidos

    if (aano == 0 || (!masc && !fem)){
        window.alert('Preencha todos os dados')
        return
    }
    // calculo de idade
    let idade = atualano - aano

    //estilo
    conteiner.style.height = '65vh'
    img.style.display = 'block'


    if (idade < 5){
        res.innerText = `Você é um bebê de ${idade} anos. Bem vindo pai/mãe`
        img.style.background = 'url(img/bebe.jpg)'
        img.style.backgroundSize = 'cover'
        img.style.backgroundPosition = 'center center'
    }
    else if (idade < 13 && fem){
        res.innerText = `Você é uma garota que tem ${idade} anos.`
        img.style.background = 'url(img/mulher-criança.jpg)'
        img.style.backgroundSize = 'cover'
        img.style.backgroundPosition = 'center top'
    }
    else if(idade < 13 && masc){
        res.innerText = `Você é um garoto que tem ${idade} anos.`
        img.style.background = `url(img/homem-criança.jpg)`
        img.style.backgroundSize = 'cover'
        img.style.backgroundPosition = '85% center'
    }
    else if (idade < 18 && fem){
        res.innerText = `Você é uma menina que tem ${idade} anos.`
        img.style.background = 'url(img/mulher-adolescente.jpg)'
        img.style.backgroundSize = 'cover'
        img.style.backgroundPosition = 'center center'
    }
    else if(idade < 18 && masc){
        res.innerText = `Você é um menino que tem ${idade} anos.`
        img.style.background = 'url(img/homem-adolescente.jpg)'
        img.style.backgroundSize = 'cover'
        img.style.backgroundPosition = '85% center'
    }
    else if (idade < 50 && fem){
        res.innerText = `Você é uma mulher que tem ${idade} anos.`
        img.style.background = 'url(img/mulher-adulta.jpg)'
        img.style.backgroundSize = 'cover'
        img.style.backgroundPosition = 'left top'
    }
    else if (idade < 50 && masc){
        res.innerText = `Você é um homem que tem ${idade} anos.`
        img.style.background = 'url(img/homem-adulto.jpg)'
        img.style.backgroundSize = 'cover'
        img.style.backgroundPosition = '80% center'
    }
    else if (fem){
        res.innerText = `Você é uma mulher de ${idade} anos`
        img.style.background = 'url(img/mulher-idosa.jpg)'
        img.style.backgroundSize = 'cover'
        img.style.backgroundPosition = 'center 70%'
    }
    else if(masc){
        res.innerText = `Você é um homem de ${idade} anos`
        img.style.background = 'url(img/homem-idoso.jpg)'
        img.style.backgroundSize = 'cover'
        img.style.backgroundPosition = 'center 40%'
    }

}
