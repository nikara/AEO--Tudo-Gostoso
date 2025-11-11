const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/CategoriaController');

router.get('/',categoriaController.listarCategoria);

router.post('/',categoriaController.criarCategoria);

router.put('/:id',categoriaController.atualizarCategoria);

router.delete('/:id',categoriaController.deletarCategoria);

module.exports = router;