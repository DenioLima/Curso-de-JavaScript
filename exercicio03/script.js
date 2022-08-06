function carregar() {
   var msg = document.getElementById('hora')
   var retrato = document.getElementById('imagem')
   var data = new Date() 
   var hora = data.getHours()
   msg.innerHTML = `Agora são ${hora} horas.` 
  if (hora >= 0 && hora < 12) {
    retrato.src ='imagens prontas/favicon.ico'
  } else if (hora >= 12 && hora < 18) {
    retrato.src ='logo chelsea_150jpg'  
  } else { 
      retrato.src = 'imagens prontas/poster gol contra o everton500'
    }
      
}
       
   
   
   
