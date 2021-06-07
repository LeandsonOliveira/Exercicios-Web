const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//Remove o ultimo
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona no final
console.log(pilotos)

pilotos.shift() //Remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona no inicio
console.log(pilotos)

//Splice pode adicionar e remover
//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//Remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)