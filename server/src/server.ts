import express, { request, response } from "express";
import routes from "./routes"

const app = express();

app.use(express.json());
app.use(routes); // A aplicação vai utilizar as rotas do arquivo routes.ts

app.listen(3333);