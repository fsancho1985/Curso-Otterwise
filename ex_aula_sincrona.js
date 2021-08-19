let nome = 'Francisco'
let sobrenome = 'Sancho'
let diaNasc = 23
let mesNasc = 11
let anoNasc = 1985
let mail = 'frsancho1985@gmail.com'
let ddd = '(71)'
let tel = '99130-9384'
let namoro = false
let casamento = false

const nomeCompleto = nome + sobrenome
const idade = 35
const nascimento = diaNasc + '/' + mesNasc + '/' + anoNasc
const email = mail
const telefone = ddd + '' + tel

console.log('Nome completo: ' + nomeCompleto)
console.log('Idade: ' + idade)
console.log('Data de Nascimento: ' + nascimento)
console.log('E-mail: ' + email)
console.log('Telefone: ' + telefone)
console.log('Está em um relacionamento? ' + (namoro && casamento))
