const btnMenuOpen = document.querySelector('#btn-menu-open')
const btnMenuClose = document.querySelector('#btn-menu-close')
const menuMobile = document.querySelector('#menu-mobile')
const titulo = document.querySelector('.container-titulo')
const subTitulo = document.querySelector('.container-text')

// Função para habilitar o menu mobile
function showMenu() {
    titulo.style.height = '410px'
    subTitulo.style.display = 'none'
    menuMobile.style.display = 'flex'
    btnMenuOpen.style.display = 'none'
    btnMenuClose.style.display = 'flex'
    btnMenuClose.style.zIndex = '1'
}

// Função para fechar o menu mobile
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
    // console.log('body: ', typeof (body))
    sendPost(url, body)
}

async function sendPost(url, body) {
    const response = await fetch(url, {
        method: "post",
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json"}
        
    })

    const data = await response.json()
    data.type === "Sucesso" ? alert('Post realizado com sucesso!') : alert(data.message)
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('phone').value = ""
    document.getElementById('message').value = ""
}

