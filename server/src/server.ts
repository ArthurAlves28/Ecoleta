import express, { request, response } from "express";

const app = express();

app.use(express.json());

// criar uma rota para acessar servidor pelo url localhost:3333/users
// rota é o endereço completo de requisição
// recurso é a entidade que estamos acessando no sistema, nesse caso /users

// Requisições
// GET: usammos quando queremos buscar informações do back-end
// POST: usamos quando queremos criar informações no back-end
// PUT: usamos quando vamos atualizar uma informação no back-end
// DELETE: usamos quando vamos excluir uma informação no back-end

// Exemplo:
// POST http://localhost:3333/users = criar usuários
// GET http://localhost:3333/users = listar usuários
// GET http://localhost:3333/users/5 = buscar dados do usuário com ID 5
// PUT http://localhost:3333/users = atualizar usuários
// DELETE http://localhost:3333/users = exclui usuários

// Tipos de parâmetros
// Request Parm: Sáo parâmetros que vem na propia rota e que identificam um recurso
// nesse caso, sempre que precisar manipular um usuário, urilizaremos o Request Param
// Query Param: São parâmetros que  vem na propria rota, geralmente opicionais, utilizados para pesquisa, filtro, paginação
// Requast body: São parâmetros para manupulaão de informações (criação/atualização deinformações)

const users = [
    'Diego',
    'Celiton',
    'Robson',
    'Daniel'
]

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    };

    // É boa prática uttilizar o return para parar
    // a execução do código depois que ele restorna 
    // a informaçãopara o cliente (browser)

    return response.json(user);
});

app.listen(3333);