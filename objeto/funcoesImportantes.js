const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 30
}
console.log(Object.keys(pessoa)) //Chaves do objeto
console.log(Object.values(pessoa))//Valores do objeto
console.log(Object.entries(pessoa))//Lista chaves e valores

Object.entries(pessoa).forEach( e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${valor}: ${chave}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true, // Listagem
    writable: false, //Não pode ser alterada
    value: '30/03/2020'
})
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assing(ECMASript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) //Concatena os objetos

Object.freeze(obj)
obj.c = 1234
console.log(obj)