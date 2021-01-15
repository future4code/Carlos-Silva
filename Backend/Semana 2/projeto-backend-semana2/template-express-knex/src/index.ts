import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

//ENDPOINT 1 - CRIA USUÁRIOS

const createUser = async (name: string, nickname: string, email: string):Promise<void> => {

   try {
      await connection
      .insert({
        id: String(Date.now()),
        name,
        nickname,
        email
      })
      .into("TodoListUser ");    
    } catch (error) {
      console.log(error) 
    }
  
}

app.post("/user", async (req: Request, res: Response) => {
   try {

       //Validação todos os campos obrigatórios
       const keys = Object.keys(req.body)
  
       for (const key of keys) {
         if (req.body[key] == "")
           return res.status(400).send({ message: "Por gentileza preencha todos os campos corretamente!"})
       }
 
      const {name, nickname, email} = req.body
      
      await createUser(name, nickname, email);
 
     res.status(200).send("Usuário criado com sucesso");
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
 });

// ENDPOINT 2 - PEGA USUÁRIOS PELO ID
 
 const getUserById = async (id: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT * FROM TodoListUser WHERE id = "${id}"
   `);
   return result;
 };

 app.get("/user/:id", async (req: Request, res: Response) => {
   try {
      const id = req.params.id
      const user = await getUserById(id);
 
      res.status(200).send(user);
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
 });


 //ENDPOINT 3 - EDITAR USUÁRIO

 const updateUser = async (id: string, name: string, nickname: string, email: string): Promise<any> => {
    const result = await connection.raw(`
      UPDATE TodoListUser 
      SET 
         name = "${name}",
         nickname = "${nickname}",
         email = "${email}"
      WHERE 
         id = ${id}
    `)
    return result[0]
 }

 app.post("user/edit/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try{
      const id = req.params.id
      const name = req.body.name
      const nickname = req.body.nickname
      const email = req.body.email

      if(!req.params.id || !req.body.name || !req.body.nickname || req.body.email){
         errorCode = 422
         throw new Error("Dados faltantes ou incorretos. Tente novamente.")
      }
      const result = await updateUser(id, name, nickname, email)
      res.status(200).send(result)
    } catch (error) {
      res.status(400).send({
         message: error.message,
       });
    }
 })

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
