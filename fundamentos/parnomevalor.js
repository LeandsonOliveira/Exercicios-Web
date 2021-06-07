// par nome/valor

const saudacao = 'Opa' //contexto lexico 1

function exec(){
    const saudacao = 'Falaaaa' //contexto lexico 2
    return saudacao
}

//Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Leo',
    idade: 24,
    peso: 94,
    endereco:{
        logradouro: "Rua Joaquim",
        numero: 561
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)