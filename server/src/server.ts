import express from "express";

const app = express();

// criar uma rota para acessar servidor pelo url /users
app.get('/users', (request, response) => {
    console.log("Listagem de usuários");

    response.json([
        'Diego',
        'Celiton',
        'Robson',
        'Daniel'
    ]);
});

app.listen(3333);