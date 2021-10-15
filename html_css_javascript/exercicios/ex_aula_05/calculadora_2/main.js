let numbers = null
let operator = null

const operators = [
    {name: 'Soma', symbol: '+', func: (number1, number2) => number1 + number2},
    {name: 'Subtração', symbol: '-', func: (number1, number2) => number1 - number2},
    {name: 'Multiplicação', symbol: '*', func: (number1, number2) => number1 * number2},
    {name: 'Divisão', symbol: '/', func: (number1, number2) => number1 / number2}
]

const showScreen = (event, i) => {
    const screen = document.querySelector('#screen')
    screen.value += i
}

const cleanScreen = () => {
    const screen = document.querySelector('#screen')
    screen.value = ''
}

const holdOperator = (elem) => {
    const screen = document.querySelector('#screen')
    numbers = Number(screen.value)
    operator = elem
    screen.value = ''
}

const showResult = () => {
    const screen = document.querySelector('#screen')
    screen.value = operator.func(numbers, Number(screen.value))
}

const createOperators = () => {
    const getOp = document.querySelector('#visor-operator')
    operators.forEach(elem => {
        const newButton = document.createElement('button')
        newButton.setAttribute('id', elem.name)
        newButton.setAttribute('type', 'button')
        newButton.addEventListener('click', () => holdOperator(elem))
        newButton.innerHTML = elem.symbol
        getOp.appendChild(newButton)
    })
}

const createDigits = () => {
    const getVisor = document.querySelector('#visor')
    for(let i = 0; i < 10; i++) {
        const newButton = document.createElement('button')
        newButton.setAttribute('id', `digito-${i}`)
        newButton.setAttribute('type', 'button')
        newButton.addEventListener('click', (e) => showScreen(e, i))
        newButton.innerHTML = i
        getVisor.appendChild(newButton)
    }
}

window.onload = () => {
    createDigits()
    createOperators()
}