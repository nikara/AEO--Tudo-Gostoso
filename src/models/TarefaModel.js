const { default: mongoose } = require("mongoose");

const TarefaSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true,
        trim: true,
    },
    concluida:{
        type: Boolean,
        default: false;
    },
    criadoEm:{
        type: Date,
        default: Date.now,
    },
});

const Tarefa = mongoose.model('Tarefa',TarefaSchema);
module.exports = Tarefa;

