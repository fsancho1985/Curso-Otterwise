/**
 * 1 - Faça um programa que armazene duas variáveis distintas, um nome e um sobrenome, 
 * e imprima no console o nome completo.
 */
const name = 'Francisco'
const surname = ' Sancho'
const fullName = name + surname
// console.log(fullName)
// console.log(`${name} ${surname}`)

/**
 * 2 - Calcule a média de consumo de combustível utilizada em uma viagem e o tempo levado durante a viagem.
 * Você deve imprimir no console esses dois valores:
 */
const distanciaKm = 240
const velocidadeKmH = 80
const combustivel = 20

function consumo(distancia, combustivel) {
    return distancia / combustivel
}

function duracao(distancia, velocidade) {
    return distancia / velocidade
}

console.log(`Média de consumo: ${consumo(distanciaKm, combustivel)} km/l`)
console.log(`Tempo de viagem: ${duracao(distanciaKm, velocidadeKmH)} horas`)

/**
 * 3 - Uma imobiliária paga às pessoas corretoras de imóveis um salário fixo por mês e uma comissão
 * de acordo com o valor de vendas realizado por elas. Faça um programa que calcule e imprima no console
 * o valor total recebido pela pessoa corretora de imóveis no mês.
 */
const salario = 2000
const vendas = 30000
const comissao = 1
const salario1 = 5000
const vendas1 = 100000
const comissao1 = 10

function calculaSalario(x, y, z) {
    return x + (y * (z/100))
}

// console.log(`Valor mensal: ${calculaSalario(salario, vendas, comissao)}`)
// console.log(`Valor mensal: ${calculaSalario(salario1, vendas1, comissao1)}`)

/**
 * 4 - Tendo como informações um nome e uma idade, faça um programa que imprima no console se a 
 * pessoa é maior ou menor de idade.
 */
const nome1 = 'Valter'
const idade1 = 23
const nome2 = 'Juliana'
const idade2 = 12

function verificaMaioridade(x) {
    if (x>=18) {
        return 'é maior de idade'
    } else {
        return 'é menor de idade'
    }
}

// console.log(`${nome1} ${verificaMaioridade(idade1)}`)
// console.log(`${nome2} ${verificaMaioridade(idade2)}`)

/**
 * 5 - Tendo como informação um número, faça um programa que imprime no console se esse número é par ou ímpar. 
 */
// const numero = 50

function verificaSeEPar(x) {
    if (x === 0) {
        return 'Zero é neutro'
    } else if (x % 2 === 0) {
        return 'É par'
    } else {
        return 'É ímpar'
    }
}

// console.log(verificaSeEPar(50))
// console.log(verificaSeEPar(17))
// console.log(verificaSeEPar(0))

/**
 * 6 - Tendo como informação os três lados de um triângulo faça um programa que 
 * imprima na tela se ele é EQUILÁTERO, ISÓSCELES ou ESCALENO.
 */
function verificaTriangulo(l1, l2, l3) {
    if (l1 === l2 & l2 === l3) {
        return 'Triângulo Equilátero'
    } else if (l1 === l2 || l1 === l3 || l2 === l3) {
        return 'Triângulo Isóceles'
    } else if (l1 != l2 & l2 != l3 & l1 != l3) {
        return 'Triângulo Escaleno'
    }
}

// console.log(verificaTriangulo(10, 5, 10))
// console.log(verificaTriangulo(2, 1, 5))

/**
 * 7 - Tendo como informação dois números, faça um programa que imprima na tela qual 
 * deles é o maior e qual deles é o menor. Caso os números sejam iguais, informe que eles são iguais.
 */
const numero1 = 2
const numero2 = 5
const numero3 = 7
const numero4 = 7

function verificaIgualdade(x,y) {
    if (x === y) {
        return 'São iguais'
    } else if (x > y) {
        return x + ' é maior que ' + y
    } else if (x < y) {
        return y + ' é maior que ' + x
    }
}

console.log(verificaIgualdade(numero1,numero2))
console.log(verificaIgualdade(numero3,numero4))
console.log(verificaIgualdade(numero2,numero1))