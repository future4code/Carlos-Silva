# Exercícios Semana 2 - aula 2

## Aprofundamento SQL

### Exercício 1 - Letra a

O comando **_ALTER TABLE Actor DROP COLUMN salary_** altera a tabela _Actor_, removendo dela a coluna _salary_

### Exercício 1 - Letra b

O comando **_ALTER TABLE Actor CHANGE gender sex VARCHAR(6)_** altera a tabela _Actor_ , mudando a coluna _gender_ para _sex_ e atribuindo novamente a ela o tamanho máximo de 6 caractéres.

### Exercício 1 - Letra c

O comando **_ALTER TABLE Actor CHANGE gender gender VARCHAR(255);_** altera a tabela _Actor_, mudando somente a quantidade de caracteres para 255 da coluna _gender_, pois o nome da coluna foi mantido.

### Exercício 1 - Letra d

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2 - Letra a

```
UPDATE Actor
SET name = "Wagner Moura", birth_date = '1976-06-27'
WHERE id = "003";
```

### Exercício 2 - Letra b

```
 UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";

  UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
```

### Exercício 2 - Letra c

```
UPDATE Actor SET
name = "Matheus Nachtergaele",
salary = 250000,
birth_date = "1968-01-03",
gender = "male"
WHERE id = "005";
```

### Exercício 2 - Letra d

- O mySQL não entende isso como erro, então não volta nenhuma mensagem de erro, porém informa que "0 rows" foram afetadas, indicando que não houve nenhuma alteração.

### Exercício 3 - Letra a

```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

### Exercício 3 - Letra b

```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4 - Letra a

```
SELECT MAX(salary) FROM Actor;
```

### Exercício 4 - Letra b

```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

### Exercício 4 - Letra c

```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

### Exercício 4 - Letra d

```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5 - Letra a

```
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```

- O código acima retorna a contagem de todos os itens da tabela, agrupando por _gender_.

### Exercício 5 - Letra b

```
SELECT id, name FROM Actor ORDER BY name DESC;
```

### Exercício 5 - Letra c

```
SELECT * FROM Actor ORDER BY salary;
```

### Exercício 5 - Letra d

```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

### Exercício 5 - Letra e

```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

### Exercício 6 - Letra a

```
ALTER TABLE Movie ADD playing_limit_date DATE;
```

### Exercício 6 - Letra b

```
ALTER TABLE Movie CHANGE rating rating FLOAT NOT NULL;
```

### Exercício 6 - Letra c

```
UPDATE Movie SET playing_limit_date = "2021-08-18" WHERE title = "Tropa de Elite";

UPDATE Movie SET playing_limit_date = "2020-08-18" WHERE title = "Doce de mãe";
```

### Exercício 6 - Letra d

```
DELETE FROM Movie WHERE id = "001";
```

### Exercício 7 - Letra a

```
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```

### Exercício 7 - Letra b

```
SELECT AVG(rating) FROM Movie;
```

### Exercício 7 - Letra c

```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```

### Exercício 7 - Letra d

```
SELECT COUNT(*) FROM Movie WHERE release_Date > CURDATE();
```

### Exercício 7 - Letra e

```
SELECT MAX(rating) FROM Movie;
```

### Exercício 7 - Letra f

```
SELECT MIN(rating) FROM Movie;
```

### Exercício 8 - Letra a

```
SELECT * FROM Movie ORDER BY title;
```

### Exercício 8 - Letra b

```
SELECT * FROM Movie ORDER BY title DESC LIMIT 5;
```

### Exercício 8 - Letra c

```
SELECT * FROM Movie WHERE release_Date < CURDATE() AND playing_limit_date > CURDATE() ORDER BY release_Date DESC LIMIT 3;
```

### Exercício 8 - Letra d

```
SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
```
