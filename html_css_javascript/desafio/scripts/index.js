const btnMenuOpen = document.querySelector('#btn-menu-open')
const btnMenuClose = document.querySelector('#btn-menu-close')
const menuMobile = document.querySelector('#menu-mobile')
const titulo = document.querySelector('.container-titulo')
const subTitulo = document.querySelector('.container-text')

function showMenu() {
    titulo.style.height = '410px'
    subTitulo.style.display = 'none'
    menuMobile.style.display = 'flex'
    btnMenuOpen.style.display = 'none'
    btnMenuClose.style.display = 'flex'
    btnMenuClose.style.zIndex = '1'
}

function closeMenu() {
    menuMobile.style.display = 'none'
    titulo.style.height = '310px'
    subTitulo.style.display = 'flex'
    btnMenuOpen.style.display = 'flex'
    btnMenuClose.style.display = 'none'
}

btnMenuOpen.addEventListener('click', showMenu)
btnMenuClose.addEventListener('click', closeMenu)

const send = document.querySelector('.btn-send')

function getInfo() {
    event.preventDefault()
    const url = "https://otterwise-fake-api.herokuapp.com/contact"
    const nome = document.getElementById('name').value
    const email = document.getElementById('email').value
    const fone = document.getElementById('phone').value
    const message = document.getElementById('message').value
    body = {
        "name": nome,
        "email": email,
        "phone": fone,
        "message": message
    }
    sendPost(url, body)
}

async function sendPost(url, body) {
    const response = await fetch(url, {
        method: "post",
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json"}
        
    })
    
    const data = await response.json()
    try {
        const nome = document.getElementById('name').value
        const email = document.getElementById('email').value
        const phone = document.getElementById('phone').value 
        const message = document.getElementById('message').value
        if(nome === '') throw 'Preencha seu nome'
        if(email === '') throw 'Preencha seu email'
        if(phone === '') throw 'Preencha seu telefone'
        if(message === '') throw 'Preencha sua mensagem'
        
        alert('Mensagem enviada com sucesso!')
    }
    catch (error) {
        alert(error)
    }
    data.type !== 'Error' ? document.forms.form.reset() : ''       
}

