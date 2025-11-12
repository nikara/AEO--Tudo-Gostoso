const express = require('express');
const router = express.Router();
const receitaController = require('../controllers/ReceitaController');

router.get('/',receitaController.listarReceitas);

router.post('/',receitaController.criarReceita);

router.put('/atualizarTitulo/:id',receitaController.atualizarTitulo);

router.put('/atualizarDescricao/:id',receitaController.atualizarDescricao);

router.delete('/:id',receitaController.deletarReceita);

module.exports = router;