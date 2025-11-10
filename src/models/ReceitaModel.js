const db = require('../config/db');

exports.findAll = () =>{
    
    const sql = `
    SELECT
    r.idreceita,
    r.titulo,
    r.descriacao,
    d.dificuldade AS nome_dificuldade
    FROM receita r 
    JOIN dificuldade d ON r.idificuldade = d.iddificuldade
    ORDER BY r.idreceita DESC
    `;
    
    return db.prepare(sql).all();
};

exports.create = (titulo,descriacao,iddificuldade,idusuario) =>{
    const stmt = db.prepare('INSERT INTO receita (titulo,descricao,iddificuldade,idusuario) VALUES (?,?,?,?)');
    const info = stmt.run(titulo,descriacao,iddificuldade,idusuario);
    return info.lastInsertRowid;
}

exports.findyId = (id) => {
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
}