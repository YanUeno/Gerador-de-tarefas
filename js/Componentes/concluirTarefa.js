const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerHTML = `<i class="fa fa-check" aria-hidden="true">`;

    botaoConclui.addEventListener('click',concluirTarefa);

    return botaoConclui;
};

const concluirTarefa = (evento)=>{
    const botaoConclui = evento.target;
    const tarefaCompleta= botaoConclui.closest('.li');
    tarefaCompleta.classList.add('done');
}

export default BotaoConclui;