const ReceitaModel = require('../models/ReceitaModel');

exports.listarReceitas = (req,res) =>{
    try{
        const receitas = ReceitaModel.findAll();
        res.json(receitas);
    }catch(error){
        res.status(500).json({mensagem: 'Erro ao buscar receitas:' + error.message});
    }
};

exports.criarReceita = (req,res) =>{
    const{titulo,descricao,iddificuldade,idusuario} = req.body;
    
    if(!titulo || !descricao || !iddificuldade || !idusuario){
        return res.status(400).json({mensagem: 'Título,descricão,dificuldade e ID de usuário são obrigatórios.'});
    }

    try{
        const id = ReceitaModel.create(titulo,descricao,iddificuldade,idusuario);
        const novaReceita = ReceitaModel.findyId(id);
        res.status(201).json(novaReceita);
    }catch(error){
        res.status(400).json({mensagem:'Erro ao criar receita. Verifique se os IDs de dificuldade e usuário existem:' + error.message});
    }
};

exports.atualizarTitulo = (req,res) =>{
    const {titulo} = req.body;
    const id = req.params.id;

    try{
        ReceitaModel.updateTitulo(id,titulo);
        res.json({mensagem: 'Titulo atualizado com sucesso.'});
    }catch(error){
        res.status(400).json({mensagem: 'Erro ao atualizar titulo' + error.message});
    }
};

exports.atualizarDescricao = (req,res) =>{
    const {descricao} = req.body;
    const id = req.params.id;

    try{
        ReceitaModel.updateDescricao(id,descricao);
        res.json({mensagem: 'Descricao atualizada com sucesso.'});
    }catch(error){
        res.status(400).json({mensagem: 'Erro ao atualizar descricao' + error.message});
    }
};

exports.deletarReceita = (req,res) =>{
    const id = req.params.id;

    try{
        ReceitaModel.delete(id);
        res.json({mensagem: 'Receita apaga'});
    }catch(error){
        res.status(400).json({mensagem:'Erro ao apagar receita ' + error.message});
    }
}