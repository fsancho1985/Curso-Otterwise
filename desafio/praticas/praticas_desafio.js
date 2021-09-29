/*
1 - Dado o array [{product: 'banana kg', price: 2.25}, {product: 'arroz 1kg', price: 6.48}, 
{product: 'pão francês kg', price: 12}, {product:'café solúvel 50g', price: 3.59}], 
crie um algoritmo que transforma esse array em um objeto dicionário, com a propriedade sendo o 
nome do produto e o valor o preço do produto.
Saída esperada:
{
  'banana kg': 2.25,
  'arroz 1kg': 6.48,
  'pão francês kg': 12,
  'café solúvel 50g': 3.59
}
*/
const compras = [
    {product: 'banana kg', price: 2.25}, 
    {product: 'arroz 1kg', price: 6.48}, 
    {product: 'pão francês kg', price: 12}, 
    {product:'café solúvel 50g', price: 3.59}
]
const newCompras = compras.reduce((acc, produto) => {
    acc[produto.product] = produto.price
    return acc
}, {})
console.log(newCompras)

/*
2 - Dado um array de números ordene eles de forma decrescente.
Exemplo entrada:
[ 12, 32, 54, 6, 8, 89, 64, 64, 6 ]

Exemplo saída:
[ 89, 64, 64, 54, 32, 12, 8, 6, 6 ]
*/
const numeros = [ 12, 32, 54, 6, 8, 89, 64, 64, 6 ]
// const sortedNumeros = numeros.sort((x, y) => {
//     if (x-y<0) return 1
//     if (x-y>0) return -1
//     return 0
// })

const sortedNumeros = numeros.sort((a, b) => b - a)
console.log(sortedNumeros)  