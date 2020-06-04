import express from 'express';

// As rotas serão desacopladas do arquivo da aplicação
const  routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({message:'Hello world'});
});

// Exportar as rotas para utilizar na aplicação
export default routes;