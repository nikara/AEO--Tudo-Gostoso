const db = require('../config/db');

exports.findAll = () =>{
    const sql =`
    SELECT 
    c.idcategoria,
    c.categoria,
    c.ativo
    FROM
    categoria c
    ORDER BY c.idcategoria DESC
    `;
    return db.prepare(sql).all();
};

exports.findyId = (id) =>{
    const sql =`
    SELECT 
    c.idcategoria,
    c.categoria,
    c.ativo
    FROM
    categoria c
    WHERE c.idcategoria = ?
    `;

    return db.prepare(sql).get(id);
};

exports.create = (categoria,ativo) =>{
    const stmt = db.prepare('INSERT INTO categoria(categoria,ativo) VALUES (?,?)');
    const info = stmt.run(categoria,ativo);
    return info.lastInsertRowid;
};

exports.updateCategoria = (categoria,id) =>{
    console.log("Executando update:", categoria, id);

    const stmt = db.prepare(`
        UPDATE categoria 
        SET categoria = ? 
        WHERE idcategoria = ?`);
    const info = stmt.run(categoria,id);

    console.log("Resultado do update:", info);
    return info;
}

exports.delete = (id) =>{
    const stmt = db.prepare('DELETE FROM categoria WHERE idcategoria = ?');
    const info = stmt.run(id);
    console.log("Resultado do delete:",info);
    return info;
}