import express from "express";
import cors from 'cors';
import path from 'path';
import routes from "./routes"

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes); // A aplicação vai utilizar as rotas do arquivo routes.ts

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uplodas')));

app.listen(3333);