require ('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

require('./src/config/db');

const tarefaRoutes = require('./src/routes/tarefaRoutes');

const receitaRoutes = require('./src/routes/receitaRoutes');

const usuarioRoutes = require('./src/routes/usuarioRoutes');

const categoriaRoutes = require('./src/routes/categoriaRoutes');

const refeicaoRoutes = require('./src/routes/refeicaoRoutes');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api/tarefas',tarefaRoutes);

app.use('/api/receitas',receitaRoutes);

app.use('/api/usuarios',usuarioRoutes);

app.use('/api/categorias',categoriaRoutes);

app.use('/api/refeicao',refeicaoRoutes);

app.get('/',(req,res) => {
    res.send('Servidor Node.js + Express rodando com sucesso!');
});

app.listen(PORT,() => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});