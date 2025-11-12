const db = require('../config/db');

exports.findAll = () =>{
    
    const sql = `
    SELECT
    r.idreceita,
    r.titulo,
    r.descricao,
    d.dificuldade AS nome_dificuldade
    FROM receita r 
    JOIN dificuldade d ON r.iddificuldade = d.iddificuldade
    ORDER BY r.idreceita DESC
    `;
    
    return db.prepare(sql).all();
};

exports.create = (titulo,descriacao,iddificuldade,idusuario) =>{
    const stmt = db.prepare('INSERT INTO receita (titulo,descricao,iddificuldade,idusuario) VALUES (?,?,?,?)');
    const info = stmt.run(titulo,descriacao,iddificuldade,idusuario);
    return info.lastInsertRowid;
};

exports.updateTitulo = (id,titulo) =>{
    const stmt = db.prepare('UPDATE receita SET titulo = ? WHERE idreceita = ?');
    stmt.run(titulo,id);
};

exports.updateDescricao = (id,descricao) =>{
    const stmt = db.prepare('UPDATE receita SET descricao = ? WHERE idreceita =?');
    stmt.run(descricao,id);
}

exports.delete = (id) =>{
    const stmt = db.prepare('DELETE FROM receita WHERE idreceita = ?');
    stmt.run(id);
}

exports.findId = (id) => {
    const  sql = `
    SELECT
    r.idreceita,
    r.titulo,
    r.descricao,
    d.dificuldade AS nome_dificuldade
    FROM receita r
    JOIN dificuldade d ON r.iddificuldade = d.iddificuldade
    WHERE r.idreceita = ?`;

    return db.prepare(sql).get(id);
};