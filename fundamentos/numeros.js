const peso1= 2
const peso2= Number('5')
let e= 'leandson'
console.log(e)
console.log(Number.isInteger(peso1))

const av1= 8.789
const av2= 4.5

const total= av1*peso1+av2*peso2
const media= total/(peso1+peso2)

console.log(media)
console.log(media.toFixed(2)) //numero de casas decimais
console.log(media.toString(2)) //binario->(2)
console.log(media.toPrecision(3))
console.log(typeof media)