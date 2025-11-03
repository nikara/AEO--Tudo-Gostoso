const db = require('../config/db');

exports.findAll = () => {
    return db.prepare('SELECT * FROM tarefas ORDER BY id DESC').all();
};

exports.create = (titulo) =>{
    const stmt = db.prepare('INSERT INTO tarefas (titulo, concluida) VALUES (?,0)');
    const info = stmt.run(titulo);
    return info.lastInsertRowid;
}

exports.updateStatus = (id,concluida) =>{
    const stmt = db.prepare('UPDATE tarefas SET concluida = ? WHERE id = ?');
    stmt.run(concluida ? 1 : 0,id);
};

exports.delete = (id) => {
    const stmt = db.prepare('DELETE FROM tarefas WHERE id = ?');
    stmt.run(id);
};