// Importando as funções
// import { filtraCliente, filtraCompra, dateChange, order, desorder } from '../formatters/formatters.js'

export function sum(p) {
    const total = p.reduce((acc, elem) => acc + elem.total, 0)
    return total
}

// export function show(p, q, r, s, t, u) {
//     console.log(`Cliente: ${p.id} - ${p.name}`)
//     console.log(`Compra em ${q[0].data} no total de R$${q[0].total.toFixed(2)}`)
//     console.log(`Compra em ${q[1].data} no total de R$${q[1].total.toFixed(2)}`)
//     console.log(`Total do cliente: R$${r.toFixed(2)}`)
//     console.log(`------------------------------------------------------------`)
//     console.log(`Cliente: ${s.id} - ${s.name}`)
//     console.log(`Compra em ${t[0].data} no total de R$${t[0].total.toFixed(2)}`)
//     console.log(`Compra em ${t[1].data} no total de R$${t[1].total.toFixed(2)}`)
//     console.log(`Total do cliente: R$${u.toFixed(2)}`)
// }
