// *** Letra a ***
/*
    const minhaString: string = 5

    Ao tentar atribuir um número acontece um erro, pois o correto deveria ser atribuir uma String, já que a variável é do tipo String

*/
// *** Letra b ***
/*
const meuNumero: number = 5

const meuNumero2: number | string = "cinco"

*/
// *** Letra c ***
/*
const pessoa: {nome: string, idade: number, corFavorita: string} = {
    nome: "Augusto",
    idade: 35,
    corFavorita: "laranja",
}
*/
// *** Letra d ***
/*
type pessoa = {nome: string, idade: number, corFavorita: string};

const pessoa1: pessoa = {
    nome: "Mateus",
    idade: 25,
    corFavorita: "rosa"
}

const pessoa2: pessoa = {
    nome: "Wellington",
    idade: 32,
    corFavorita: "branco"
}

const pessoa3: pessoa = {
    nome: "Felipe",
    idade: 30,
    corFavorita: "azul"
}

*/
var CoresDoArcoIris;
(function (CoresDoArcoIris) {
    CoresDoArcoIris["VERMELHO"] = "Vermelho";
    CoresDoArcoIris["LARANJA"] = "Laranja";
    CoresDoArcoIris["AMARELO"] = "Amarelo";
    CoresDoArcoIris["VERDE"] = "Verde";
    CoresDoArcoIris["AZUL"] = "Azul";
    CoresDoArcoIris["ANIL"] = "Anil";
    CoresDoArcoIris["VIOLETA"] = "Violeta";
})(CoresDoArcoIris || (CoresDoArcoIris = {}));
var cor1 = {
    "class": CoresDoArcoIris.VERMELHO
};
