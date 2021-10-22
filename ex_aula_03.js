// 1. Construa um objeto chamado myUser que possui as propriedades:
// name, age e email, coloque valores de sua escolha nessas propriedades
// e imprima no console.

const myUser = {
    name: "Francisco",
    age: 35,
    email: "frsancho1985@gmail.com"
}

console.log(myUser)


// 2. Dado o array ['a', 'b', 'c', 'd'] imprima no console o valor do terceiro elemento.

const array = ['a', 'b', 'c', 'd']

console.log(array[2])


// 3. Dado o objeto dev {name: "Juca", projects:[{name:"Projeto 1", start:"01/02/20201"},{name:"Projeto 2", start:"03/03/2021"}]},
// imprima no console:
// a. O nome do dev.
// b. O segundo projeto.
// c. O nome do primeiro projeto.

const dev = {
    name: "Juca",
    projects: [
        {
            name: 'Projeto 1',
            start: '01/02/2021'
        },
        {
            name: 'Projeto 2',
            start: '03/03/2021'
        }
    ]
}

console.log(dev.name)
console.log(dev.projects[1])
console.log(dev.projects[0].name)


// 4. Percorra o array [1, -22, 3, 4, -5] e modifique os valores, multiplicando cada um por 10.

let array2 = [1, -22, 3, 4, -5]

for (let i = 0; i <5; i++) {
    array2[i] = array2[i] * 10
}

console.log(array2)
