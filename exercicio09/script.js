function clicar() {
    var nu1 = document.getElementById('inicio')
    var nu2 = document.getElementById('fim')
    var passo1 = document.getElementById('passo')
    var res = document.getElementById('res')
    
    if (nu1.value.length == 0 || nu2.value.length == 0 || passo1.value.length == 0) {
       alert('erro')
      
    }else{
            var passo = Number(passo1.value)
            var n1 = Number(nu1.value)
            var n2 = Number(nu2.value)
        if (n1 < n2) {
            //contagem crescente
            for (var c = n1; c <= n2 ; c += passo) {
                res.innerHTML += `${c} \u{1f449}` 
                //para colocar emoji no java te que usar \u{} e o codigo dentro das chaves, e so funciona entre crases. 
            }  
        } else {
            //contagem decrescente
            for (var c = n1; c >= n2; c -=passo) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }    
      }
    
}
    




for (var c = 1 ; c <= 15; c++) {
    console.log(`${c}`)
    
}



 