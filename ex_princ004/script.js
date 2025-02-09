let ultimoNumero = null; // Variável para armazenar o último número usado

function calcular() {
    let n1 = parseInt(document.getElementById('num').value);
    let resultado = document.getElementById('tab');
    let c = 1;

    if (ultimoNumero === n1) {
        alert("Tabuada já feita!");
        return; 
    }

    resultado.value = "";

    // Gera a tabuada
    let tabuada = "";
    while (c <= 10) {
        tabuada += `${n1} x ${c} = ${n1 * c}\n`;
        c++;
    }

    resultado.value = tabuada;

    ultimoNumero = n1;
}
