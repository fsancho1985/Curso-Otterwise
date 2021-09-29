/*
1 - Crie um algoritmo que tem como entrada um array e imprime no console um novo array modificado com somente
os números múltiplos de 5 multiplicados por 10.
Exemplo entrada:
[5, 7, 1, 30, 23, 50, 10]
Exemplo saída:
[50, 300, 500, 100]
*/
const array = [5, 7, 1, 30, 23, 50, 10]

const multiplos = array.filter(num => {
    if (num % 5 === 0) {
        return num
    } 
})

const multiplos10 = multiplos.map(elem => {
    return elem * 10
})
console.log(multiplos10)

/*
2 - Tendo como entrada um array de números que representam notas de um estudante, calcule e imprima a média no console 
com no máximo duas casas decimais. O array de entrada tem tamanho variável.
Exemplo entrada 1:
[8, 9, 5]
Exemplo saída 1:
7,33
Exemplo entrada 2:
[9, 5, 8, 7, 10]
Exemplo saída 2:
7,8
*/
const notas = [9,5,8,7,10]
const media = notas.reduce((acc, elem) =>  acc + elem / notas.length, 0)
// const average = sum / notas.length
// console.log((sum / notas.length).toFixed(2))
console.log(media.toFixed(2))

/*
3 - Dado um array de usuários (objetos) com as propriedades name e address (endereço), imprima no console uma 
string que identifica os usuários com cadastro completo (name e address preenchido).
Exemplo entrada:
[
    {name: ‘Érico’, address: ‘Rua das flores nº 1’}, 
    {name: ‘Juca’, address: null}, 
    {name: ‘Patrícia’, address: ‘Alameda dos anjos nº 9’}, 
    {name: ‘Sérgio’}
]
Exemplo saída:
‘Os usuários Érico, Patrícia, tem cadastro completo.
*/
const usuarios = [
    {name: 'Érico', address: 'Rua das flores nº 1'}, 
    {name: 'Juca', address: null}, 
    {name: 'Patrícia', address: 'Alameda dos anjos nº 9'},
    {name: 'Sérgio'}
]
const checkAddress = usuarios.filter(usuario => {
    return usuario.name && usuario.address
})
const addressVerified = checkAddress.reduce((acc, usuario) => {
    return acc + usuario.name + ', '
}, '')
console.log(`Os usuários ${addressVerified}tem cadastro completo.`)
