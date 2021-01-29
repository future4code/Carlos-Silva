import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { generateToken } from "../services/authenticator";
import { compare } from "../services/hashManager";
import { loginInput } from '../types/loginInput';


export async function login(req: Request, res: Response) {
    try {
        const input: loginInput = {
            email: req.body.email,
            password: req.body.password
        };
        if (!input.email || !input.password) {
            throw new Error("Por favor prencha todos os campos.");
        };
        const user = await getUserByEmail(input.email);
        if (!user) {
            throw new Error("Usuario não encontrado!");
        };
        const passwordIsCorrect: boolean = await compare(
            input.password,
            user.password
        );
        if (!passwordIsCorrect) {
            throw new Error("Senha incorreta.");
        };
        const token = generateToken({ id: user.id });
        res.status(200).send({ acess_token: token });
    } catch (error) {
        res.status(400).send({ message: error.message });
    };
};