// EXEMPLO 1 

// function dizOi() {
//     console.log("oi")
// }

// dizOi()


// EXEMPLO 2

// ------------------------------------------- EXEMPLO DE FUNCAO NOMEADA -----------------

// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)

// function somaDoisNumeros(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }




// ------------------------------------------- EXEMPLO DE FUNCAO NÃO NOMEADA -----------------


// const somaDoisNumeros = function(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }
    
// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)



// ------------------------------------------- EXEMPLO DE ARROW FUNCTION (FUNCAO FLECHA) -----------------


// const somaDoisNumeros = (numero1, numero2) => {
//     const soma = numero1 + numero2
//     return soma
// }


// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)




// ------------------------------------------- EXERCÍCIO 1 -----------------

// function verificaArray(arrayDeParametro) {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length 
// }


// ------------------------------------------- EXERCÍCIO 2 -----------------


// const verificaTamanhoDoArray = (arrayDeParametro) => {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length
// }

// const profs = ["chijo", "paulinha", "sot", "caio", "severo"]

// const tamanhoDoArray = verificaTamanhoDoArray(profs)


//***Exercícios de interpretação de código***

//Exercício 1.a

/*
    Será impresso no console: 10 e 50
*/

//Exercício 1.b

/*
   Não aparecerá nada no console, pois o return sem uma variavel não retorna nada. 
*/

//Exercício 2.a

/*
    Vai imprimir somente Darvas e Caio, pois os parametros do for estão 
    dizendo pra imprimir todos os índices do array inferiores a 2.
*/

//Exercício 2.b

/*
   Será impresso Amanda e Caio
*/

//Exercício 3

/*
    Essa função verifica se os números da primeira array são pares.
    Caso sejam pares ele multiplica esse número por ele mesmo e adiciona ele na arrayFinal.
    No fim ele retorna a arrayFinal já com os números dobrados.
    Um nome melhor pra essa função seria dobrarValores.
*/

//***Exercícios de escrita de código***

//Exercício 4.a

/*
function meApresentar(){

    console.log("Eu sou Augusto, tenho 35 anos, moro no Rio de Janeiro e sou estudante.")

}
*/

//Exercício 4.b

/*
function apresentarGenerico(nome, idade, cidade, estudando){
    if(estudando){

        estudando = "sou estudante."

    }else{
        estudando = "não sou estudante."
    }
    console.log("Eu sou " + nome + ", tenho " + idade + " anos, " + "moro em " + cidade + " e " + estudando)
}

apresentarGenerico("Augusto", 35, "Rio de Janeiro", true)
*/

//Exercício 5.a

/*
function somaNumeros(a, b){

    let soma = a + b
    return soma

}

console.log(somaNumeros(10, 25))
*/

//Exercício 5.b

/*
let comparaNumeros = (numero1, numero2) => {

    if (numero1 >= numero2){

        return true

    }else{

        return false
    }

}

console.log(comparaNumeros(5, 4))
*/

//Exercício 5.c

/*
let passarMensagem = (mensagem) =>{

    for (let i = 0; i < 10; i++){

        console.log(mensagem)

    }
}

passarMensagem("A Labenu é topzera!!!")
*/

//Exercício 6.a

/*
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

let mostrarTamanho = () =>{

    return array.length
}

console.log(mostrarTamanho())
*/

//Exercício 6.b

/*
let verSePar = (numero) =>{

    if(numero % 2 === 0){

        console.log("O número é par.")
    }else{
        console.log("O número é impar.")
    }

}
verSePar(14)
*/

//Exercício 6.c

/*
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

let arrayPares = []

let verificarArray = (a) =>{

    for(let i =0; i < array.length; i++){
        if(array[i] % 2 === 0){

            arrayPares.push(array[i])
        }else{}
        
    }
    return arrayPares
}
console.log(verificarArray())
console.log("A quantidade de números pares é: " + arrayPares.length)
*/

//Exercício 6.d

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

let arrayPares = []

let verificarArray = () =>{

    for(let i =0; i < array.length; i++){
        if(array[i] % 2 === 0){

            arrayPares.push(true)
        }else{}
        
    }
    return arrayPares
}
console.log(verificarArray())
