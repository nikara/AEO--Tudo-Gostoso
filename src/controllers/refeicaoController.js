const RefeicaoModel = require('../models/refeicaoModel');

exports.listarRefeicao = (req,res) =>{
    try{
        const refeicaos = RefeicaoModel.findAll();
        console.log("Refeições encontradas:", refeicaos);
        const refeicaoFormata = refeicaos.map(r =>({
            idrefeicao: r.idrefeicao,
            refeicao: r.refeicao,
            ativo: r.ativo
        }));
        res.json(refeicaoFormata);
    }catch(error){
        res.status(500).json({mensagem:'Erro ao buscar refeicões ' + error.message});
    }
}

exports.criarRefeicao = (req,res) =>{
    const {refeicao} = req.body;

    if(!refeicao){
        return res.status(400).json({mensagem: 'O campo refeicão é obrigatoria.'});
    }

    try{
        const id = RefeicaoModel.create(refeicao,1);

        res.status(201).json({idrefeicao: id, refeicao: refeicao, ativo: 1});
    }catch(error){
        res.status(400).json({mensagem: 'Erro ao criar a refeicão: ' + error.message});
    }

};

exports.atualizarRefeicao = (req,res) =>{
    const{refeicao} = req.body;
    const id = req.params.id;

    if(!refeicao){ 
        return res.status(400).json({mensagem: ' O campo refeicao é obrigatório.'});
    };

    try{
        RefeicaoModel.updateRefeicao(refeicao,id);
        res.status(200).json({mensagem: 'Refeição atualizada com sucesso!'});
    }catch(error){
        res.status(400).json({mensagem:'Erro ai atualizar a refeicao ' + error.message});
    }
};

exports.deletarRefeicao = (req,res) =>{
    const id = req.params.id;
    try{
        RefeicaoModel.delete(id);
        res.json({mensagem: 'Refeicao excluída com sucesso.'})
    }catch(error){
        res.status(500).json({mensagem: 'Erro ao deletar a refeicao:' + error.message});
    }
}