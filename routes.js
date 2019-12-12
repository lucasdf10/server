const express = require('express');
const routes = new express.Router()
const indexController = require('./controllers/IndexController');
const easytrackingController = require('./controllers/EasyTrackingController');
const autotreinamentoController = require('./controllers/AutotreinamentoController');
const cowipController = require('./controllers/CowipController');
const alienController = require('./controllers/AlienController');
const fyaController = require('./controllers/FYAController')

//Routes para IndexController
routes.get('/', indexController.index);

//Routes para EasyTrackingController
routes.get('/easytracking',easytrackingController.easytrackingRender);  
routes.post('/easytracking',easytrackingController.easytrackingPost);

//Routes para autotreinamento
routes.get('/autotreinamento/QA',autotreinamentoController.questionAndAnswers);
routes.get('/autotreinamento/links',autotreinamentoController.links);

//Routes para Cowip
routes.get('/cowip/getCoworkings',cowipController.getCoworkings);
routes.get('/cowip/getDaysBooked',cowipController.getDaysBooked);
routes.get('/cowip/getServicesAvailable',cowipController.getServicesAvailable);
routes.get('/cowip/getPhoneCode',cowipController.getPhoneCode);
routes.post('/cowip/user',cowipController.user);
routes.post('/cowip/card',cowipController.card);
routes.get('/cowip/getCards',cowipController.getCards);
routes.get('/cowip/getDoorCode',cowipController.getDoorCode);
routes.get('/cowip/getMyBookings',cowipController.getMyBookings);

//Routes para Alien

routes.get('/alien/getStocks',alienController.getStocks);
routes.get('/alien/getXml',alienController.getXml);


//Routes para FYA

routes.get('/fya/getSports',fyaController.getSports);

module.exports = routes;
