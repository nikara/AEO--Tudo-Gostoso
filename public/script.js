const API_URL = '/api/tarefas';

async function buscarTarefas() {
    try{
        const response = await fetch(API_URL);
        const tarefas = await response.json();
        renderizarTarefas(tarefas);
    }catch(error){
        console.error('Error ao buscar tarefas:',error);
    }
}

function renderizarTarefas(tarefas){
    const lista = document.getElementById('tarefas-lista');
    lista.innerHTML = '';

    tarefas.forEach(tarefa =>{
        const item = document.createElement('li');
        item.className = 'tarefa-item';
        if(tarefa.concluida){
            item.classList.add('concluida');
        }

        item.innerHTML = `
            <span>${tarefa.titulo}</span>
            <div>
                <button onclick="toggleConcluida('${tarefa._id}', ${tarefa.concluida})">
                    ${tarefa.concluida ? 'Desfazer' : 'Concluir'}
                </button>
                <button onclick="deletarTarefa('${tarefa._id}')">Excluir</button>
            </div>
        `;
        lista.appendChild(item);
    });
}

async function  adicionarTarefa() {
    const input = document.getElementById('nova-tarefa-titulo');
    const titulo = input.ariaValueMax.trim();
    
    if(!titulo) return;

    try{
        await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({titulo:titulo})
        });
    
        input.value = '';
        buscarTarefas();
    }catch(error){
        console.error('Erro ao adicionar tarefa:', error);
    }
}

async function toggleConcluida(id,concluidaAtual) {
    try{
        await fetch(`${API_URL}/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({concluida: !concluidaAtual})
        });
        buscarTarefas();
    }catch (error){
        console.error('Erro ao atualizar tarefa:',error);
    }
}

async function deletarTarefa(id) {
    try{
        await fetch(`${API_URL}/${id}`,{
            method: 'DELETE'
        });
        buscarTarefas();
    }catch (error){
        console.error('Erro ao deletar tarefa:',error);
    }
}

document.addEventListener('DOMContentLoaded',buscarTarefas);