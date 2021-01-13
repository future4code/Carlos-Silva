import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

app.get('/actor', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

// Resposta Exercicio 1 letra b
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

//Resposta exercicio 1 letra c

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

//Resposta exercicio 2 letra a

const updateActorSalary = async (id: string, salary: number): Promise<any> => {
  try{
    await connection("Actor").update({
      salary: salary,
    }).where ("id", id)
  }catch (error){
    console.error(error.sqlMessage || error.message)
  }
}

//Resposta exercicio 2 letra b

const deleteActorById = async (id: string): Promise<any> => {
  try{
    await connection("Actor").delete().where ("id", id)

  }catch (error){
    console.error(error.sqlMessage || error.message)
  }
}

//Resposta exercicio 2 letra c

const getAverageSalaryByGender = async (gender: string): Promise<any> => {
  try{
    const result = await connection("Actor").avg("salary").where({gender})
    console.log(result[0])
    return result[0].average
  }catch (error){
    console.error(error.sqlMessage || error.message)
  }
}

//Resposta exercicio 3 letra a
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

//Resposta exercicio 3 letra b

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await getCountByGender(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});