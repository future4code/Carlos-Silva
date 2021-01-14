# **_BACKEND_**

## EXERCÍCIOS Semana 2 - Aula 4

---

#### Exercício 1 - letra a

- **_Chave estrangeira_** ou **_Foreign Key_** é o comando responsável por fazer a ligação entre uma tabela e outra.

#### Exercício 1 - letra b

```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"001",
    "Sensacional.",
    8.5,
    "002"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"002",
    "Razoável",
    6.5,
    "003"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"003",
    "Espetacular",
    9,
    "004"
);
```

#### Exercício 1 - letra c

- Ao tentar criar uma avaliação para um id inexistente a resposta recebida foi **_Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails_**, indicando que noi foi possível adicionar ou alterar a linha já que o id (que é o FOREIGN KEY) não existe na tabela Movie.

#### Exercício 1 - letra d

```
ALTER TABLE Movie DROP COLUMN rating;
```

#### Exercício 1 - letra e

- Ao tentar apagar um filme que possuia avaliação a resposta recebida foi **_Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails_**, indicando que não é possível apagar ou alterar uma linha que esteja sendo utilizada ou influenciando outra tabela.

#### Exercício 2 - letra a

- Essa tabela serve simplesmente pra fazer a entre a tabela Movie e a tabela Actor no caso N:M, ou seja, onde várias coisas de uma tabela se relacionam com várias coisas da outra.

#### Exercício 2 - letra b

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES
("004", "003"), ("004", "005"), ("003", "001"), ("003", "004"), ("003", "006"),
("002", "003"), ("002", "005"), ("002", "007");
```

#### Exercício 2 - letra c

- O erro retornado é **_Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails
  _**, indicando que um dado FOREIGN KEY informado está incorreto ou não existe.

#### Exercício 2 - letra d

- O erro retornado ao tentar apagar um ator que possui relação com a tabela MovieCast é **_Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails_**, indicando que não é possível apagar um item que tenha relação com outra tabela.

#### Exercício 3 - letra a

- A query indicada no exercicio faz a junção de duas tabelas Movie e Rating. O operador ON evita repetições se baseando, nesse caso, no id.

#### Exercício 3 - letra b

```
SELECT Movie.id, Movie.title, Rating.rate FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

#### Exercício 4 - letra a

```
SELECT Movie.id, Movie.title, Rating.rate, Rating.comment FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```

#### Exercício 4 - letra b

```
 SELECT Movie.id, Movie.title, MovieCast.actor_id FROM Movie RIGHT JOIN MovieCast ON MovieCast.movie_id = Movie.id;
```

#### Exercício 4 - letra c

```
SELECT AVG(Rating.rate), Movie.id, Movie.title FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id
GROUP BY (Movie.id);
```

#### Exercício 5 - letra a

- Essa query junta as tabelas Movie e MovieCast no primeiro JOIN e o resultado disso é unido à tabela Actor no segundo JOIN.

#### Exercício 5 - letra b

```
SELECT Movie.id as movie_id, Movie.title as movie_title, Actor.id as actor_id, Actor.name as actor_name FROM Movie LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id JOIN Actor ON Actor.id = MovieCast.actor_id;
```

#### Exercício 5 - letra c

- A query em questão une as tabelas Movie, Actor e MovieCast, utilizando dois JOINs e retornando somente id e nome dos atores e id e titulo dos filmes.

#### Exercício 5 - letra d

- Se der tempo eu volto nessa. :)

#### Exercício 6 - letra a

- Essa relação é do tipo N:M

#### Exercício 6 - letra b

```
ALTER TABLE Movie ADD oscar VARCHAR (255);

ALTER TABLE Movie ADD oscar_date DATE;
```

#### Exercício 6 - letra c

```

```
