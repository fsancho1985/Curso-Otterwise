// let nome = 'Francisco'
// let sobrenome = 'Sancho'
// let diaNasc = 23
// let mesNasc = 11
// let anoNasc = 1985
// let mail = 'frsancho1985@gmail.com'
// let ddd = '71'
// let tel = '99130-9384'
// let namoro = false
// let casamento = false

const nome = 'Francisco'
const sobrenome = 'Sancho'
const dia = 23
const mes = 11
const ano = 1985
const email = 'frsancho1985@gmail.com'
const ddd = '71'
const telefone = '991309384'
const namoro = false
const casamento = false

// const nomeCompleto = nome + sobrenome
// const idade = 35
// const nascimento = diaNasc + '/' + mesNasc + '/' + anoNasc
// const email = mail
// const telefone = ddd + '' + tel

console.log('Nome completo: ' + nome + ' ' + sobrenome)
console.log('Idade: ' + (2021 - ano))
console.log('Data de Nascimento: ' + dia + '/' + mes + '/' + ano)
console.log('E-mail: ' + email)
console.log('Telefone: (' + ddd + ')' + telefone)
console.log('Está em um relacionamento? ' + (namoro || casamento))
