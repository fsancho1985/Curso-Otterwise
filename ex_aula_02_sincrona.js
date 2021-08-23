const nome = 'Francisco'
const sobrenome = 'Sancho'
const idade = 35
const responsavel = 'Maria'
const nota1 = 6
const nota2 = 5
const nota3 = 6

// função média do estudante
function media(a, b, c) {
    return (nota1 + nota2 + nota3)/3
}
console.log(media(nota1, nota2, nota3).toFixed(2))

// função para verificar aprovação do estudante
function checkGraduate(x) {
    if (x < 4){
        return 'Reprovado'
    } else if (x >= 6) {
        return 'Aprovado'
    } else if (x >= 4) {
        return 'Em exame'
    }
}

console.log(checkGraduate(media(nota1, nota2, nota3)))

// função que informa se o aluno está ou não aprovado
function inform(x) {
    if (idade < 18) {
        if (checkGraduate === 'Aprovado') {
            return responsavel + 'O aluno ' + nome + '' + sobrenome + ' está APROVADO'
        } else if (checkGraduate === 'Reprovado') {
            return responsavel + ', o aluno ' + nome + '' + sobrenome + ' está REPROVADO'
        } else if (checkGraduate === 'Em exame') {
            return responsavel + ', o aluno ' + nome + '' + sobrenome + ' está EM EXAME'
        }
    } else {
        if (checkGraduate === 'Aprovado') {
            return nome + '' + sobrenome + ' está APROVADO'
        } else if (checkGraduate === 'Reprovado') {
            return nome + '' + sobrenome + ' está REPROVADO'
        } else if (checkGraduate === 'Em exame') {
            return nome + '' + sobrenome + ' está EM EXAME'
        }
    }
}

console.log(inform(checkGraduate()))