const express = require('express');
const router = express.Router();
const refeicaoController = require('../controllers/refeicaoController');

router.get('/',refeicaoController.listarRefeicao);

router.post('/',refeicaoController.criarRefeicao);

router.put('/:id',refeicaoController.atualizarRefeicao);

router.delete('/:id',refeicaoController.deletarRefeicao);

module.exports = router;