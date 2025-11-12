//const API_URL = '/api/tarefas';

const API_USUARIO = '/api/receitas';

async function adicionarUsuario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const data_nascimento = Number(document.getElementById('data').value.trim());
    const senha = Number(document.getElementById('senha').value.trim());

    if(!nome || !email || !data_nascimento || !senha){
        alert('Todos os campos são obrigatorios!');
        return;
    }

    try{
        const resposta = await fetch(API_USUARIO,{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },body:JSON.stringify({
                nome:nome,
                email:email,
                data_nascimento: data_nascimento,
                senha:senha
            })
        });

        if(resposta.ok){
            alert('Usuário cadastrado com sucesso!');
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            document.getElementById('data').value = '';
            document.getElementById('senha').value = '';
        }else{
            const erro = await resposta.json();
            alert('Erro ao cadastrar usuário: ' + erro.mensagem);
        }
    }catch(error){
        console.error('Erro na requisição:', error);
        alert('Não foi possível cadastrar o usuário.');
    }
}


// // Função assíncrona para buscar tarefas da API
// async function buscarTarefas() {
//     try{
//         // Faz requisição GET para obter a lista de tarefas
//         const response = await fetch(API_URL);
//         // Converte a resposta para JSON
//         const tarefas = await response.json();
//         // Renderiza as tarefas na tela
//         renderizarTarefas(tarefas);
//     }catch(error){
//         // Log de erro caso a requisição falhe
//         console.error('Erro ao buscar tarefas:', error);
//     }
// }
// 
// // Função para exibir as tarefas na página
// function renderizarTarefas(tarefas){
//     // Obtém o elemento da lista de tarefas
//     const lista = document.getElementById('tarefas-lista');
//     // Limpa o conteúdo anterior da lista
//     lista.innerHTML = '';
// 
//     // Percorre cada tarefa do array
//     tarefas.forEach(tarefa => {
//         // Cria um novo elemento de lista
//         const item = document.createElement('li');
//         // Adiciona classe CSS ao item
//         item.className = 'tarefa-item';
//         // Verifica se a tarefa está concluída
//         if(tarefa.concluida){
//             // Adiciona classe 'concluida' se a tarefa foi concluída
//             item.classList.add('concluida');
//         }
// 
//         // Define o HTML interno do item com título e botões
//         item.innerHTML = '<span>' + tarefa.titulo + '</span>' + 
//             '<div> ' +
//                 '<button onclick="toggleConcluida('+ tarefa.id + ','+ tarefa.concluida +')">' + (tarefa.concluida ? 'Desfazer' : 'Concluir') + '</button>' +
//                 '<button onclick="deletarTarefa('+tarefa.id+')">Excluir</button>'+
//             '</div';
        //        lista.appendChild(item);    
        //    });
        //}
        //
         //async function adicionarTarefa() {
        //    const input = document.getElementById('nova-tarefa-titulo');
        //    const titulo = input.value.trim();
        //
         //    if(!titulo) return;
        //
         //    try{
        //        await fetch(API_URL,{
        //            method: 'POST',
        //            headers:{
        //                'Content-type': 'application/json'
        //            },
        //            body:JSON.stringify({titulo:titulo})
        //        });
        // 
        //        input.value = '';
        //        buscarTarefas();
        //    }catch(error){
        //    console.error('Erro ao adicionar tarefa:', error);
        //    }
        //    
        //}
        //
         //async function toggleConcluida(id,concluidaAtual) {
        //    try{
        //        await fetch(API_URL + '/' + id,{
        //            method: 'PUT',
        //            headers:{
        //                'Content-Type':'application/json'
        //            },
        //            body:JSON.stringify({concluida: !concluidaAtual})
        //        });
        //    }catch(error){
        //        console.error('Erro ao atualizar tarefa:',error);
        //    }
        //}
        //
         //async function deletarTarefa(id) {
        //    try{
        //        await fetch(API_URL + '/' + id,{
        //            method:'DELETE'
        //        });
        //        buscarTarefas();
        //    }catch(error){
        //        console.error('Erro ao deletar tarefa:', error);
        //    }
        //}
        //
         //document.addEventListener('DOMContentLoaded',buscarTarefas);