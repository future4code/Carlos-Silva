import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv"
import insertUser from "./data/insertUser";
import createUser from "./endpoints/signup";
import { login } from "./endpoints/login";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.post('/recipe')
app.get('/user/profile')
app.get('/user/:id')
app.get('/recipe/:id')

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});