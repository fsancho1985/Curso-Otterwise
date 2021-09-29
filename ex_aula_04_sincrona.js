// // 1.
// let value1 = 3
// let value2 = 12
// let value3

// console.log('Valor 1 é: ' + value1)
// console.log('Valor 2 é: ' + value2)

// value3 = value1
// value1 = value2
// value2 = value3

// console.log('Valor 1 é: ' + value1)
// console.log('Valor 2 é: ' + value2)
//-------------------------------------------------------------------------------
// // 2.
// let lista = ['C', 'B', 'A']

// let x = lista[0]
// lista[0] = lista[2]
// lista[2] = x

// console.log(lista)
//--------------------------------------------------------------------------------
// 3.
// let listaNumerica = [5, 8]
// let listaNumerica2 = [19,2]

// function orderList(list) {
//     if(list[0] > list[1]){
//         a = list[1]
//         // console.log(a)
//         b = list[0]
//         // console.log(b)
//         list = [a, b]
//         // console.log(list)
//     } else {
//         a = list[0]
//         // console.log(a)
//         b = list[1] 
//         // console.log(b)
//         list = [a, b]
//         // console.log(lista)
//     }   
//     return list
// }

// let entrada = [-500,-1000]

// function ordena(arr) {
//     // manipular arr para, se necessário, trocar os elementos de posição
//     if(arr[0] > arr[1]) {
//         let aux = arr[0]
//         arr[0] = arr[1]
//         arr[1] = aux
//     }
//     return arr
// }

// console.log(ordena(entrada))

// console.log(orderList(listaNumerica))
// console.log(listaNumerica)

// console.log(orderList(listaNumerica2))
// console.log(listaNumerica2)
//---------------------------------------------------------------------------------
// 4. 
// const arrNumbers = [5, 8, 13, 1, 7]

// // let menor = 100000
// let menorIndex = 0
// for (let i = 0; i < 5; i++) {
//     if (arrNumbers[i] < arrNumbers[menorIndex]) {
//         menorIndex = i
//     }
// }
// console.log(arrNumbers[menorIndex])

// for(let i=0; i<5; i++) {
//     if(arrNumbers[i] < menor) {
//         menor = arrNumbers[i]
//     }
// }
// console.log(menor)

const arrNumbers = [5, 8, 13, 1, 7]


// function order2(arr) {
//     let auxiliar
//     for (let i = 0; i < arr.length; i+1) {
//     if (arr[i] < arr[i+1]) {
//     auxiliar = i
//     }
//     return auxiliar
//     }
//     console.log(auxiliar)
//     }
    
// console.log(order2(arrNumbers))