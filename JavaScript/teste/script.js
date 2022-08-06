
function cadastrar() {
    var nomeinpu = document.getElementById('nomefor')
    var dtnasci = document.getElementById('dtnascimento')
    var tel = document.getElementById('telefone')
    var cpfs = document.getElementById('cpf')
    var emails = document.getElementById('email')
    var dados = JSON.parse(localStorage.getItem('dadosform'))
    if (dados == null) {
        localStorage.setItem('dadosform','[]')
        dados = []
    }
    var registro ={
        nome:nomeinpu.value,
        dtnas:dtnasci.value,
        telef:tel.value,
        cpf:cpfs.value,
        email:emails.value
    }
    dados.push(registro)
    localStorage.setItem('dadosform',JSON.stringify(dados))
    alert('Cadastro concluido')
   
}

var livros = [
    {
        isbn: '857657313X',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/41MRn6hy8-L._SX346_BO1,204,203,200_.jpg',
        titulo: 'Duna: livro 1',
        autor: 'Frank Herbert',
        idioma: 'Português',
        ano: '2017',
        categoria: 'Ficção científica',
        sinopse: 'Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre.Esta edição inédita, com introdução de Neil Gaiman, apresenta ao leitor o universo fantástico criado por Herbert e que será adaptado ao cinema por Denis Villeneuve, diretor de A chegada e de Blade Runner 2049. (Amazon)'
    },
    {
        isbn: '8543024978',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/513h09R6yTL._SX369_BO1,204,203,200_.jpg',
        titulo: 'Engenharia de Software',
        autor: 'Ian Sommerville',
        idioma: 'Português',
        ano: '2019',
        categoria: 'Informática',
        sinopse: '"A 10ª edição de Engenharia de software foi extensivamente atualizada para refletir a adoção crescente de métodos ágeis na engenharia de software. Um dos destaques da nova edição é o acréscimo de conteúdo sobre a metodologia do Scrum. A divisão em quatro partes do livro foi significativamente reformulada para acomodar novos capítulos sobre engenharia de resiliência, engenharia de sistemas e sistemas de sistemas. Além disso, capítulos sobre tópicos como confiança, segurança e proteção foram completamente reorganizados. Todas essas mudanças se justificam por compreenderem questões essenciais para a engenharia de software moderna ― gerenciamento da complexidade, integração da agilidade a outros métodos e garantia de que os sistemas sejam seguros e resilientes. Obra de referência para estudantes de ciência da computação, engenharia da computação e sistemas de informação, e para qualquer profissional que deseje atualizar seus conhecimentos sobre reúso de software, arquitetura de projetos, confiabilidade e segurança e engenharia de sistemas.." (Amazon)'
    },
    {
        isbn: '38535908285',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/51xKvH19nrL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
        titulo: 'O segredo do licorne',
        autor: 'Hergé',
        idioma: 'Português',
        ano: '2006',
        categoria: 'Mistério',
        sinopse: 'Tintim compra para o amigo Haddock o modelo de um galeão antigo, que, por coincidência, era a réplica do navio de um antepassado do capitão, o cavaleiro de Hadoque. O modelo é roubado, e logo depois a casa de Tintim é toda revirada. O que os assaltantes procuravam? Por sua vez, o capitão acha no sótão de casa as memórias do cavaleiro. Nelas, ele narra seu encontro no Caribe com o pirata Rackham, o Terrível, que o captura com seu navio, para o qual transfere os tesouros que havia pilhado. O cavaleiro consegue escapar e afunda o Licorne com todo o tesouro a bordo. Hadoque divide o mapa com a localização do naufrágio em três partes, que esconde em réplicas do navio. Muitos anos depois, Tintim e seus amigos decidem buscar as partes do mapa, sabendo que para isso terão de driblar uma perigosa quadrilha. (Amazon)'
    }
]
var exibirLivro = '';
for (i=0; i<livros.length; i++) {
    exibirLivro += `<div class="itemLivro" nome="${livros[i].titulo}" onclick="selecionarLivro(${i})">
                        <a href="livro.html">
                            <img src="${livros[i].capa}">
                            <br>
                            <p>${livros[i].titulo}</p>
                            <br>
                        </a>
                    </div>`
    ;
}


function capturar() {
//localStorage.exibirLivro = document.getElementById('pesLivro')
    
 localStorage.setItem('exibirLivro',JSON.stringify(exibirLivro))
    //console.log(localStorage.getItem('exibirLivro'))
    //var favoritos = JSON.parse(localStorage.getItem('exibirLivro'))
    console.log(localStorage.getItem('exibirlivro'))
}
function exibir() {
    
    //alert(`${exibirLivro}`)
    localStorage.exibirLivro = document.getElementById('livrosfavoritos').innerHTML = localStorage.exibirLivro
    
}


