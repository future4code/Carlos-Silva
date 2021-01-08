export type extract = {
    value: number,
    date: number,
    description: string
}

export type account = {
    cpf: number,
    name: string,
    age: number,
    birthDate: string,
    balance: number,
    userExtract: extract[]
}

export let users: account[] = [
    {
        "cpf": 25896325741,
        "name": "Diana",
        "age": 20,
        "birthDate": "30/04/2000",
        "balance": 4000,
        "userExtract": [
            {
                value: 0,
                date: 16022021,
                description: "Pagando conta de luz"
            }
        ]

    },
    {
        "cpf": 12558963215,
        "name": "Marina",
        "age": 22,
        "birthDate": "20/08/1998",
        "balance": 6000,
        "userExtract": [
            {
                value: 100,
                date: 15012021,
                description: "Comprando ração de gato"
            }
        ]

    },
    {
        "cpf": 78556993252,
        "name": "Wesley",
        "age": 49,
        "birthDate": "17/10/1971",
        "balance": 2000,
        "userExtract": [
            {
                value: 200,
                date: 10032021,
                description: "Comprando baquetas"
            }
        ]

    },
    {
        "cpf": 21458874123,
        "name": "Fernanda",
        "age": 21,
        "birthDate": "30/01/1999",
        "balance": 5000,
        "userExtract": [
            {
                value: 150,
                date: 08012021,
                description: "Fazendo feira"
            }
        ]

    },
    {
        "cpf": 12345678910,
        "name": "Augusto",
        "age": 35,
        "birthDate": "18/08/1985",
        "balance": 1000,
        "userExtract": [
            {
                value: 24000,
                date: 10042021,
                description: "Pagando o curso da Labenu"
            }
        ]

    },
    
]