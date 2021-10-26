function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula01 = new Aula('Bem Vindo', 123)
const aula02 = new Aula('Até Breve', 456)
console.log(aula01, aula02)

//Simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj 
}

const aula03 = novo(Aula, 'Bem vido', 123)
const aula04 = novo(Aula, 'Até Breve', 456)

console.log(aula03, aula04)