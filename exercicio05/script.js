function clicar() {
    
    var nacionalidade = document.getElementById('nacao').value
    if (nacionalidade == '[]') { 
        alert(`${nacionalidade}`)
        document.getElementById('res').innerHTML = 'Campo vazio'
       //document.getElementById('res').innerHTML = `vc é de ${nacionalidade}, então vc é Brasileiro.`
    } if (nacionalidade != 'Brasil') {
        document.getElementById('res').innerHTML = `vc é de ${nacionalidade}, então vc é estrangeiro.`
    }else {
       document.getElementById('res').innerHTML = `Vc é do ${nacionalidade}, enrão vc é brasileiro`
    } 
}
function enviar() {
    var but1 = document.getElementById('btn1').value
    var but2 = document.getElementById('btn2')
    var n1 = Number(but1)
    var n2 = Number(but2.value)
    var resposta = n1 + n2
    alert(`${resposta}`)
    document.getElementById('respo').innerHTML = `A soma de ${n1} e ${n2} é ${resposta}`
}