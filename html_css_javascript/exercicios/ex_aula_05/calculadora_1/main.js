function operation() {
    const firstNumber = Number(document.querySelector('#first_number').value)
    const secondNumber = Number(document.querySelector('#second_number').value)
    const operator = document.querySelector('#operations').value
    const show = document.querySelector('#result')
    const result = operate(operator, firstNumber, secondNumber)
    // alert(result)
    show.textContent = `Resultado: ${result}`
}

function operate(op, n1, n2) {
    if(op === 'soma') {
        return n1 + n2
    } else if (op === 'subtracao') {
        return n1 - n2
    } else if (op === 'multiplicacao') {
        return n1 * n2
    } else if(op === 'divisao') {
        return n1 / n2
    }
}
