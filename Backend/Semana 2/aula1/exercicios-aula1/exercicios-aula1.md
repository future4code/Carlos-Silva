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

```
SELECT * from Actor WHERE gender = "female";
```

### Exercício 3 - Letra b

```
SELECT salary from Actor WHERE name = "Tony Ramos";
```

### Exercício 3 - Letra c

```
SELECT * from Actor WHERE gender = "invalid";
```

- Foi retornada uma linha com todos as colunas da tabela, porém todas elas com _NULL_, já que não há nenhum item com gender _"invalid"_

### Exercício 3 - Letra d

```
SELECT id, name, salary from Actor WHERE salary <= 500000;
```

### Exercício 3 - Letra e

Foi retornado o código de erro 1054 - _Unknow column 'nome' in field list_. Traduzindo seria _Coluna 'nome' desconhecida no campo da lista_.
Esse erro aconteceu porque ao invés de informar **name** na query, foi informado em português, nome.

Corrigido ficaria assim:

```
SELECT id, name from Actor WHERE id = "002";
```

### Exercício 4 - Letra a

- A query em questão seleciona **(_SELECT_)** todas as informações **(\*)** da tabela Actor **(FROM Actor)** onde **(WHERE)** os nomes comecem com a letra A ou J **((name LIKE "A%" OR name LIKE "J%"))** e **(AND)** o salário seja maior que 300000 **(salary > 300000)**

### Exercício 4 - Letra b

```
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```

### Exercício 4 - Letra c

```
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";
```

### Exercício 4 - Letra d

```
SELECT * FROM Actor WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5 - Letra a

- Aquery abaixo cria uma tabela de nome **Movie** com as colunas id, title, synopsis, release_Date e rating

```
CREATE TABLE Movie
(
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```

### Exercício 5 - Letra b

```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "001",
  "Se eu fosse você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
  );
```

### Exercício 5 - Letra c

```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
  );
```

### Exercício 5 - Letra d

```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02",
  8
  );
```

### Exercício 5 - Letra e

```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "004",
  "Tropa de Elite",
  "Em Tropa de Elite, o dia-a-dia do grupo de policiais e de um capitão do BOPE (Wagner Moura), que quer deixar a corporação e tenta encontrar um substituto para seu posto. Paralelamente dois amigos de infância se tornam policiais e se destacam pela honestidade e honra ao realizar suas funções, se indignando com a corrupção existente no batalhão em que atuam.",
  "2007-10-12",
  9
  );
```

### Exercício 6 - Letra a

```
SELECT id, title, rating FROM Movie WHERE id = "002";
```

### Exercício 6 - Letra b

```
  SELECT * FROM Movie WHERE title = "Tropa de Elite";
```

### Exercício 6 - Letra c

```
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;
```

### Exercício 7 - Letra a

```
SELECT * FROM Movie WHERE title LIKE "%vida%";
```

### Exercício 7 - Letra b

```
SELECT * FROM Movie
WHERE title LIKE "%confusões%"
OR synopsis LIKE "%confusões%";
```

### Exercício 7 - Letra c

```
SELECT * FROM Movie
WHERE release_Date < "2021-01-11" ;
```

### Exercício 7 - Letra d

```
SELECT * FROM Movie
  WHERE release_Date < "2021-01-11"
  AND (title LIKE "%professora%"
  OR synopsis LIKE "%professora%") AND rating > 7;
```
