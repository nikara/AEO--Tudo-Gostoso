const db = require('../config/db');

exports.findAll = () =>{
    const sql = `
    SELECT 
    u.idusuario,
    u.nome,
    u.email,
    u.data_nascimento,
    u.cep,
    u.genero,
    u.senha,
    u.salt,
    u.inscrito,
    u.uuid
    FROM usuario u
    ORDER BY u.idusuario DESC`;

    return db.prepare(sql).all();

};

exports.create = (nome,email,data_nascimento,senha,inscrito) =>{
  const stmt = db.prepare('INSERT INTO usuario (nome,email,data_nascimento,senha,inscrito) VALUES (?,?,?,?,?)');
  const info = stmt.run(nome,email,data_nascimento,senha,inscrito);
  return info.lastInsertRowid;
    
};

exports.updateUsuario = (nome,email,data_nascimento,senha,id) =>{
  const stmt = db.prepare('UPDATE usuario SET nome = ?, email = ?, data_nascimento = ?, senha = ? WHERE idusuario = ?');
  stmt.run(nome,email,data_nascimento,senha,id);
};

exports.delete = (id) =>{
  const stmt = db.prepare('DELETE FROM usuario WHERE idusuario = ?');
  stmt.run(id);
}

exports.findById = (id) =>{
    const sql =`
    SELECT 
    u.idusuario,
    u.nome,
    u.email,
    u.data_nascimento,
    u.cep,
    u.genero,
    u.senha,
    u.salt,
    u.inscrito,
    u.uuid
    FROM usuario u
    WHERE u.idusuario = ?`;

    return db.prepare(sql).get(id);
};