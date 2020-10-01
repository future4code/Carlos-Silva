// ***EXERCÍCIOS DE INTERPRETAÇÂO DE CÓDIGO***

//EXERCÍCIO 1

/*
O código está declarando uma variável valor que recebe 0. 
Após isso é aberto um loop for onde a o inicio é definido pela variável i, sendo i = 0,
a condição de repetição é i < 5 e o incremento é definido por i++, ou seja, 
acrescentando 1 para cada vez que for rodado o codigo.
A mensagem que aparecerá na tela será o número 10, pois foi somado 0 + 1, depois 1+2, depois 3+3 e por fim 6 + 4.
*/

//EXERCÍCIO 2

/*
a - Será impresso:
19
21
23
25
27
30 

b - Sim, é suficiente. Seria adicionada uma variável para o indice
e depois chamaria o um console.log com essa variavel.
*/

//***DESAFIO INTERPRETAÇÃO DE CÓDIGO***

/*
0
00
000
0000

O código adiciona um 0 a cada linha conforme o número escolhido pelo usuário
*/

// ***EXERCÍCIOS DE ESCRITA DE CÓDIGO***

//EXERCÍCIO 3.a

/*
let arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80]

for(let numeros of arrayOriginal){

    console.log(numeros)

}
*/

//EXERCÍCIO 3.b

/*
let arrayOriginal = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85]

for(let numeros of arrayOriginal){

    numeros = numeros / 10
    console.log(numeros)

}
*/

//EXERCÍCIO 3.c

/*
let arrayOriginal = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85]

let arrayPares = []

for(let numeros of arrayOriginal){

    if(numeros % 2 === 0){
        arrayPares.push(numeros)
    }
    
}
console.log(arrayPares)
*/

//EXERCÍCIO 3.d


let arrayOriginal = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85]

let arrayStrings = []

for(let i = 0; i < arrayOriginal.length; i++){

    arrayStrings.push("O elemento do index " + i + " é : " + arrayOriginal[i])

}

console.log(arrayStrings)


//EXERCÍCIO 3.e

/*
let arrayOriginal = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85]

let maiorValor = arrayOriginal[0]


for (let i = 0; i < arrayOriginal.length; i++) {
    let elemento = arrayOriginal[i]

    if (maiorValor < elemento) {
       maiorValor = elemento
    }
    
}

console.log(maiorValor)

let menorValor = arrayOriginal[0]

for (let i = 0; i > arrayOriginal.length; i--) {
    let elemento = arrayOriginal[i]

    if (menorValor < elemento) {
       menorValor = elemento
    }
    
}

console.log(menorValor)
*/

//***DESAFIO ESCRITA DE CÓDIGO***



