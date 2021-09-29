import { isCNPJ } from './module.js'

/*
1 - Crie um algoritmo que valida um CNPJ. Separe as partes do código em funções reusáveis e módulos com o
 mesmo contexto. Referência para cálculo de validação do CNPJ: http://www.macoratti.net/alg_cnpj.htm
*/


console.log(isCNPJ('68.014.742/0001-00'))
console.log(isCNPJ('68.014.742/0001-01'))
console.log(isCNPJ('11.222.333/0001-81'))
console.log(isCNPJ('11.222.333/0001-82'))