/*
PARTE 1
*/

const colaboradores = [
    {name: 'Juca', idade: 25, cargo: 'front-end'},
    {name: 'Márcia', idade: 23, cargo: 'back-end'},
    {name: 'Vitória', idade: 28, cargo: 'designer'},
    {name: 'Fernando', idade: 19, cargo: 'estagiario'},
    {name: 'Fabiane', idade: 25, cargo: 'back-end'},
    {name: 'Jéssica', idade: 23, cargo: 'front-end'}    
]

/*
a. Crie e imprima no console um objeto que possui a quantidade de colaboradores em cada cargo. Saída esperada: 
{'front-end': 2, 'back-end': 2, 'designer': 1, 'estágiario': 1}.
*/
const newColab = colaboradores.reduce(function (arr, colab) {
  // console.log(arr)
  if (colab.cargo in arr) {
    arr[colab.cargo]++
  } else {
    arr[colab.cargo] = 1
  } 
  return arr
}, {})
// console.log("Quantidade de colaboradores :", newColab)



/*
b. Imprima no console o array ordenado por idade de forma decrescente
*/
const ordena = colaboradores.sort((x, y) => y.idade - x.idade)
// console.log("Array ordenado: ", ordena)



/*
c. Imprima no console o array colaboradores ordenado por cargo, sendo a ordem: estagiario (1º), front-end (2º), 
back-end (3º), designer (4º).
*/
const order = { 'estagiario': 0, 'front-end': 1, 'back-end': 2, 'designer': 3 }
const orderingColab = colaboradores.sort(
  (a, b) => order[a.cargo] - order[b.cargo]
  )
// console.log("Ordenado por cargo: ", orderingColab)



/*
d. Imprima no console o array colaboradores ordenado por idade de forma crescente e, em caso de empate, o desempate 
deve ser feito por ordem de cargo (ordem: estagiario (1º), front-end (2º), back-end (3º), designer (4º))
*/

// const orderedByAge = colaboradores.sort((a, b) => order[a.idade] - order[b.idade])
// console.log(colaboradores)
// console.log("Ordenar por idade: ", orderedByAge)



/*
PARTE 2
Utilizando o array installments, que representa parcelas, realize os seguintes exercícios:
*/
const installments = [
    {installment_number: 1, value: 123.45, status: 'Pago'},
    {installment_number: 2, value: 139.88, status: 'Pago'},
    {installment_number: 3, value: 123.45, status: 'Pago'},
    {installment_number: 4, value: 182.37, status: 'Aberto'},
    {installment_number: 5, value: 133.93, status: 'Aberto'}
]

/*
a. Imprima no console o valor total das parcelas.
*/
const totalValue = installments.reduce((acc, elem) =>{
    return acc + elem.value
}, 0)
// console.log('Total: ', totalValue.toFixed(2))



/*
b. Crie e imprima no console um objeto que possui o valor total em aberto e o valor total já pago. 
Saída esperada: {total_paid: 386.78, total_open: 316.3}.
*/
// const total_paid = installments.filter(elem => elem.status === 'Pago').reduce((acc, elem) => {
//   return acc + elem.value
// }, 0)
// console.log(installments)
// const total_open = installments.filter(elem => elem.status === 'Aberto').reduce((acc, elem) => {
// return acc + elem.value
// }, 0)

const instalFormated = installments.reduce((acc, elem) => {
  elem.status === "Pago" ? acc.total_paid += elem.value : acc.total_open += elem.value
  return acc
}, {total_paid: 0, total_open: 0})

console.log(instalFormated)
// console.log(`{ total_paid: ${total_paid}, total_open: ${total_open}}`)



/*
c. Imprima no console o array de parcelas ordenado por valor de forma decrescente.
*/
const orderedInstallmentsDescending = installments.sort((a, b) => b.value - a.value)
// console.log("Ordem de parcelas: ", orderedInstallmentsDescending)



/*
d. Imprima no console o array de parcelas ordenado por valor de forma crescente e, em caso de empate, o desempate deve ocorrer
pelo número da parcela de forma decrescente. 
*/
const ordereInstallmentsAscending = installments.sort((a, b) => a.value - b.value)
function changePos(arr, from, to) {
  arr.splice(to, 0, arr.splice(from, 1)[0])
  return arr
}
changePos(ordereInstallmentsAscending, 1, 0)
console.log(ordereInstallmentsAscending)
