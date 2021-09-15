/*
1. Utilizando o array colaboradores e os métodos estudados (buscando sempre o método mais assertivo para cada um), realize os seguintes
exercícios:
a. Crie e imprima no console um array somente com os nomes.
b. Crie e imprima no console um array com os colaboradores que são front-end.
c. Imprima no console o primeiro colaborador maior de 23 anos.
d. Imprima no console se todos os colaboradores do array maiores de 18 anos.
e. Imprima no console a soma da idade de todos os colaboradores.
f. Imprima no console o array colaboradores ordenado por idade de forma crescente
*/
const colaboradores = [
    {name: 'Juca', idade: 25, cargo: 'front-end'},
    {name: 'Márcia', idade: 23, cargo: 'back-end'},
    {name: 'Vitória', idade: 28, cargo: 'designer'},
    {name: 'Fernando', idade: 19, cargo: 'estagiario'},
    {name: 'Fabiane', idade: 25, cargo: 'back-end'},
    {name: 'Jéssica', idade: 23, cargo: 'front-end'}    
]

//a.
const namesArray = colaboradores.map(elem =>{
    return elem.name
})
console.log(namesArray)

//b.
const cargoArray = colaboradores.filter(elem => {
    return elem.cargo === 'front-end'
})
console.log(cargoArray)

//c. 
const maior23 = colaboradores.find( elem => {
    return elem.idade > 23
})
console.log(maior23)

//d.
const maiores18 = colaboradores.filter(elem => {
    return elem.idade > 18
})
console.log(maiores18)

//e.
const somaIdades = colaboradores.reduce((acc, elem) => {
    return acc + elem.idade
},0)
console.log(somaIdades)

//f.
const sortedColaboradores = colaboradores.sort((a,b) => {
    if (a.idade - b.idade < 0) return -1
    if (a.idade - b.idade > 0) return 1
    return 0
})
console.log(sortedColaboradores)