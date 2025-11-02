require('dotenv').config();

const express = require('express');
const app = express();

const connectDB = require('./src/config/db');

const tarefaRoutes = require('./src/routes/tarefaRoutes');

const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/tarefas', tarefaRoutes);


const startServer = async () => {
  await connectDB();


  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
};

startServer();
