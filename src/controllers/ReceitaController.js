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