const BotaoDeleta = ()=>{
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerHTML = `<button><i class="fa fa-trash" aria-hidden="true"></i></button>`;
    botaoDeleta.addEventListener('click', deletartarefa)

    return botaoDeleta;
}
const deletartarefa = (evento)=>{
    const botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.closest('.li');
    tarefaCompleta.remove();
    return botaoDeleta;
};

export default BotaoDeleta;