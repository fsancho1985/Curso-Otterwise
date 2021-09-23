// Importando data.json

import data from '../data.json'

let copia = {...data}
// console.log(data)

// Importando biblioteca data-fns

import { format } from 'date-fns'

// Refatorar para destructuring assignment
export const clientes = [...data.clients]
export const compras = [...data.purchases]

// Função que filtra cliente pelo ID.
export function filtraCliente(p) {
    const newClientes = clientes.find((elem) => elem.id === p)
    return newClientes
}

// Função que filtra por ID do cliente
export function filtraCompra(p) {
    const newCompras = compras.filter((elem) => elem.client_id === p)
    return newCompras
}

export function dateChange(arr){
    const newArr = arr.map((elem) => ({...elem, data: new Date((`${elem.data.slice(-4)}, ${elem.data.slice(-7,-5)}, ${elem.data.slice(0,2)}`))}))
        // console.log(arr)
        return newArr
}

export function order(arr){
    arr.sort((a, b) => a.data - b.data)
    return arr
}

export function desorder(arr) {
    const comprasOrdered = arr.map((elem) => ({...elem, data: format(new Date(elem.data), 'dd/MM/yyyy')}))
    return comprasOrdered
}
