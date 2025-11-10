const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UsuarioController');

router.get('/',usuarioController.listarUsuario);

router.post('/',usuarioController.CriarUsuario);

module.exports = router;