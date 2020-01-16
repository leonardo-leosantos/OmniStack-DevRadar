const {Router} = require('express');                                    //importar módulo especifico do express : Router

const DevController = require('./controllers/DevController');           //importar controller: Dev
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;                    //exportar objeto routes de dentro do arquivo atual