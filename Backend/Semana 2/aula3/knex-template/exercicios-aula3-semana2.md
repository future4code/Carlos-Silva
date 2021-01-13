## EXERCÍCIOS AULA 3 -SEMANA 2

### Respostas das questões conceituais

#### Exercício 1 - letra a

- A resposta devolvida com raw, além do array com a resposta requerida, entrega também um segundo array com metadados, que é desnecessário. Para obtermos somente a informação necessária, devemos adicionar o index do array, ou seja [0].

#### Exercício 1 - letra b

```
const getActorByNAme = async (name: string): Promise<any> => {
  try{

    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)
    console.log(result[0])
    return result[0]

  }catch (error){

    console.error(error.sqlMessage || error.message)

  }
}
getActorByNAme("Wagner Moura")
```

#### Exercício 1 - letra c

```
const getCountByGender = async (gender: string): Promise<any> => {
  try{

    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
    `)
    console.log(result[0])
    const count = result[0].count
    return count

  }catch (error){

    console.error(error.sqlMessage || error.message)

  }
}

getCountByGender("female")
```

#### Exercício 2 - letra a

```
const updateActorSalary = async (id: string, salary: number): Promise<any> => {
  try{
    await connection("Actor").update({
      salary: salary,
    }).where ("id", id)
  }catch (error){
    console.error(error.sqlMessage || error.message)
  }
}

updateActorSalary("001", 1350000)
```

#### Exercício 2 - letra b

```
const deleteActorById = async (id: string): Promise<any> => {
  try{
    await connection("Actor").delete().where ("id", id)

  }catch (error){
    console.error(error.sqlMessage || error.message)
  }
}

deleteActorById("009")
```

#### Exercício 2 - letra c

```
const getAverageSalaryByGender = async (gender: string): Promise<any> => {
  try{
    const result = await connection("Actor").avg("salary").where({gender})
    console.log(result[0])
    return result[0].average
  }catch (error){
    console.error(error.sqlMessage || error.message)
  }
}

getAverageSalaryByGender("male")
```

#### Exercício 3 - letra a

```
const getActorById = async (id:string): Promise<any> => {
  try{
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0]
  }catch (error){
    console.error(error.sqlMessage || error.message)
  }
}

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

#### Exercício 3 - letra b

```

```

#### Exercício 4 - letra a

```

```
