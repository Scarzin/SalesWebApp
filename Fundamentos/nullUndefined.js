let valor //undefined / nao incializado
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString())

const produto = {}
console.log(produto.preco)
produto.preco = 3.50
console.log(produto) 

produto.preco = null //sem preço
console.log(!!produto.preco) 
console.log(produto)
