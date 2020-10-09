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