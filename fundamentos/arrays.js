const valores= [1.1, 2.2, 3.3]
console.log(valores[0])
console.log(valores[4])

valores[4]=5.5
console.log(valores)
console.log(valores.length) //tamanho do array

valores.push({id:3}, false, null,'teste')
console.log(valores)
console.log(valores.pop())

delete valores[1]

console.log(valores)

console.log(typeof valores)
