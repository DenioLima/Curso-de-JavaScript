function clicar() {
    var nume = document.getElementById('nume')
    var tab = document.getElementById('option')

    if ( nume.value.length == 0) {
        alert('Erro')
    } else {
        var numero = Number(nume.value)
        for (var c= 1; numero <=10; c++) {
            var item = document.createElement('option')
            item.text =`${numero} x ${c} = ${numero*c}`
            tab.appendChild(item)
        }
    } 
}

let num = [8,5,2,3]
num[4] = 7 //para especificar a posição dentro do array
num.push(1) //para colocar sempre na ultima posição do array
num.length //para ver quantos elementos tem no array
num.sort() //para colocar em ordem crescente
console.log(`O vetor é ${num.length}`)
console.log(`${num}`)
console.log(`${num[2]}`)

for (let posi= 0; posi< num.length; posi++) {
    console.log(` A posição ${posi} tem o valor ${num[posi]}`)
    
}
for (let posi in num) {
    console.log(`${num[posi]}`)
}
let posi = num.indexOf(5) //O indexOf() é para ver qual a posição do numero q esta dentro de() está
console.log(`A posição é ${num[posi]}`)

function parimpar(n) {
    if (n%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}
console.log(parimpar(5))
function soma (n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(7,8))