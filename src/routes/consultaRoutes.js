const express = require('express');
const router = express.Router();
const consultaController = require('../controller/consultaController');
const { isAuthenticated } = require('../middleware/auth');

router.get('/', isAuthenticated, consultaController.listarConsultas);
router.get('/criar', isAuthenticated, consultaController.criarConsulta);
router.post('/criar', isAuthenticated, consultaController.salvarConsulta);
router.get('/editar/:id', isAuthenticated, consultaController.editarConsulta);
router.post('/editar/:id', isAuthenticated, consultaController.atualizarConsulta);
router.post('/excluir/:id', isAuthenticated, consultaController.excluirConsulta);

module.exports = router;
