function clicar() {
    var n1 = document.getElementById('inicio').value
    var n2 = document.getElementById('fim').value
    var n3 = document.getElementById('passo').value
    
    
    if (n1 == 0 && n2 == 0 && n3 ==0) {
        alert('Erro')
    } else {
        var inicio = Number(n1)
        var fim = Number(n2)
        var passo = Number(n3)
        for (inicio; inicio <= fim; passo++){
          document.getElementById('res').innerHTML = `${c}`         
        }
    }
}
for(var c= 1; c <=15; c++){
    console.log(`${c}`)
}