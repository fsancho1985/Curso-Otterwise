/*
1 - Dado o array de objetos de usuários [
    {name: 'Juca', idade: 17}, 
    {name: 'Fabiane', idade: 23}, 
    {name: 'Matheus', idade: 25}, 
    {name: 'Jéssica', idade: 16}
] 
imprima no console somente o nome dos usuários maiores de idade.
*/
const users = [
    {name: 'Juca', idade: 17}, 
    {name: 'Fabiane', idade: 23}, 
    {name: 'Matheus', idade: 25}, 
    {name: 'Jéssica', idade: 16}
]
const [{name: nameA}, {name: nameB}] = users.filter(user => user.idade >= 18)
console.log(nameA, nameB)

// const userName = filteredUsers.reduce((acc, user) => {
//     return acc + ' ' + user.name
// }, '')
// // console.log(userName)

/*
2 - Crie uma função que recebe qualquer número de argumentos e retorna um array com os argumentos somente pares.
*/
function pares(...arr) {
    return arr.filter(n => n % 2 ===0)
}
const numeros1 = pares(1, 3, 4, 6, 10, 25, 30, 2159, 120970)
console.log(...numeros1)

/*
3 - Refatore o seguinte algoritmo utilizando os conceitos estudados em aula:
*/
const entrada = [
    { product: 'banana kg', price: 2.25 },
    { product: 'arroz 1kg', price: 6.48 },
    { product: 'pão francês kg', price: 12 },
    { product: 'café solúvel 50g', price: 3.59 },
  ]
  
//   const saida = entrada.reduce((acc, {product, price}) => {
//     // acc[produto.product] = produto.price
//     return {...acc, [product]: price}
//   }, {})
   
const saida = entrada.reduce((acc, {product, price}) => ({...acc, [product]: price}), {})

console.log(saida)

