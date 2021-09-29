// 1. Utilizando o objeto user, realize os seguintes exercícios:
const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
        rua: 'Rua central',
        numero: 1,
    },
    projetos: ['Projeto 1', 'Projeto 2']
}



/*
a. Desestruture e imprima no console o nome do usuário.
*/
const {nome} = user
// console.log(nome)



/*
b. Desestruture e imprima no console a rua.
*/
// const {endereco} = user
// const {rua} = endereco
const {endereco: {rua},} = user
// console.log(rua)



/*
c. Desestruture e imprima no console os projetos.
*/
// const {projetos: projects} = user
// const [proj1, proj2] = projects
// console.log(`${proj1} e ${proj2}`)



/*
d. Desestruture e imprima a segunda posição da propriedade projetos.
*/
// const {projetos} = user
// const [p1, p2] = projetos
// console.log(`${p2}`)



// 2. Utilizando o array students realize os seguintes exercícios:
const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
]

/*
a. Desestruture e imprima no console o primeiro elemento do array.
*/
const [a] = students
// console.log(a)


/*
b. Desestruture e imprima no console o terceiro elemento do array.
*/
const [ , , c] = students
// console.log(c)


/*
c. Desestruture e imprima no console o nome do segundo estudante do array.
*/
const [ , nome2] = students
const {name} = nome2
// console.log(name)



// 3. Crie uma função que pode receber qualquer número de parâmetros e imprime eles separadamente no console.
function varios(...elem) {
    return elem
}
// console.log(varios(1, 2, 3, 4, 5, 6, 7, 8, 9, 'jose', 'joao', 'maria'))

// 4. Crie uma função que recebe um objeto como parâmetro, desestrutura a propriedade nome desse objeto e imprime
// no console (realize a desestruturação nos próprios parâmetros).
const pessoa = {
    name: 'Fulano',
    age: 30,
    job: 'Dev'
}
const restName = (name) => {
    console.log(name)
}
// restName(pessoa.name)


// 5. Crie uma função que recebe dois objetos e retorna um novo objeto que é a combinação desses dois objetos.
// Não utilize o método Object.assign.
const humano1 = {
    name: 'Fulano',
    age: 30,
    job: 'Dev'
}

const humano2 = {
    name: 'Beltrano',
    age: 45,
    job: 'Fullstack'
}

function concatenaObj (obj1, ...obj2) {
    console.log(obj1, ...obj2)
}
// concatenaObj(humano1, humano2)




// 6. Crie uma função que recebe dois arrays e retorna um novo array que é a concatenação desses dois arrays.
function concatArr (arr1, arr2) {
    arr3 = [...arr1, ...arr2]
    console.log(arr3)
}

const lista1 = ['teste1', 'teste2', 1, 2, 3]
const lista2 = [4, 5, 6, 'teste3', 'teste4']

// concatArr(lista1, lista2)