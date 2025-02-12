let amigo = {
    nome: `Mario`, 
    idade: 14, 
    peso: 71, 
    engordar(p = 0){
        console.log("Engordou")
        this.peso += p
}}

amigo.engordar(9)

console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
