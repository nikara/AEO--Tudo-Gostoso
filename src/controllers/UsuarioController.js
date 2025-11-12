const UsuarioModel = require('../models/UsuarioModel');

exports.listarUsuario = (req,res) =>{
    try{
        const usuarios = UsuarioModel.findAll();
        res.json(usuarios);
    }catch(error){
        res.status(500).json({mensagem:'Erro ao buscar usuarios:'+ error.message});
    }
};

exports.CriarUsuario = (req,res) =>{

    const {nome,email,data_nascimento,senha,inscrito} = req.body;
    
    if(!nome || !email || !data_nascimento || !senha || !inscrito === undefined){
        return res.status(400).json({mensagem: 'Nome,Email,Data de Nascimento, Senha e Inscrito são obrigatorios.'});
    }

    try{
        const id = UsuarioModel.create(nome,email,data_nascimento,senha,inscrito);
        const novoUsuario = UsuarioModel.findById(id);
        res.status(201).json(novoUsuario);
    }catch(error){
        res.status(401).json({mensagem:'Erro ao Criar usuario:'+ error.message});
    }
};

exports.atualizarUsuario = (req,res) =>{

    const {nome,email,data_nascimento,senha} = req.body;
    const id = req.params.id;

    try{
        UsuarioModel.updateUsuario(id,nome,email,data_nascimento,senha);
        res.json({mensagem: 'Usuario atualizado.'});
    }catch(error){
        res.status(400).json({mensagem: 'Erro ao atualizar usuario' + error+message});
    }

};

exports.DeletarUsuario = (req,res) =>{
    const id = req.params.id;

    try{
        UsuarioModel.delete(id);
        res.json({mensagem: 'Usuario deletado.'});
    }catch(error){
        res.status(500).json({mensagem: 'Erro ao deletar ' + error.message});
    }
};