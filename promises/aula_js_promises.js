const value = '10'

/*
Função anônima:
const p1 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof value !== 'number') {
                reject('Argumento não é um número')
            }
            resolve(value * 10)
        }, 2000)
    })
}
Arrow Function:
const p1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof value !== 'number') {
            reject('Argumento não é um número')
        }
        resolve(value * 10)
    }, 2000)
})

*/

function p1 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof value !== 'number') {
                reject('Argumento não é um número')
            }
            resolve(value * 10)
        }, 2000)
    })
}

p1().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
}).finally(() => {
    console.log('Final')
})