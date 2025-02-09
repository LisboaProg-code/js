
let ultimoNumero = null;
let ultimoNumero2 = null
let ultimoNumero3 = null

function calcular() {
    let start = parseInt(document.getElementById('inicio').value); // Lê o início
    let pass = parseInt(document.getElementById('passo').value);   // Lê o passo
    let fim = parseInt(document.getElementById('fim').value);      // Lê o fim
    const resultado = document.getElementById('ress');            // Elemento onde o resultado será exibido

    // Validações
    if (isNaN(start) || isNaN(pass) || isNaN(fim) || pass <= 0) {
        window.alert('Preencha todos os campos corretamente! O passo deve ser maior que 0.');
        return;
    }

    if (ultimoNumero === start && ultimoNumero2 === fim && ultimoNumero3 === pass) {
        window.alert("Você já gerou uma sequência para esse início!");
        return;
    }

    resultado.innerText = ""; // Limpa o resultado anterior

    // Geração da sequência
    for (let i = start; i <= fim; i += pass) {
        if (i + pass > fim) {
            resultado.innerText += `${i} 🏁`; // Último número da sequência
        } else {
            resultado.innerText += `${i} 👉 `;
        }
    }

    // Atualiza o último número inicial usado
    ultimoNumero = start;
    ultimoNumero2 = fim
    ultimoNumero3 = pass
}

