function clicar() {
var idade = document.getElementById('dtnacsimento').value
if (idade <= 18) {
    document.getElementById('imagem').innerHTML = `Vc ainda tem ${idade}, esta cagando verde!`
    }else if (idade > 19 && idade <= 28) {
        document.getElementById('imagem').innerHTML = `Vc  tem ${idade}, esta precisando de serviço!`
        } else   if (idade > 28 && idade <= 40) {
            document.getElementById('imagem').innerHTML = `Vc ja tem ${idade}, esta ficando !`
            }else  if (idade > 40 && idade <= 60 ) {
                document.getElementById('imagem').innerHTML = `Vc ja tem ${idade}, esta idoso!`
                }else if (idade > 60) {
                    document.getElementById('imagem').innerHTML = `Vc ja tem ${idade}, esta na hora de voltar pra casa, no mundo !`
                }

}
function carregar() {
    var hs = new Date()
    var hora = hs.getHours()
    document.getElementById('horario').innerHTML =`Agora são ${hora}h`
    if (hora >= 1 && hora < 12) {
        document.getElementById('ix').innerHTML = 'Bom dia'
    } else if (hora >= 12 && hora < 18) {
        document.getElementById('ix').innerHTML = 'Boa tarde'
    } else if (hora >= 18 && hora <= 24) {
        document.getElementById('ix').innerHTML = 'Boa noite'
    }{
        
    } {
        
    } 
}

   
   
