const value = 10

const p1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof value !== 'number') {
            reject('Argumento não é um número')
        }
        resolve(value * 10)
    }, 2000)
})

const p2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolve p2')
    }, 1000)
})

const p3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolve p3')
    }, 3000)
})

// const p3 = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Reject p3')
//     }, 3000)
// })

Promise.all([p1(), p2(), p3()]).then(resp => {
    console.log('then: ', resp)
}).catch(error => {
    console.log('catch: ', error)
}).finally(() => {
    console.log('Final')
})

// Promise.race([p1(), p2(), p3()]).then(resp => {
//     console.log('then: ', resp)
// }).catch(error => {
//     console.log('catch: ', error)
// }).finally(() => {
//     console.log('Final')
// })