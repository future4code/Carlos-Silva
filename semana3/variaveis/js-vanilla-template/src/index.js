// Resposta exercício de interpretação 1 //
/* 
A princípio eu imagino que deveria dar um erro, pois não tem a utilização de var, let ou const.  

Caso isso não seja um erro, então será impresso:

10

10 5

*/

// Resposta exercício de interpretação 2 //

/* 
Conforme falei no exercício anterior, caso não seja errado declarar o a, b e c sem os nomes var, let ou const então:

10 10 10 

*/

// Resposta exercício de escrita 1 //

let name

let age

console.log(typeof name)

console.log(typeof age)

// Foi impresso Undefined, pois não foi atribuido nenhum valor pra essas variáveis //

name = prompt("Qual é o seu nome?")

age = prompt("Qual é a sua idade?")

console.log(typeof name)

console.log(typeof age)

// Notei que tanto para name quanto para age ele retorna o typeof como string. //

console.log("Olá", name, "você tem", age, "anos")

// Resposta exercício de escrita 2 //

let soccerTeam = prompt("Pra que time de futebol você torce?")

let favoriteColor = prompt("Qual a sua cor favorita?")

let favoriteGame = prompt("Qual o seu jogo de video-game favorito?")

console.log("1. Qual seu nome?")

console.log("Resposta:", name)

console.log("2. Qual sua idade?")

console.log("Resposta:", age)

console.log("3. Pra que time de futebol você torce?")

console.log("Resposta:", soccerTeam)

console.log("4. Qual a sua cor favorita?")

console.log("Resposta:", favoriteColor)

console.log("5. Qual o seu jogo de video-game favorito?")

console.log("Resposta:", favoriteGame)

// Resposta exercício de escrita 3 //

let favoriteFoods = ["pizza", "strogonoff", "picanha", "cupim", "coração"]

console.log(favoriteFoods)

console.log("Essas são as minhas comidas preferidas:")

console.log(favoriteFoods[0])

console.log(favoriteFoods[1])

console.log(favoriteFoods[2])

console.log(favoriteFoods[3])

console.log(favoriteFoods[4])

favoriteFoods[1] = prompt("Qual a sua comida favorita?")

console.log(favoriteFoods)

// Resposta exercício de escrita 4 //

let yesOrNotQuestions = ["Você dirige bem?", "Você come muito?", "Você cozinha bem?"]

let yesOrNotAnswers = [true, true, false]

console.log(yesOrNotQuestions[0], yesOrNotAnswers[0])

console.log(yesOrNotQuestions[1], yesOrNotAnswers[1])

console.log(yesOrNotQuestions[2], yesOrNotAnswers[2])

