

function clicar() {
    var divex = document.getElementById('exemplo')
    divex.addEventListener('click', clicar)
    divex.innerText = 'Cabuloso'
}
function entrar() {
    var divex = document.getElementById('exemplo')
    divex.addEventListener('mouseenter',entrar)
    divex.innerText = 'entrou'
}
function sair() {
    var divex = document.getElementById('exemplo')
    divex.addEventListener('mouseout',sair)
    divex.innerText = 'saiu' 
}
