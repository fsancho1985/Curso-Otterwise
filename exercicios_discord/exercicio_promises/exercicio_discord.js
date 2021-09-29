/*
1 - Utilizando a função à seguir que retorna uma promise:
Crie um algoritmo que chama a função consultaCnpj e imprime seu resultado no console. 
Este algoritmo deve ser capaz de tratar erros e sincronizar o código.
*/
const consultaCnpj = cnpj => {
    const timer = (Math.floor(Math.random() * 4) + 1) * 500 // resulta em [500, 1000, 1500, 2000] segundos
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const CNPJ_LENGTH = 14
        const sanitazedCnpj = cnpj.replace(/\D/g, '') // Remove todos os símbolos não numéricos ReGex
        sanitazedCnpj.length === CNPJ_LENGTH
          ? resolve(`${cnpj} é um CNPJ válido`)
          : reject(`${cnpj} não é um CNPJ válido`)
      }, timer)
    })
  }

const asyncConsulta = async () => {
    try {
        const validCnpj = await Promise.all([
        consultaCnpj('23456785701721'),
        consultaCnpj('23456785701147')
        ])
        console.log(validCnpj[0])
        console.log(validCnpj[1])
    } catch (error) {
        console.log(error)
    }
}

asyncConsulta()