// Importando as funções

import { filtraCliente, filtraCompra, dateChange, order, desorder } from './formatters/formatters.js'

// Importando função reduce

import { sum, show } from './math/math.js'

// Importando const clientes
// import { clientes } from './formatters/formatters.js'

const newClientes = filtraCliente(1)

const newCompras = filtraCompra(1)

const comprasOrdered = desorder(order(dateChange(newCompras)))

/*----------------------------------------------------------------------------------------------------------*/

const newClientes2 = filtraCliente(2)

const newCompras2 = filtraCompra(2)

const comprasOrdered2 = desorder(order(dateChange(newCompras2)))

const totalCliente1 = sum(comprasOrdered)

const totalCliente2 = sum(comprasOrdered2)

show(newClientes, comprasOrdered, totalCliente1, newClientes2, comprasOrdered2, totalCliente2)