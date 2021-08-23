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

console.log('Nome completo: ' + nome + ' ' + sobrenome)
console.log('Idade: ' + (2021 - ano))
console.log('Data de Nascimento: ' + dia + '/' + mes + '/' + ano)
console.log('E-mail: ' + email)
console.log('Telefone: (' + ddd + ')' + telefone)
console.log('Está em um relacionamento? ' + (namoro || casamento))
