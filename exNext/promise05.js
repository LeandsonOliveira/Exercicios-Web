function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if(Math.random() < chanceErro) {
      reject('Ocorreu um erro')
    } else {
      resolve(valor)
    }
  })
}

funcionarOuNao('Testando...', 0.4)
  .then(v => console.log(`Valor: ${v}`))
  .catch(err => console.log(`Erro: ${err}`))
  .then(() => console.log('Fim!'))