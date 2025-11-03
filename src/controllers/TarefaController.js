const TarefaModel = require('../models/TarefaModel');

exports.listarTarefas = (req,res) => {
    try{
        const tarefas = TarefaModel.findAll();
        const tarefasFormatadas = tarefas.map(t =>({
            id: t.id,
            titulo: t.titulo,
            concluida: t.concluida === 1
        }));
        res.json(tarefasFormatadas);
    }catch(error){
        res.status(500).json({mensagem: 'Erro ao buscar tarefas:' + error.message});
    }
}

exports.criarTarefa = (req,res) => {
    const {titulo} = req.body;

    if(!titulo){
        return res.status(400).json({mensagem: 'O campo título é obrigatório.'});
    }

    try{
        const id = TarefaModel.create(titulo);
        res.status(201).json({ id: id, titulo: titulo, concluida: false});
    }catch (error){
        res.status(400).json({mensagem: 'Erro ao criar tarefa: ' + error.message});
    }
};

exports.atualizarTarefa = (req,res) => {
    const { concluida } = req.body;
    const id = req.params.id;

    if(typeof concluida !== 'boolean'){
        return res.status(400).json({mensagem: 'O campo concluida deve ser um booleano.'});
    }

    try{
        TarefaModel.updateStatus(id,concluida);
        res.json({mensagem: 'Tarefa atualizada com sucesso.'});
    }catch(error){
        res.status(400).json({mensagem: 'Erro ao atualizar tarefa' + error.message});
    }

};

exports.deletarTarefa = (req, res) =>{
    const id = req.params.id;

    try{
        TarefaModel.delete(id);
        res.json({mensagem: 'Tarefa excluída com sucesso.'});
    }catch(error){
        res.status(500).json({mensagem: 'Erro ao deletar tarefa: ' + error.message});
    }
};