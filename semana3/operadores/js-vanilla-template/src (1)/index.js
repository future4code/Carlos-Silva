//Exercício de interpretação de código 1
/*
a. false
b. false
c. true
e. boolean
*/

//Exercício de interpretação de código 2
/*
a. undeffined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
*/

// Exercício de escrita de código 1

/*
let age1 = prompt("Qual a sua idade?")

let age2 = prompt("Qual a idade do seu melhor amigo?")

let compareAges = Number(age1) > Number(age2)

let difAges = Number(age1) - Number(age2)

console.log("Sua idade é maior do que a do seu melhor amigo?" + " " + compareAges)

console.log(difAges)
*/

// Exercício de escrita de código 2

/*
let evenNumber = prompt("Por favor, digite um número par.")

evenNumber = Number(evenNumber)

console.log(evenNumber % 2)

// Notei que a sobra da divisão de qualquer número par por 2 será 0.
// Caso seja inserido um número ímpar o resultado, na divisão por 2, sempre será 1.
*/

// Exercício de escrita de código 3

/*
let listaDeTarefas = []

let tarefa1 = prompt("Digite a primeira tarefa que você realiza diariamente:")

listaDeTarefas.push(tarefa1)

let tarefa2 = prompt("Digite a segunda tarefa que você realiza diariamente:")

listaDeTarefas.push(tarefa2)

let tarefa3 = prompt("Digite a terceira tarefa que você realiza diariamente:")

listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let tarefaRealizada = prompt("Indique o índice da tarefa que você já realizou. Considere que a primeira tarefa é índice 0, a segunda é índice 1 e a terceira é índice 3.")

tarefaRealizada = Number(tarefaRealizada)

listaDeTarefas.splice(tarefaRealizada, 1)

console.log(listaDeTarefas)
*/

// Exercício de escrita de código 4

/*
let userName = prompt("Qual o seu nome?")

let userEmail = prompt("Qual o seu e- mail?")

console.log ("O e-mail " + userEmail + " foi cadastrado com sucesso. Seja bem-vinda(o), " + userName + "!")
*/

//Desafios Extras 1.a


let kelvin1 

let fahrenheit1 = 77

kelvin1  = (fahrenheit1 - 32)*5/9 + 273.15

console.log(kelvin1 + "° K")



//Desafios Extras 1.b


let fahrenheit2

let celsius2 = 80

fahrenheit2 = (celsius2)*9/5 + 32

console.log(fahrenheit2 + "° C")


//Desafios Extras 1.c

let fahrenheit3

let kelvin3

let celsius3 = 30

fahrenheit3 = (celsius3)*9/5 + 32

console.log(fahrenheit3 + "° C")

kelvin3  = (fahrenheit3 - 32)*5/9 + 273.15

console.log(kelvin3 + "° K")

//Desafios Extras 1.d


celsius3 = prompt("Insira o valor em °C que você deseja converter: ")

celsius3 = Number(celsius3)

fahrenheit3 = (celsius3)*9/5 + 32

console.log(fahrenheit3 + "° C")

kelvin3  = (fahrenheit3 - 32)*5/9 + 273.15

console.log(kelvin3 + "° K")

//Desafios Extras 2.a

let custoEnergia = 0.05
let consumoResidencia = 280
let valorCobrado = consumoResidencia * custoEnergia

console.log(valorCobrado)

//Desafios Extras 2.b

let porcentagemDesconto = valorCobrado - (15 / 100)

console.log(porcentagemDesconto)

//Desafios Extras 3.a

let libra = 20

let formulaLibraKilo = libra / 2.205

console.log("20lb equivalem a " + formulaLibraKilo + " kg")

//Desafios Extras 3.b

let onca = 10.5

let formulaOncaKilo = onca / 34

console.log("10.5 onças equivalem a " + formulaOncaKilo + " kg")

//Desafios Extras 3.c

let milha = 100

let formulaMilhaMetro = milha * 1609

console.log("100mi equivalem a " + formulaMilhaMetro + " metros")

//Desafios Extras 3.d

let pes = 50

let formulaPesMetros = pes / 3.281

console.log("50ft equivalem a " + formulaPesMetros + " metros")

//Desafios Extras 3.e

let galoes = 103.56

let formulaGaloesLitros = galoes  * 3.785

console.log("103.56gal equivalem a " + formulaGaloesLitros + " litros")

//Desafios Extras 3.f

let xicara = 450

let formulaXicaraLitro = xicara / 3.52

console.log("450xic equivalem a " + formulaXicaraLitro + " litros")

//Desafios Extras 3.g

milha = prompt("Digite a quantidade de milhas que deseja converter para metro:")

milha = Number(milha)

formulaMilhaMetro = milha * 1609

console.log(milha + " milhas equivalem a " + formulaMilhaMetro + " metros")





