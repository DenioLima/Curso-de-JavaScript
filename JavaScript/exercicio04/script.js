
function clicar() {
    var texvelo = document.getElementById('velocidade')
    var res = document.getElementById('res')
    var velo = Number (texvelo.value)
    res.innerHTML =`<p>Sua velocidade é  de ${velo} Km/h</p>`
    if (velo >= 60){
        res.innerHTML +=`<p>Parabens vc acabou se multado, vai dar dinheiro pro governo.`
    }
    res.innerHTML =`<p>Use cinto e digige com segurança</p>`
    
}