const Tarefa = require('../models/TarefaModel');

exports.listarTarefas = async (req,res) => {
    try{
        const tarefas = await Tarefa.find();
        res.json(tarefas);
    }catch (error){
        res.status(500).json({mensagem: error.message});
    }
};

exports.criarTarefa = async (req,res) => {
    const { titulo } = req.body;

    if(!titulo){
        return res.status(400).json({mensagem: 'O campo título é obrigatório.'});
    }

    try{
        const novaTarefa = new Tarefa({titulo});
        const tarefaSalva = await novaTarefa.save();
        res.status(201).json(tarefaSalva);
    }catch (error){
        res.status(400).json({mensagem: error.message});
    }
};

exports.atualizarTarefa = async (req,res) =>{
    try{
        const tarefa = await Tarefa.findById(req.params.id);

        if(tarefa == null){
            return res.status(404).json({mensagem: 'Tarefa não encontrada'});
        }
        if(req.body.titulo != null){
            tarefa.titulo = req.body.titulo;
        }if(req.body.concluida != null){
            tarefa.concluida = req.body.concluida;
        }

        const tarefaAtualizada = await tarefa.save();
        res.json(tarefaAtualizada);
    }catch (error){
        res.status(400).json({mensagem: error.message});
    }
};

exports.deletarTarefa = async (req,res) => {
    try{
        const tarefa = await Tarefa.findById(req.params.id);

        if(tarefa == null){
            return res.status(404).json({mensagem: 'Tarefa não encontra.'});
        }

        await Tarefa.deleteOne({_id: req.params.id});
        res.json({mensagem: 'Tarefa excluída com sucesso'});
    }catch (error){
        res.status(500).json({mensagem: error.message});
    }
};

