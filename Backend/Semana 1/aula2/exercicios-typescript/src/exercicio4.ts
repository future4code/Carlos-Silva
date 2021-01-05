//*** letra a, letra b e letra c

//Para gerar um arquivo .js a partir do arquivo .ts utilizei o comando tsc exercicio4.ts
// Para gerar varios arquivos .js ao mesmo tempo, utilizei o tsc e os nomes dos arquivos .ts separados por espaço

type pokemon {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon2: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}