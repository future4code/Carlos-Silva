// ***EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO***

// Exercício 1

/*
O código está solicitando um número ao usuário e armazenando na variável respostaDoUsuario.
Depois ele está transformando essa resposta em número e armazenando na varíavel numero.
Após isso, na condicional if, ele está verificando se o resto de numero/2 é igual a 0. 
Se for igual a 0 ele imprime "Passou no teste", se for diferente de 0 ele imprime "Não passou no teste".
A mensagem "Passou no teste" será impressa caso o número seja par.
A mensagem "Não passou no teste" será impressa caso o número seja impar.
*/

// Exercício 2

/*
a - O código serve para que, baseada numa condicional switch case e,
    dependendo da fruto digitada pelo usuário, seja retornada uma mensagem específica.
b - Se o valor de fruta for Maçã a mensagem impressa será: O preço da fruta Maçã é R$ 2.25
c - A mensagem impressa seria: O preço da fruta Pêra é R$ 5
*/

// Exercício 3

/*
a - A primeira linha está solicitando ao usuário que "Digite o primeiro número.", 
    está transformando essa informação de string pra number e depois armazendando na variável numero.
b - Se o usuário digitar o número 10 a mensagem que aparece será: "Esse número passou no teste"
    Se o número digitado for -10 não aparecerá nenhuma mensagem, pois não há else definido.
c - Haverá sim erro no console, visto que a variável mensagem foi criada dentro do bloco do if, 
    porém foi chamada num escopo global.
*/

// ***EXERCÍCIOS DE ESCRITA DE CÓDIGO***

// Exercício 4

/*
let idadeDoUsuario = Number(prompt("Digite a sua idade:"))

if(idadeDoUsuario >= 18){

    console.log("Você pode dirigir")

} else{

    console.log("Você não pode dirigir")

}
*/

// Exercício 5

/*
let turno = prompt("Digite o turno que você estuda, sendo M para matutino (manhã), V para vespertino (tarde) ou N para noturno").toLowerCase()

if(turno === "m"){

console.log("Bom dia")

} else if(turno === "v"){

    console.log("Boa tarde")

} else{

    console.log("Boa noite")

}
*/

// Exercício 6

/*
let turno = prompt("Digite o turno que você estuda, sendo M para matutino (manhã), V para vespertino (tarde) ou N para noturno").toLowerCase()

switch (turno){

    case "m":
        console.log("Bom dia")
        break
    case "v":
        console.log("Boa tarde")
        break
    case "n":
        console.log("Boa noite")
        break
    default:
        console.log("hã!?")
        break
}
*/

// Exercício 7

/*
let generoFilme = prompt("Qual gênero de filme você vai assistir?").toLowerCase()

let precoIngresso = Number(prompt("Quanto custa o ingresso pra esse gênero?"))

if(generoFilme === "fantasia" && precoIngresso < 15){

    console.log("BOM FILME!!!")

} else{

    console.log("Escolha outro filme :(")

}
*/

// ***EXERCÍCIOS DE DESAFIO***

//Desafio 1

/*
let generoFilme = prompt("Qual gênero de filme você vai assistir?").toLowerCase()

let precoIngresso = Number(prompt("Quanto custa o ingresso pra esse gênero?"))

if(generoFilme === "fantasia" && precoIngresso < 15){

    let snack = prompt("Qual snack você vai comprar?")
    console.log("BOM FILME!!!")
    console.log("... com " + snack)

} else{

    console.log("Escolha outro filme :(")

}
*/

//Desafio 2

let nomeUsuario = prompt("Seja bem vindo. Preciso de algumas informações. Digite seu nome completo:")

let tipoDeJogo = prompt("Indique o tipo de jogo. IN para internacional ou DO para doméstico:").toLowerCase()

let etapaDoJogo = prompt("Agora preciso que especifique a etapa do jogo, sendo SF para semi-final; DT para decisão de terceiro lugar e; FI para final:").toLowerCase()

let categoria = Number(prompt("Quase acabando. Agora digite a categoria do seu ingresso utilizando os números de 1 a 4."))

let quantidadeDeIngressos = Number(prompt("Última pergunta. Quantos ingressos você vai querer?"))

let preco

if(tipoDeJogo === "in"){

    tipoDeJogo = "Internacional"

} else if(tipoDeJogo === "do"){

    tipoDeJogo = "Nacional"
}



if ((categoria === 1 && etapaDoJogo === "sf") || (categoria === 2 && etapaDoJogo === "fi")){

    preco = 1320

    if(etapaDoJogo === "sf"){

        etapaDoJogo = "Semi-final"

    } else if(etapaDoJogo === "dt"){

        etapaDoJogo = "Terceiro lugar"

    } else if(etapaDoJogo === "fi"){

        etapaDoJogo = "Final"

    } else{

        console.log("ERRO!")

    }

    console.log("---Dados da compra---")
    console.log("Nome do cliente: " + nomeUsuario)
    console.log("Tipo de jogo: " + tipoDeJogo)
    console.log("Etapa do jogo: " + etapaDoJogo)
    console.log("Categoria: " + categoria)
    console.log("Quantidade de ingressos: " + quantidadeDeIngressos + " ingressos")
    console.log("---Valores---")
    
    if(tipoDeJogo === "Nacional"){
        console.log("Valor do ingresso: R$" + preco)
        console.log("Valor total: R$" + (preco * quantidadeDeIngressos))
    } else{
        console.log("Valor do ingresso: $" + (preco / 4.10))
        console.log("Valor total: $" + (preco * quantidadeDeIngressos) / 4.10)
    }

} else if ((categoria === 2 && etapaDoJogo === "sf") || (categoria === 3 && etapaDoJogo === "fi")){

    preco = 880

    if(etapaDoJogo === "sf"){

        etapaDoJogo = "Semi-final"

    } else if(etapaDoJogo === "dt"){

        etapaDoJogo = "Terceiro lugar"

    } else if(etapaDoJogo === "fi"){

        etapaDoJogo = "Final"

    } else{

        console.log("ERRO!")

    }

    console.log("---Dados da compra---")
    console.log("Nome do cliente: " + nomeUsuario)
    console.log("Tipo de jogo: " + tipoDeJogo)
    console.log("Etapa do jogo: " + etapaDoJogo)
    console.log("Categoria: " + categoria)
    console.log("Quantidade de ingressos: " + quantidadeDeIngressos + " ingressos")
    console.log("---Valores---")
    
    if(tipoDeJogo === "Nacional"){
        console.log("Valor do ingresso: R$" + preco)
        console.log("Valor total: R$" + (preco * quantidadeDeIngressos))
    } else{
        console.log("Valor do ingresso: $" + (preco / 4.10))
        console.log("Valor total: $" + (preco * quantidadeDeIngressos) / 4.10)
    }

} else if((categoria === 3 && etapaDoJogo === "dt") || (categoria === 4 && etapaDoJogo === "fi")){

    preco = 330

    if(etapaDoJogo === "sf"){

        etapaDoJogo = "Semi-final"

    } else if(etapaDoJogo === "dt"){

        etapaDoJogo = "Terceiro lugar"

    } else if(etapaDoJogo === "fi"){

        etapaDoJogo = "Final"

    } else{

        console.log("ERRO!")

    }

    console.log("---Dados da compra---")
    console.log("Nome do cliente: " + nomeUsuario)
    console.log("Tipo de jogo: " + tipoDeJogo)
    console.log("Etapa do jogo: " + etapaDoJogo)
    console.log("Categoria: " + categoria)
    console.log("Quantidade de ingressos: " + quantidadeDeIngressos + " ingressos")
    console.log("---Valores---")
    
    if(tipoDeJogo === "Nacional"){
        console.log("Valor do ingresso: R$" + preco)
        console.log("Valor total: R$" + (preco * quantidadeDeIngressos))
    } else{
        console.log("Valor do ingresso: $" + (preco / 4.10))
        console.log("Valor total: $" + (preco * quantidadeDeIngressos) / 4.10)
    }

} else if(categoria === 1 && etapaDoJogo === "dt"){

    preco = 660

    if(etapaDoJogo === "sf"){

        etapaDoJogo = "Semi-final"

    } else if(etapaDoJogo === "dt"){

        etapaDoJogo = "Terceiro lugar"

    } else if(etapaDoJogo === "fi"){

        etapaDoJogo = "Final"

    } else{

        console.log("ERRO!")

    }

    console.log("---Dados da compra---")
    console.log("Nome do cliente: " + nomeUsuario)
    console.log("Tipo de jogo: " + tipoDeJogo)
    console.log("Etapa do jogo: " + etapaDoJogo)
    console.log("Categoria: " + categoria)
    console.log("Quantidade de ingressos: " + quantidadeDeIngressos + " ingressos")
    console.log("---Valores---")
    
    if(tipoDeJogo === "Nacional"){
        console.log("Valor do ingresso: R$" + preco)
        console.log("Valor total: R$" + (preco * quantidadeDeIngressos))
    } else{
        console.log("Valor do ingresso: $" + (preco / 4.10))
        console.log("Valor total: $" + (preco * quantidadeDeIngressos) / 4.10)
    }

} else if(categoria === 1 && etapaDoJogo === "fi"){

    preco = 1980

    if(etapaDoJogo === "sf"){

        etapaDoJogo = "Semi-final"

    } else if(etapaDoJogo === "dt"){

        etapaDoJogo = "Terceiro lugar"

    } else if(etapaDoJogo === "fi"){

        etapaDoJogo = "Final"

    } else{

        console.log("ERRO!")

    }

    console.log("---Dados da compra---")
    console.log("Nome do cliente: " + nomeUsuario)
    console.log("Tipo de jogo: " + tipoDeJogo)
    console.log("Etapa do jogo: " + etapaDoJogo)
    console.log("Categoria: " + categoria)
    console.log("Quantidade de ingressos: " + quantidadeDeIngressos + " ingressos")
    console.log("---Valores---")
    
    if(tipoDeJogo === "Nacional"){
        console.log("Valor do ingresso: R$" + preco)
        console.log("Valor total: R$" + (preco * quantidadeDeIngressos))
    } else{
        console.log("Valor do ingresso: $" + (preco / 4.10))
        console.log("Valor total: $" + (preco * quantidadeDeIngressos) / 4.10)
    }
    
} else if(categoria === 2 && etapaDoJogo === "dt"){

    preco = 440
    
    if(etapaDoJogo === "sf"){

        etapaDoJogo = "Semi-final"

    } else if(etapaDoJogo === "dt"){

        etapaDoJogo = "Terceiro lugar"

    } else if(etapaDoJogo === "fi"){

        etapaDoJogo = "Final"

    } else{

        console.log("ERRO!")

    }

    console.log("---Dados da compra---")
    console.log("Nome do cliente: " + nomeUsuario)
    console.log("Tipo de jogo: " + tipoDeJogo)
    console.log("Etapa do jogo: " + etapaDoJogo)
    console.log("Categoria: " + categoria)
    console.log("Quantidade de ingressos: " + quantidadeDeIngressos + " ingressos")
    console.log("---Valores---")
    
    if(tipoDeJogo === "Nacional"){
        console.log("Valor do ingresso: R$" + preco)
        console.log("Valor total: R$" + (preco * quantidadeDeIngressos))
    } else{
        console.log("Valor do ingresso: $" + (preco / 4.10))
        console.log("Valor total: $" + (preco * quantidadeDeIngressos) / 4.10)
    }

} else if(categoria === 3 && etapaDoJogo === "sf"){

    preco = 550

    if(etapaDoJogo === "sf"){

        etapaDoJogo = "Semi-final"

    } else if(etapaDoJogo === "dt"){

        etapaDoJogo = "Terceiro lugar"

    } else if(etapaDoJogo === "fi"){

        etapaDoJogo = "Final"

    } else{

        console.log("ERRO!")

    }

    console.log("---Dados da compra---")
    console.log("Nome do cliente: " + nomeUsuario)
    console.log("Tipo de jogo: " + tipoDeJogo)
    console.log("Etapa do jogo: " + etapaDoJogo)
    console.log("Categoria: " + categoria)
    console.log("Quantidade de ingressos: " + quantidadeDeIngressos + " ingressos")
    console.log("---Valores---")
    
    if(tipoDeJogo === "Nacional"){
        console.log("Valor do ingresso: R$" + preco)
        console.log("Valor total: R$" + (preco * quantidadeDeIngressos))
    } else{
        console.log("Valor do ingresso: $" + (preco / 4.10))
        console.log("Valor total: $" + (preco * quantidadeDeIngressos) / 4.10)
    }
    
} else if(categoria === 4 && etapaDoJogo === "sf"){

    preco = 220

    if(etapaDoJogo === "sf"){

        etapaDoJogo = "Semi-final"

    } else if(etapaDoJogo === "dt"){

        etapaDoJogo = "Terceiro lugar"

    } else if(etapaDoJogo === "fi"){

        etapaDoJogo = "Final"

    } else{

        console.log("ERRO!")

    }

    console.log("---Dados da compra---")
    console.log("Nome do cliente: " + nomeUsuario)
    console.log("Tipo de jogo: " + tipoDeJogo)
    console.log("Etapa do jogo: " + etapaDoJogo)
    console.log("Categoria: " + categoria)
    console.log("Quantidade de ingressos: " + quantidadeDeIngressos + " ingressos")
    console.log("---Valores---")
    
    if(tipoDeJogo === "Nacional"){
        console.log("Valor do ingresso: R$" + preco)
        console.log("Valor total: R$" + (preco * quantidadeDeIngressos))
    } else{
        console.log("Valor do ingresso: $" + (preco / 4.10))
        console.log("Valor total: $" + (preco * quantidadeDeIngressos) / 4.10)
    }
    
} else if(categoria === 4 && etapaDoJogo === "dt"){

    preco = 170

    if(etapaDoJogo === "sf"){

        etapaDoJogo = "Semi-final"

    } else if(etapaDoJogo === "dt"){

        etapaDoJogo = "Terceiro lugar"

    } else if(etapaDoJogo === "fi"){

        etapaDoJogo = "Final"

    } else{

        console.log("ERRO!")

    }

    console.log("---Dados da compra---")
    console.log("Nome do cliente: " + nomeUsuario)
    console.log("Tipo de jogo: " + tipoDeJogo)
    console.log("Etapa do jogo: " + etapaDoJogo)
    console.log("Categoria: " + categoria)
    console.log("Quantidade de ingressos: " + quantidadeDeIngressos + " ingressos")
    console.log("---Valores---")
    
    if(tipoDeJogo === "Nacional"){
        console.log("Valor do ingresso: R$" + preco)
        console.log("Valor total: R$" + (preco * quantidadeDeIngressos))
    } else{
        console.log("Valor do ingresso: $" + (preco / 4.10))
        console.log("Valor total: $" + (preco * quantidadeDeIngressos) / 4.10)
    }
    
} else{

    console.log("Parametros incorretos. Por favor insira os dados novamente")
}

