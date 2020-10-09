// *** Exercícios de interpretação de código ***

//Exercício 1

/*
    Essa função conversorDeMoeda recebe um parametro valorEmDolar, que é um número. O trabalho da função é receber um número informado pelo usuário que será referente à cotação do dolar, e armazenar esse número na const cotação.
    Depois a função retorna o numero informado pelo usuário multiplicado pelo valorEmDolar, que é o parametro da função.
    Já fora da função existe uma const meuDinheiro que recebe a função conversorDeMoeda com o parametro 100.
    Será impresso no console o resultado de 100 * cotação informada pelo usuário.
    Exemplo (cotação do dolar sendo informada como 5.55): R$ 555
*/

//Exercício 2

/*
    Essa função recebe dois parametros e analisa qual será o valorAposInvestimento para cada tipoDeInvestimento informado. Caso o tipoDeInvestimento informado não seja nenhum dos previstos na function, será exibido o alerta "TIPO DE INVESTIMENTO INFORMADO INCORRETO"
    Já fora da função ele armazena a prórpia função em duas constantes (novoMontante e segundoMontante) recebendo tipoDeInvestimento e valor distintos para cada umas das constantes.
    Abaixo ele imprime o novoMontante e o segundoMontante. Ficando impresso da seguinte forma:

    165
    TIPO DE INVESTIMENTO INFORMADO INCORRETO
*/

//Exercício 3

/*
    Esse programa recebe uma array de números chamada numero e duas arrays vazias, chamadas de array1 e array2.
    Logo abaixo ele roda um loop for of que diz que para cada numero de numeros, ou seja, para cada item da array chamada numeros ele vai analisar se a sobra da divisão por 2 é igual a 0, ou seja se esse número é par.
    Caso seja par ele armazena na array1 se for diferente de par, ou seja, impar, ele armazena na array2.
    No fim ele imprime no console:

    Quantidade total de números 14
    6
    8
*/

//Exercício 4

/*
    Esse programa recebe uma array de números chamada numero e duas arrays. A array numero1 recebe o valor infinity e a array 2 recebe o valor 0.
    No for of ele analisa cada numero do array numeros e entra na condicional if.
    Se o numero for menor do que numero1 (que inicialmente recebe o vaor infinito) então o numero1 receberá esse numero da array numeros.
    Sendo assim, nesse primeiro if ele pegará o menor número da array, que será o -10.
    No segundo if ele pega o maior número da array, porque ele vai transformando o numero2 no múmero da array, desde que esse seja maior que o valor anteriormente recebido.
    Ficará impresso:

    -10
    1590
*/



// *** Exercícios de Lógica de Programação ***

//Exercício 1

// for, for of e while

/*
const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0; i < arrayDeNumeros.length; i++){

    console.log(arrayDeNumeros[i])
}

for(numero of arrayDeNumeros){
    console.log(numero)
}

let index = 0

while(index <= 10){

    console.log(index)

    index++
}
*/

//Exercício 2.a

/*
booleano1 && booleano2 && !booleano4
true && false && true // Retornaria false

//Exercício 2.b
(booleano1 && booleano2) || !booleano3
(true && false) || false // Retornaria false

//Exercício 2.c
(booleano2 || booleano3) && (booleano4 || booleano1)
(false || true) && (false || true) // Retornaria true

//Exercício 2.d
!(booleano2 && booleano3) || !(booleano1 && booleano3)
!(false && true) || !(true && true) // Retornaria true

//Exercício 2.e

!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
false && false || (true && true && true)
false || true // retornaria true
*/

//Exercício 3

/*
O código não funciona porque como condição do while foi dado que i seria <= quantidadeDeNumerosPares. O certo seria somente o sinal de <. O outro problema que encontrei é que não tinha o i++ no final do while. O que faria o código entrar em loop infinito. Segue abaixo o código escrito corretamente:
*/
/*
const quantidadeDeNumerosPares = 10 //pode ser qualquer número
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}
*/

