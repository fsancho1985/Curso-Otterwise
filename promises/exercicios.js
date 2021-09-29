/*
1. Crie três promises utilizando setTimeout: a primeira resolve em 2 segundos, a segunda resolve em 1 segundo e a 
terceira resolve em 3 segundos.
*/
function prom1 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('rejeitar prom1')
            // resolve('Resolveu prom1')
        }, 2000)
    })
}

function prom2 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('rejeitar prom2')
            resolve('Resolveu prom2')
        }, 1000)
    })
}

function prom3 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('rejeitar prom3')
            resolve('Resolveu prom3')
        }, 3000)
    })
}

// Promise.all([prom1(), prom2(), prom3()]).then(resp => {
//     console.log(resp)
// }).catch(error => {
//     console.log(error)
// }).finally(() => {
//     console.log('Terminou')
// })

/*
2. Crie uma função assíncrona que realiza um Promise.all entre as três promises criadas no exercício 1, essa função
deve possuir tratamento de erros.
*/
// arrow function
// const execProm = async () => {
//     const resp = await prom1()
//     console.log(resp)
// }
// função anônima
// const execProm = async function() {
//     const resp = await prom1()
//     console.log(resp)
// }
// função
async function execProm() {
    try {
        const resp = await Promise.all([prom1(), prom2(), prom3()])
        console.log('try: ', resp)
    } catch (error) {
        console.log('catch: ', error)
    } finally {
        console.log("Terminou")
    }
}

// execProm()

/*
3. Crie uma função assíncrona que realiza um Promise.race entre as três promises criadas no exercício 1,
essa função deve possuir tratamento de erros e o bloco finally.
*/
async function execProm() {
    try {
        const resp = await Promise.race([prom1(), prom2(), prom3()])
        console.log('try: ', resp)
    } catch (error) {
        console.log('catch: ', error)
    } finally {
        console.log("Terminou")
    }
}

execProm()