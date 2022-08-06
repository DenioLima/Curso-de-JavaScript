function carregar() {
    var horasis = new Date()
    var hora = horasis.getHours()
    var img = document.getElementById('imagem')
    document.getElementById('hd').innerHTML =`Agora  são ${hora}H.`
    if (hora >= 00 && hora < 12) {
        alert('bom dia')
        img.src = "C:/Users/Windows/Documents/Estudos HTML/JavaScript/exercicio07/imagens prontas/logo chelsea_150.jpg";
        document.body.style.background = 'rgb(255 229 185)'
    } else if (hora >= 12 && hora < 18) {
                alert('boa tarde')
                img.src = "C:/Users/Windows/Documents/Estudos HTML/JavaScript/exercicio07/imagens prontas/logo chelsea_150.jpg";
                document.body.style.background = 'rgb(255 245 68)'
    }       else if (hora >= 18 && hora < 23.99) {
                        alert('boa noite')
                        document.body. style.background = 'rgb(255 183 0)'
    }{
        
    }{
        
    }
}