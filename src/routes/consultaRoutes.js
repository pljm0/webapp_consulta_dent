const express = require('express');
const router = express.Router();
const consultaController = require('../controller/consultaController');
const usuarioController = require('../controller/usuarioController')
const { isAuthenticated } = require('../middleware/auth');

router.get('/', isAuthenticated, consultaController.listarConsultas);
router.get('/criar', isAuthenticated, consultaController.criarConsulta);
router.post('/criar', isAuthenticated, consultaController.salvarConsulta);
router.get('/editar/:id', isAuthenticated, consultaController.editarConsulta);
router.post('/editar/:id', isAuthenticated, consultaController.atualizarConsulta);
router.post('/excluir/:id', isAuthenticated, consultaController.excluirConsulta);
router.get('/atualizar-usuario', isAuthenticated, usuarioController.mostrarFormularioAtualizacao);
router.post('/atualizar-usuario', isAuthenticated, usuarioController.atualizarUsuario);

module.exports = router;
