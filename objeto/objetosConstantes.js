// pessoa -> 123 -> {...}
const pessoa = {nome: 'Pedro'}
pessoa.nome = 'Leandson'
console.log(pessoa)

//pessoa -> 456 -> {...}
//peesoa = {nome: 'Ana'}

Object.freeze(pessoa) //Congela o objeto para não ser modificado

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Leandson'})
console.log(pessoaConstante)