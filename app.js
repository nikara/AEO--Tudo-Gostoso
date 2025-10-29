import {"sqlite3"} from 'sqlite3';
import {open} from 'sqlite';

async function criarEPopularTabelaUsuario(nome,sobrenome){
    const db = await open({
        filename:'./banco.db',
        driver: sqlite3.driver,
    });

    db.run(`CREATE TABLE IF NOT EXIST usuarios (id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT)`);
    db.run(`INSERT INTO usuarios (nome,sobrenome) VALUES (?,?)`,[nome,sobrenome,]);
}

criarEPopularTabelaUsuario("Daniel","Porto");