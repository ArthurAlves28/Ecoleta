import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

// As rotas serão desacopladas do arquivo da aplicação
// Padrão para o nome dos métodos das rotas
// index: para listar items
// show: para mostrar um item
// create: para adicionar ao banco de dados
// updade: para atualizar o banco de dados
// delede: para excluir o registro

const  routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

// Exportar as rotas para utilizar na aplicação
export default routes;