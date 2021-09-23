import BotaoConclui from "./Componentes/concluirTarefa.js";
import BotaoDeleta from "./Componentes/deletarTarefa.js";
import Importancia_badges from "./Componentes/importanciaTarefa.js";
import Salvar from "./Componentes/Salvar.js";

const semana_select = document.querySelector('[data-semana]');
const input = document.querySelector('[data-form-input]');
const importancia_select = document.querySelector('[data-importancia]');


const criartarefa = (evento)=>{
    evento.preventDefault();

	const semana_value = semana_select.options[semana_select.selectedIndex].value;
    const texto = input.value;
    const importancia_value = importancia_select.options[importancia_select.selectedIndex].value;
    
    //
    if(texto == ""){
        alert('Preencha Corretamente !');
        return false;
    }

    //Criando li e Adicionando conteudo
    const tarefa = document.createElement('li');
    tarefa.classList.add('li')
    const conteudo = `<h3 class="teste">${texto}</h3>`;
    tarefa.innerHTML = Importancia_badges(importancia_value) + conteudo;
    
    //adicionando os botoes
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());

    //regra para adiconar na semana certa
    const semana = '[data-' + semana_value +']';
    const lista = document.querySelector(semana);
    lista.appendChild(tarefa);
    input.value = "";
}

const cmdNovaTarefa = document.querySelector('[data-form-button]');
cmdNovaTarefa.addEventListener('click', criartarefa);


const salvar = document.querySelector('[data-salvar]');
salvar.addEventListener('click',Salvar)

