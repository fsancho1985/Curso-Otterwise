// função verifica sinal
function checkSignal(a) {
  if (a > 0) {
    return a + ' é positivo'
  } else if (a === 0){
      return a + ' não é nem positivo nem negativo'

  } else {
      return a + ' é negativo'
  }
}

console.log('O resultado da função checkSignal é: ' + checkSignal(-99))
console.log('O resultado da função checkSignal é: ' + checkSignal(42))
console.log('O resultado da função checkSignal é: ' + checkSignal(0))

// função double
function double(x){
    return x * 2
}
console.log('O resultado da função double é: ' + double(5))
console.log('O resultado da função double é: ' + double(5**2))
console.log('O resultado da função double é: ' + double(125))

// função calculate
function calculate(a, b, c){
    if(a === 'soma') {
        return b + c
    } else if (a === 'subtrai') {
        return b - c
    } else if (a === 'multiplica') {
        return b * c
    } else if (a === 'divide') {
        return b / c
    }
}

console.log('O resultado da função calculate é: ' + calculate('soma', 3,5) + '.' + '\n' + checkSignal(calculate('soma', 3,5)))
console.log('O resultado da função calculate é: ' + calculate('subtrai', 3,5) + '.' + '\n' + checkSignal(calculate('subtrai', 3,5)))
console.log('O resultado da função calculate é: ' + calculate('multiplica', 3,5) + '.' + '\n' + checkSignal(calculate('multiplica', 3,5)))
console.log('O resultado da função calculate é: ' + calculate('divide', 3,5) + '.' + '\n' + checkSignal(calculate('divide', 3,5)))