const devs = [
    {nome: 'Juca', idade: 25, cargo: 'front-end'},
    {nome: 'Márcia', idade: 23, cargo: 'back-end'},
    {nome: 'Victória', idade: 28, cargo: 'designer'}
]

const devs2 = [
    {nome: 'Juca', idade: 25, cargo: 'front-end'},
    {nome: 'Márcia', idade: 23, cargo: 'back-end'},
    {nome: 'Victória', idade: 28, cargo: 'designer'},
    {nome: 'José', idade: 18, cargo: 'back-end'},
    {nome: 'Francisco', idade: 35, cargo: 'full-stack'},
    {nome: 'Fernanda', idade: 27, cargo: 'designer'}
]

function orderUsers(array) {
    for (let i = 0; i < array.length; i++) {
        menor = i
        for (j = i + 1; j < array.length; j++){
            if (array[j].idade < array[menor].idade ) {
                menor = j
            }
        }
        if (i != menor)  {
            [array[i], array[menor]] = [array[menor], array[i]]
        }
    }
    return array
}
orderUsers(devs)
orderUsers(devs2)
console.log(devs)
console.log(devs2)