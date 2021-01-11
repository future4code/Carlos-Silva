# Exercícios Semana 2 - aula 1

## SQL

### Exercício 1 - Letra a

**Explicando os comandos da query**

- **CREATE TABLE Actor** - Cria uma tabela e atribui a ela o nome _Actor_
- **id VARCHAR(255) PRIMARY KEY** - Cria um campo na tabela com a "etiqueta" _id_, atribuindo a ela o tipo _VARCHAR_ e dando a essa string o tamanho máximo de 255 caracteres. Além disso, atribui essa string como _PRIMARY KEY_ o que informa que ela é única, obrigatória e imutável.
- **name VARCHAR** (255) NOT NULL - - Cria um campo na tabela com a "etiqueta" _name_, atribuindo a ela o tipo _VARCHAR_ e dando a essa string o tamanho máximo de 255 caracteres. Além disso, informa também que esse campo é obrigatório, ou seja, não poderá ser _NULL_
- **salary FLOAT NOT NULL** - Conforme explicação dada no próprio exercício, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela.
- **birth_date DATE NOT NULL** - Cria um campo na tabela com a "etiqueta" _birth_date_, atribui a ela o tipo _DATE_ que significa dizer que é uma data no formato YYYY-MM-DD. Além disso, informa também que esse campo é obrigatório, ou seja, não poderá ser _NULL_
- **gender VARCHAR(6) NOT NULL** - Cria um campo na tabela com a "etiqueta" _gender_, atribuindo a ela o tipo _VARCHAR_ e dando a essa string o tamanho máximo de 6 caracteres. Além disso, informa também que esse campo é obrigatório, ou seja, não poderá ser _NULL_

### Exercício 1 - Letra b

- **SHOW DATABASES** - Mostra o valor informado na criação do _SCHEMA_ No meu caso, _dumont-carlos-augusto_.
- **SHOW TABLES** - Mostra as tabelas criadas.

### Exercício 1 - Letra c

O comando _DESCRIBE Actor_ mostra a tabela Actor com todos os seus campos e tipos, dizendo ainda se os campos são nulos e qual campo é primary.

### Exercício 2 - Letra a

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES
(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```

### Exercício 2 - Letra b

Foi retornado o código de erro 1062 - _Duplicate entry '002' for key 'PRIMARY'_. Traduzindo, seria _Entrada '002' duplicada para chave primária_.
Esse erro ocorreu porque o campo id é uma _PRIMARY KEY_ e ele deve ser único. Como já havia sido atribuído o número 002 para o id de outra pessoa, o erro ocorre.

### Exercício 2 - Letra c

Foi retornado o código de erro 1136 - _Column count doesn't match value count at row 1_. Traduzindo seria _Contagem de colunas não bate com a contagem na linha 1_.
Esse erro aconteceu porque a quantidade de itens informado em **INSERT INTO ACTOR ()** não bate com a quantidade informada dentro de **VALUES()**

Corrigindo ficaria:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);
```

### Exercício 2 - Letra d

Foi retornado o código de erro 1364 - _Field 'name' doesn't have a default value_. Traduzindo seria _Campo 'name' não possui um valor atribuído_.
Esse erro aconteceu porque não foi informado em **INSERT INTO ACTOR ()** e em **VALUES()** o campo "name". Como ele é NOT NULL, o erro ocorre.

Corrigindo ficaria:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18",
  "male"
);
```

### Exercício 2 - Letra e

_Foi retornado o código de erro 1292 - \_Incorrect date value: '1950' for column 'birth_date' at row 1_. Traduzindo seria _Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1_.
Esse erro aconteceu porque a data havia sido informada sem as aspas, levando o workbench a interpretar de forma equivocada.

Corrigindo ficaria:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Juliana Paes",
  719333.33,
  "1979-03-26",
  "female"
);
```

### Exercício 2 - Letra f

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "008",
  "Malu Mader",
  900000,
  "1966-09-12",
  "female"
),
(
  "009",
  "Erick Marmo",
  150000,
  "1976-06-24",
  "male"
);
```

### Exercício 3 - Letra a
