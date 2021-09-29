import fetch from 'node-fetch'
import {input, print} from 'console-input'
import format, { intervalToDuration } from 'date-fns'

//45.997.418/0001-53

const entradaCnpj = input('Digite o CNPJ: ')
// print(entradaCnpj)

// let opcao = ''
function menu(){
    const menu = [
        '1. Razão Social e Nome Fantasia da empresa',
        '2. Atividades da empresa',
        '3. Endereço da empresa',
        '4. Situação da empresa',
        '5. Tempo de operação da empresa',
        '6. Sair',
    ]
    
    menu.forEach(e =>{
        console.log(e)
    })
}
let opcao = ''
while (opcao != '6') {
    menu()
    opcao = input('Opcao: ')
    const cnpj = await pegaCNPJ(entradaCnpj)
    opcoes(opcao, cnpj)
}
// print(menu[opcao - 1])
// pegaCNPJ(entradaCnpj)
// opcoes(pegaCNPJ)



async function pegaCNPJ(cnpj) {
    try {
        const resp = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj.replace(/\D/g, '')}`)
        const data = await resp.json()
        // const newData = [...resp]
        // if(opcao === '1') console.log(data.nome)
        // if(opcao === '2') console.log(data.atividade_principal.text)
        // if(opcao === '3') console.log(data.logradouro, data.numero, data.municipio, data.uf)
        // if(opcao === '4') console.log(data.situacao)
        // if(opcao === '5') {
        //     let dataEmpresa = new Date(data.abertura.split("/").reverse().join("-"))
        //     let dataAtual = new Date()
        //     let tempoDeDuracao = intervalToDuration({start: dataEmpresa, end: dataAtual})
        //     console.log('Tempo de duracao: ',tempoDeDuracao.years, ' anos')
        // }
        // if(opcao === '6')
        // console.log('retorno funcao pega: ', data)
        return data
    } catch (e) {
        console.log("deu ruim")
        console.log(e.message)
    }
}

function opcoes(opc, data) {
    // console.log(data)
    if(opc === '1') console.log(`Razão Social: ${data.nome}`)
    if(opc === '2') cconsole.log(`Atividades da empresa: ${data.atividade_principal[0].text}, ${data.atividades_secundarias[0].text}`)
    if(opc === '3') console.log(`Endereço da empresa: ', ${data.logradouro}, ${data.numero}, ${data.municipio}`)
    if(opc === '4') console.log(`Situação da empresa: ${data.situacao}`)
    if(opc === '5') {
        let dataEmpresa = new Date(data.abertura.split("/").reverse().join("-"))
        let dataAtual = new Date()
        let tempoDeDuracao = intervalToDuration({start: dataEmpresa, end: dataAtual})
        console.log(`Tempo de duracao: ${tempoDeDuracao.years} anos`)
    }
    // if(opcao === '6')
    //     return
}

// function imprimeOpcao2() {

// }

//console.log(`Atividades da empresa: ${data.atividade_principal[0].text}, ${data.atividades_secundarias[0].text}`)