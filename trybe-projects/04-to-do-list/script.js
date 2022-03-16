const elementHeader = document.querySelector('header');
const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const buttonApaga = document.querySelector('#apaga-tudo');
const buttonFinalizados = document.querySelector('#remover-finalizados');
const buttonCima = document.querySelector('#mover-cima');
const buttonBaixo = document.querySelector('#mover-baixo');
const buttonSelecionados = document.querySelector('#remover-selecionado');
const buttonSave = document.querySelector('#salvar-tarefas');

// 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag
function title() {
  elementHeader.innerText = 'Minha Lista de Tarefas';
}
title();

// 2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento"
function paragraphHeader(header) {
  const paragraph = document.createElement('p');

  paragraph.id = 'funcionamento';
  paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

  header.appendChild(paragraph);
}
paragraphHeader(elementHeader);

// 5 - Adicione um botão com id="criar-tarefa"
button.addEventListener('click', () => {
  const newLi = document.createElement('li');

  newLi.innerHTML = input.value;
  ol.appendChild(newLi);
  input.value = '';
});

ol.addEventListener('click', (event) => {
  const listItem = document.querySelector('.selected');

  if (listItem !== null) {
    listItem.classList.remove('selected');
  }
  event.target.classList.add('selected');
});

ol.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
    return;
  }
  event.target.classList.add('completed');
});

buttonApaga.addEventListener('click', () => {
  const clear = document.querySelectorAll('li');
  for (let index = 0; index < clear.length; index += 1) {
    clear[index].remove();
  }
});

buttonFinalizados.addEventListener('click', () => {
  const comp = document.querySelectorAll('.completed');

  for (let index = 0; index < comp.length; index += 1) {
    comp[index].remove();
  }
});

buttonCima.addEventListener('click', () => {
  const listItem = document.querySelector('.selected');
  const tam = document.querySelectorAll('li');

  if (tam[0].classList.contains('selected')) {
    return;
  }
  if (listItem !== null) {
    return ol.insertBefore(listItem, listItem.previousSibling);
  }
});

buttonBaixo.addEventListener('click', () => {
  const listItem = document.querySelector('.selected');
  const list = document.querySelector('#lista-tarefas');
  const tam = document.querySelectorAll('li');

  if (tam[tam.length - 1].classList.contains('selected')) {
    return;
  }
  if (listItem !== null) {
    return list.insertBefore(listItem.nextSibling, listItem);
  }
});

buttonSelecionados.addEventListener('click', () => {
  const listItem = document.querySelector('.selected');
  listItem.remove();
});

buttonSave.addEventListener('click', () => {
  localStorage.setItem('lista', ol.innerHTML);
});

window.onload = () => {
    if(localStorage.getItem){
        ol.innerHTML = localStorage.getItem('lista');
    }
};
