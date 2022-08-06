function clicar() {
    var velocidade = document.getElementById('velo').value
    var vel = Number(velocidade)
    if (vel > 60) {
       document.getElementById('res').innerHTML = `Vc passou a ${vel}km/h, parabens vc acabou de ser multado`
    } else {
        document.getElementById('res').innerHTML = `Vc passou a ${vel}km/h,  esta dentro dos limetes de velocidade`
    }  
}
