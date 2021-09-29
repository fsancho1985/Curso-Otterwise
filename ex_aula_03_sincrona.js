// 1.
const frutas = ['maçã', 'uva', 'morango']

for (i=0; i < 3; i++) {
    console.log(frutas[i])
}

// 2. 
const estoque = {
    categoria: 'frutas',
    produtos: ['maçã', 'uva', 'morango'],
    quantidades: [10, 3, 0]
}

// for (i = 0; i < 3; i++) {
//     console.log('A quantidade de ' + estoque.produtos[i] + ' é ' + estoque.quantidades[i])
// }

function corrige(info) {
    for (let i = 0; i < 3; i++) {
        info.produtos[i] = {
            nome: info.produtos[i], 
            quantidade: info.quantidades[i]
        }
    }
    delete info.quantidades
    return info
}

corrige(estoque)
console.log(estoque)

// for (i = 0; i < 3; i++) {
//     estoque.produtos[i] = {nome: estoque.produtos[i], quantidade: estoque.quantidades[i]}
// }
// console.log(estoque)