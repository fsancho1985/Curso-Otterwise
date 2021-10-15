const selectColor = () => {
    const color = document.querySelector('#selection').value
    const quadro = document.querySelector('.box') 
    quadro.style.backgroundColor = color
    if(color === 'white'){
        // const fonteColor = document.querySelector('#selection')
        const fonte = document.querySelector('label')
        fonte.innerText = `Cor selecionada: ${color}`
        fonte.style.color = 'black'
    } else if(color === 'yellow') {
        // const fonteColor = document.querySelector('#selection')
        const fonte = document.querySelector('label')
        fonte.innerText = `Cor selecionada: ${color}`
    } else if(color === 'green') {
        // const fonteColor = document.querySelector('#selection')
        const fonte = document.querySelector('label')
        fonte.innerText = `Cor selecionada: ${color}`
    } else if(color === 'blue') {
        // const fonteColor = document.querySelector('#selection')
        const fonte = document.querySelector('label')
        fonte.innerText = `Cor selecionada: ${color}`
    } else if(color === 'red') {
        // const fonteColor = document.querySelector('#selection')
        const fonte = document.querySelector('label')
        fonte.innerText = `Cor selecionada: ${color}`
    } else if(color === 'black') {
        const fonte = document.querySelector('label')
        fonte.innerText = `Cor selecionada: ${color}`
        fonte.style.color = 'white'
    }
}
