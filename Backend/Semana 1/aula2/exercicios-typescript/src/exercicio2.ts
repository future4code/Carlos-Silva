//*** Letra a e letra b***

// A entrada é o parametro da função e a saída é o return.

/*
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: any = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

*/

//*** Letra c***

type amostraDeDados = {
    numeros: [5,10,15,20,25,30],
    obterEstatisticas: (numeros: number[]) => {

        const numerosOrdenados = numeros.sort(
            (a, b) => a - b
        )
    
        let soma: number = 0
    
        for (let num of numeros) {
            soma += num
        }
    
        const estatisticas: any = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
    
        return estatisticas
    }
}