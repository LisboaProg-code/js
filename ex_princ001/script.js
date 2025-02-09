function carregar(){
    let h = document.getElementById('hora')
    let f = document.getElementById('foto')
    let body = document.body
    let conteiner = document.getElementById('contein')

    let atual = new Date()
    let horaa = atual.getHours()
    h.innerText = `Agora são ${horaa} horas`

    if (horaa >= 0 && horaa < 5){
        // madrugada
        f.style.background = 'url(img/madrugada.jpg)'
        f.style.backgroundSize = 'cover'
        f.style.backgroundPosition = 'center 20%'
        body.style.backgroundColor = '#081826'
        conteiner.style.backgroundColor = '#213651'
    }
    else if (horaa > 5 && horaa < 12){
        //manhã
        f.style.background = 'url(img/manha.jpg)'
        f.style.backgroundSize = 'cover'
        f.style.backgroundPosition = 'right top'
        body.style.backgroundColor = '#26ace1'
        conteiner.style.backgroundColor = '#00afc0'
    }
    else if(horaa > 12 && horaa < 18){
        // tarde
        f.style.background = 'url(img/tarde.jpg)'
        f.style.backgroundSize = 'cover'
        f.style.backgroundPosition = 'right top'
        body.style.backgroundColor = '#F25C05'
        conteiner.style.backgroundColor = '#F28705'
    }
    else if(horaa >= 18){
        //noite
        f.style.background = 'url(img/noite.jpg)'
        f.style.backgroundSize = 'cover'
        f.style.backgroundPosition = 'center center'
        body.style.backgroundColor = '#070C0D'
        conteiner.style.backgroundColor = '#0F2426' 
    }

}
