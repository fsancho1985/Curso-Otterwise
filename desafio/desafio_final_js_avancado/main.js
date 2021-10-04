// Importando as funções
import { buscaCliente } from './formatters/formatters.js'

/**
 * Verificar os ids dos clientes
 *  acessar data.json 
 *  verificar o array clients
 *  identificar os ids
 * chamar a função buscaCliente com os ids identificados
 */

import data from './data.json'

data.clients.forEach(client => {
    buscaCliente(client.id)    
});