let ultimoNumero = null;
let ultimoNumero2 = null

function calcular() {
    let n1 = parseInt(document.getElementById('num').value);
    let nf = parseInt(document.getElementById('nfim').value) // ex: 10
    let resultado = document.getElementById('tab');
    let c = 1;

    if (ultimoNumero === n1 && ultimoNumero2 === nf) {
        alert("Tabuada já feita!");
        return; 
    }

    resultado.value = "";

    // Gera a tabuada
    let tabuada = "";
    while (c <= nf) {
        tabuada += `${n1} x ${c} = ${n1 * c}\n`;
        c++;
    }

    resultado.value = tabuada;

    ultimoNumero = n1;
    ultimoNumero2 = nf
}
