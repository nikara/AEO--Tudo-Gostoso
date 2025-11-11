const CategoriaModel = require('../models/categoriaModel');

exports.listarCategoria = (req,res) =>{
    try{
        const categorias = CategoriaModel.findAll();
        const categoriaFormatadas = categorias.map(c =>({
            idcategoria: c.idcategoria,
            categoria: c.categoria,
            ativo: c.ativo
        }));
        res.json(categoriaFormatadas);
    }catch(error){
        res.status(500).json({mensagem:'Erro ao buscar tarefas' + error.message});
    }
}

exports.criarCategoria = (req,res) =>{
    const {categoria} = req.body;

    console.log("Body recebido", req.body);

    if(!categoria){
        return res.status(400).json({mensagem: 'O campo categoria é obrigatoria.'});
    }

    try{
        const id = CategoriaModel.create(categoria,1);

        console.log("Categoria criada:", {id,categoria,ativo:1});

        res.status(201).json({idcategiria: id,categoria: categoria,ativo:1});
    }catch(error){
        console.error("Erro ao criar categoria:",error);
        res.status(400).json({mensagem: 'Erro ao criar a Categoria: ' + error.message});
    }
};

exports.atualizarCategoria = (req,res) =>{
    const {categoria} = req.body;
    const id = req.params.id;
    if(!categoria){
        return res.status(400).json({mensagem: 'O campo categoria é obrigatório.'});
    }
    console.log("Atualizar categoria:", categoria, "ID:", id);


    try{
        CategoriaModel.updateCategoria(categoria,id);
        res.status(200).json({mensagem:'Categoria atualizada com sucesso!'});
    }catch(error){
        res.status(400).json({mensagem:'Erro ai atualizar a Categoria: ' + error.message});
    }   
};

exports.deletarCategoria = (req,res) =>{
    const id = req.params.id;

    try{
        CategoriaModel.delete(id);
        res.json({mensagem: 'Tarefa excluída com sucesso.'});
    }catch(error){
        res.status(500).json({mensagem: 'Erro ao deletar tarefa:' + error.message});
    }
};