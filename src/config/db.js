const sqlite = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname,'..','..','database.sqlite');

const db = new sqlite(dbPath);

function initDB(){
    const sql = `CREATE TABLE IF NOT EXISTS tarefas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    concluida INTEGER DEFAULT 0);
    
    CREATE TABLE IF NOT EXIST receita(
    idreceita INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descricao TEXT,
    imagem TEXT `

    db.exec(sql);
    console.log('Banco de dados SQLite inicializado e tabela "tarefas" verificada.');
}

initDB();

module.exports = db;