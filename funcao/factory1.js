/*const prod1 = {
    nome: 'Mochila'
    preco: 45
}

const prod2 = {
    nome: 'Caderno'
    preco: 25
}*/

//Factory simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
