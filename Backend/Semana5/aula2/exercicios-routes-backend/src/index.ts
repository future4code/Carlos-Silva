import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.use("/user")
app.use("/user")

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})

/*
   RESPOSTA EXERCÍCIO 4

   LETRA A - Não precisamos criar outra modelagem para envio, somente para respostas.
   LETRA B - Agora é preciso preparar os recebimentos de respostas

*/