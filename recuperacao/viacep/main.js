import { input } from 'console-input'
import fetch from 'node-fetch'

// let { input } = require('input')

/**
 * 1 - Utilizando o pacote console-input crie um programa que pede para o usuário dois 
 * número e imprime a soma no console.
 */

// const num1 = Number(input('Digite o 1º número: '))
// const num2 = Number(input('Digite o 2º número: '))

// console.log(num1 + num2)

/**
 * 2 - Utilizando os pacotes console-input e node-fetch crie um programa que recebe como entrada um CEP e 
 * imprime no console a informação “endereço, bairro, cidade/UF”, utilizando essas informações da resposta da API viacep.
 */


async function devolveCEP(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep.replace(/\D/g,'')}/json/`)
        const data = await response.json()
        if(!data.logradouro || !data.bairro || !data.localidade || !data.uf) {
            console.log('Erro')
            return   
        } 
        console.log(`Rua: ${data.logradouro}, Bairro: ${data.bairro}, Cidade: ${data.localidade}, Estado: ${data.uf}`)
    } catch (e) {
        console.log('Tem problema aí')
    }
}

const solicitaCEP = input('Digite o cep desejado: ')
devolveCEP(solicitaCEP)

