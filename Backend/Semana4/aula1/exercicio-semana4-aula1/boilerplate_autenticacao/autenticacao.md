# Backend - Semana 4

## Aula 1 - AUTENTICAÇÃO

### Exercício 1 - Letra a

- Acredito que usar strings para representar os ids seja a melhor opção por possibilitar o uso do UUID e hexadecimais, tornando o id mais seguro e único.

### Exercício 1 - Letra b

```
export const generateId = (): string => {
      return v4()
  }
```

### Exercício 2 - Letra a

- O código indicado no exercício está criando uma conexão com o banco de dados conforme está no configurado no dotenv e também está criando uma query para criar um usuário para uma tabela específica.

### Exercício 2 - Letra b

```
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

### Exercício 3 - Letra a

- **_as string_** é utilizado para dizer que algo será criado como string. No caso mencionado no exercício é necessário usar as string para que o jwt retornado venha como string e não como número.
