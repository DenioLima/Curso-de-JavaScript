function clicar() {
    var anoatual = new Date()
    var ano_atual = anoatual.getFullYear()
    var dtnascimento = document.getElementById('dtnascimento').value
    var dtnasc = Number(dtnascimento)
    var idade = ano_atual - dtnasc
    var sex = document.getElementsByName('sexo')
    var genero = ''
    
  if (dtnascimento.length == 0 || (dtnasc > 2021) ) {
    document.getElementById('res').innerHTML = `Erro, por favor verifique seu ano de nascimento!`
  } else if (idade <= 12) {
      if (sex[0].checked) {
          genero = 'Homem'
      } else if (sex[1].checked) {
        genero = 'Mulher'
      }
      var img = document.createElement('img')
      img.setAttribute('id','foto')
      img.setAttribute('src','imagens prontas/logo chelsea_150.jpg')
      res
   document.getElementById('res').innerHTML = `Vc tem ${idade} anos, é ${genero}, e esta cagando verde`+ appendChild(img)
} else if (idade > 14 && idade <= 18) {
    if (sex[0].checked) {
        genero = 'Homem'
    } else if (sex[1].checked) {
      genero = 'Mulher'
    }
    document.getElementById('res').innerHTML = ` Vc tem ${idade} anos,é  ${genero}, e um aborrecente`
} else if (idade > 18 && idade <= 26) {
    if (sex[0].checked) {
        genero = 'Homem'
    } else if (sex[1].checked) {
      genero = 'Mulher'
    }
  document.getElementById('res').innerHTML =`Vc tem ${idade} anos,  é ${genero}, esta precisando de serviço`
} else if (idade > 26 && idade <= 40) {
    if (sex[0].checked) {
        genero = 'Homem'
    } else if (sex[1].checked) {
      genero = 'Mulher'
    }
    document.getElementById('res').innerHTML =`Vc tem ${idade} anos, é ${genero}, esta  maduro`
} else if (idade > 40 && idade <= 60) {
    if (sex[0].checked) {
        genero = 'Homem'
    } else if (sex[1].checked) {
      genero = 'Mulher'
    }
    document.getElementById('res').innerHTML =`Vc tem ${idade} anos, é ${genero}, e esta ficando velho`  
} else if (idade > 60 ) {
    if (sex[0].checked) {
        genero = 'Homem'
    } else if (sex[1].checked) {
      genero = 'Mulher'
    }
    document.getElementById('res').innerHTML =`Vc tem ${idade} anos, é ${genero}, esta na hora de voltar para casa, o mundo espiritual`
}{
    
}{
    
}{
    
} {
    
}{
    
}
}
