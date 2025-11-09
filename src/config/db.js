const sqlite = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname,'..','..','database.sqlite');

const db = new sqlite(dbPath);

function initDB(){
    const sql = `CREATE TABLE IF NOT EXISTS tarefas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    concluida INTEGER DEFAULT 0);
    
    CREATE TABLE IF NOT EXISTS receita(
    idreceita INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descricao TEXT,
    imagem TEXT); 
    
    CREATE TABLE IF NOT EXISTS dificuldade(
    iddificuldade INTEGER PRIMARY KEY AUTOINCREMENT,
    dificuldade TEXT);

    CREATE TABLE IF NOT EXISTS cozinha(
    idcozinha INTEGER PRIMARY KEY AUTOINCREMENT,
    cozinha TEXT,
    ativo INTEGER);    

    CREATE TABLE IF NOT EXISTS categoria(
    idcategoria INTEGER PRIMARY KEY AUTOINCREMENT,
    categoria TEXT NOT NULL,
    ativo INTEGER);

    CREATE TABLE IF NOT EXISTS usuario(
    idusuario INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    data_nascimento INTEGER NOT NULL,
    cep INTERGER,
    genero INTEGER,
    senha TEXT NOT NULL,
    salt TEXT,
    inscrito INTEGER NOT NULL,
    uuid TEXT);

    CREATE TABLE IF NOT EXISTS comentario(
    idcomentario INTEGER PRIMARY KEY AUTOINCREMENT,
    comentario TEXT,
    nota REAL,
    datacomentario INTEGER);

    CREATE TABLE IF NOT EXISTS refeixao(
    idrefeicao INTEGER PRIMARY KEY AUTOINCREMENT,
    refeicao TEXT,
    ativo INTEGER);

    CREATE TABLE IF NOT EXISTS utensilio(
    idutensilio INTEGER PRIMARY KEY AUTOINCREMENT,
    utensilio TEXT);

    CREATE TABLE IF NOT EXISTS custo(
    idcusto INTEGER PRIMARY KEY AUTOINCREMENT,
    custo TEXT);

    CREATE TABLE IF NOT EXISTS preparo(
    idpreparo INTEGER PRIMARY KEY AUTOINCREMENT,
    modo_preparo TEXT,
    urlvideo TEXT,
    tempo_preparo INTEGER);

    CREATE TABLE IF NOT EXISTS ingrediente(
    idingrediente INTEGER PRIMARY KEY AUTOINCREMENT,
    ingrediente TEXT);

    CREATE TABLE IF NOT EXISTS dificuldade(
    iddificuldade INTEGER PRIMARY KEY AUTOINCREMENT,
    dificuldade TEXT);

    CREATE TABLE IF NOT EXISTS categoria_receita(
    receita_idreceita INTEGER,
    categoria_idcategoria INTEGER,
    PRIMARY KEY (receita_idreceita, categoria_idcategoria),
    FOREIGN KEY (receita_idreceita) REFERENCES receita (idreceita),
    FOREIGN KEY (categoria_idcategoria) REFERENCES categoria  (idcategoria)
    );

    CREATE TABLE IF NOT EXISTS refeica_receita(
    receita_idreceita INTEGER,
    refeicao_idrefeicao INTEGER,
    PRIMARY KEY (receita_idreceita,refeicao_idrefeicao)
    FOREIGN KEY (receita_idreceita) REFERENCES receita (idreceita),
    FOREIGN KEY (refeicao_idrefeicao) REFERENCES refeicao (idrefeicao));

    CREATE TABLE IF NOT EXISTS utensilio_receita(
    receita_idreceita INTEGER,
    utensilio_idutensilio INTEGER,
    PRIMARY KEY(receita_idreceita,utensilio_idutensilio),
    FOREIGN KEY (receita_idreceita) REFERENCES receita (idreceita),
    FOREIGN KEY (utensilio_idutensilio) REFERENCES utensilio (idutesilio));

    CREATE TABLE IF NOT EXISTS cozinha_receita(
    cozinha_idcozinha INTEGER,
    receita_idreceita INTEGER,
    PRIMARY KEY(cozinha_idcozinha,receita_idreceita),
    FOREIGN KEY (receita_idreceita) REFERENCES receita (idreceita),
    FOREIGN KEY (cozinha_idcozinha) REFERENCES cozinha (idcozinha)
    );


    `

    db.exec(sql);
    console.log('Banco de dados SQLite inicializado e tabela "tarefas" verificada.');
}

initDB();

module.exports = db;