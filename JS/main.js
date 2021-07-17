function clicked(){
   document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>"
   //console.log(document.getElementById("agradecimento"))
}

function redirecionar(){
    window.open("https://digitalinnovation.one/")
    //window.location.href = "https://digitalinnovation.one/"
}

function trocarTexto(elemento){
    //document.getElementById("mouseMove").innerHTML = "Cuidado não me toque!!"
    //alert("Trocar Texto")
    elemento.innerHTML = "Cuidado não me toque!"
}

function voltar(elemento){
    //document.getElementById("mouseMove").innerHTML = "Passe o Mouse aqui!"
    elemento.innerHTML = "Passe o mouse"
}

function load(){
    alert("pagina Carregada")
}


function funcaoMudar(elemento){
    console.log(elemento.value)
}
//function soma (n1, n2){
//    return n1 + n2
//}

//alert(soma(5, 10))

/* function validaIdade(idade){
    var validar = true;
    if (idade >=18) {
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual a sua idade")
console.log(validaIdade(idade))
 */
//var d = new Date()
//Alert(d.getMonth()+ 1)
//alert(getDate())
//alert(d.getHours())


 //var count
//for (count = 0 ; count <= 5; count ++
//  alert(count) */
/*
 var count = 0
while (count <= 5){
    console.log(count)
    count++
} */

/* 
var idade = prompt("Qual sua idade: ")
if (idade >= 18) {
   alert("Maior de idade")
}else{
    alert("Menor de idade")
} */

/*
 var listaFrutas = [{nome:"maça", cor:"vermelha"}, {nome:"Uva", cor:"vinho"}]
console.log(listaFrutas)
console.log(listaFrutas[1].nome) */
/* 
var listaFruta = {nome:"maça", cor:"vermelha"}
console.log(listaFruta.nome)
console.log(listaFruta.cor) */

//var listaFruta = ["Maçã" , "Pera", "laranja"];
//listaFruta.push("Mamão")
//listaFruta.pop()
//console.log(listaFruta)
//console.log(listaFruta.length)
//console.log(listaFruta[0])
//console.log(listaFruta.reverse())
//console.log(listaFruta.toLocaleString())
//console.log(listaFruta.toLocaleString()[0])
//console.log(listaFruta[0])
//console.log(listaFruta.join("  "))

/* 
var nome = "Marcelo Ferreira"
var n1 = 40
var n2 = 23
var frase = "Japão é fera!"
console.log(frase.toUpperCase("Japão"))
console.log(n1 + n2) */