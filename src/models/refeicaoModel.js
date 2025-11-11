const db = require('../config/db');

exports.findAll = () =>{
    return db.prepare('SELECT * FROM refeicao ORDER BY idrefeicao DESC').all();
};

exports.create = (refeicao) =>{
    const stmt = db.prepare('INSERT INTO refeicao (refeicao,ativo) VALUES(?,0)');
    const info = stmt.run(refeicao);
    return info.lastInsertRowid;
};

exports.updateRefeicao = (id,refeicao) =>{
    const stmt = db.prepare('UPDATE refeicao SET refeicao = ? WHERE idrefeicao = ?');
    stmt.run(id,refeicao);
};

exports.delete = (id) =>{
    const stmt = db.prepare('DELETE FROM refeicao WHERE idrefeicao = ?');
    stmt.run(id);
};