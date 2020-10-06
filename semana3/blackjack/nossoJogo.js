/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo(a) ao jogo de BlackJack!")

let iniciarJogo = confirm("Quer iniciar uma nova partida?")

let carta1Jogador = comprarCarta()

let carta2jogador = comprarCarta()

let carta1Computador = comprarCarta()

let carta2Computador = comprarCarta()

let somaJogador = 0

let somaComputador = 0

if(iniciarJogo){

   somaJogador = carta1Jogador.valor + carta2jogador.valor

   somaComputador = carta1Computador.valor + carta2Computador.valor

   console.log("Usuário - cartas: " + carta1Jogador.texto + " " + carta2jogador.texto + " - pontuação " + somaJogador)
   
   console.log("Computador - cartas: " + carta1Computador.texto + " " + carta2Computador.texto + " - pontuação " + somaComputador)

   if(somaJogador === somaComputador){

      console.log("Empate!")

   } else if(somaJogador > somaComputador){

      console.log("O usuário ganhou!")

   } else{

      console.log("O computador ganhou!")

   }

} else{

   console.log("O jogo acabou")

}