const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UsuarioController');

router.get('/',usuarioController.listarUsuario);

router.post('/',usuarioController.CriarUsuario);

router.put('/:id',usuarioController.atualizarUsuario);

router.delete('/:id',usuarioController.DeletarUsuario);

module.exports = router;