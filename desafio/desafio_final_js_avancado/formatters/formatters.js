// Importando data.json
import data from '../data.json'

// Importando função soma
import {sum} from '../math/math.js'

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

// Função para mudar formato da Data
export function dateChange(arr){
    const newArr = arr.map((elem) => ({...elem, data: new Date((`${elem.data.slice(-4)}, ${elem.data.slice(-7,-5)}, ${elem.data.slice(0,2)}`))}))
        // console.log(arr)
        return newArr
}

// Organizando array por ordem crescente de datas
export function order(arr){
    const newArr = [...arr].sort((a, b) => a.data - b.data)
    return newArr
}

// Formatando data para padrão Brasil
export function formatDate(arr) {
    const comprasOrdered = arr.map((elem) => ({...elem, data: format(new Date(elem.data), 'dd/MM/yyyy')}))
    return comprasOrdered
}

// Busca cliente e dados pelo ID
export function buscaCliente(id) {
    const newClientes = filtraCliente(id)
    const newCompras = filtraCompra(id)
    const comprasOrdered = formatDate(order(dateChange(newCompras)))
    const totalCliente = sum(comprasOrdered)
    console.log(`Cliente: ${newClientes.id} - ${newClientes.name}`)
    for(let i = 0; i < comprasOrdered.length; i++) {
        console.log(`Compra em ${comprasOrdered[i].data} no total de R$${comprasOrdered[i].total}`)
        // console.log(`Compra em ${comprasOrdered[0].data} no total de R$${comprasOrdered[0].total}`)
    }
    console.log(`Total do cliente: R$${totalCliente}`)
    console.log('-------------------------------------------------')
}