const express = require('express');
const router = express.Router();
const receitaController = require('../controllers/ReceitaController');

router.get('/',receitaController.listarReceitas);

router.post('/',receitaController.criarReceita);

module.exports = router;