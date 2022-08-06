function clicar() {
    var pais = document.getElementById('nacao')
    var resposta = document.getElementById('res')
    if (pais.value != 'Brasil') {
        resposta.innerHTML = `<p>Você é estrangeiro!`
    } else {   
        resposta.innerHTML = `<p>Você é do coração do mundo, patria do evangelho!</p>`
    }
   }
