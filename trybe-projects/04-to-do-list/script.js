const elementHeader = document.querySelector("header");
const elementMain = document.querySelector("main");
const input = document.querySelector("#texto-tarefa");
const button = document.querySelector("#criar-tarefa");
const list =  document.querySelectorAll("li");
const ol = document.querySelector("#lista-tarefas");
const buttonApaga = document.querySelector("#apaga-tudo");
const buttonFinalizados = document.querySelector("#remover-finalizados");
const buttonCima = document.querySelector("#mover-cima");
const buttonBaixo = document.querySelector("#mover-baixo");
const buttonSelecionados = document.querySelector("#remover-selecionado");
const buttonSave = document.querySelector("#salvar-tarefas");

//1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag
function title(header){
    elementHeader.innerText = "Minha Lista de Tarefas";
}
title(elementHeader);

//2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento"
function paragraphHeader(header){
    const paragraph = document.createElement("p");

    paragraph.id = "funcionamento";
    paragraph.innerText = "Clique duas vezes em um item para marcá-lo como completo";

    header.appendChild(paragraph);
}
paragraphHeader(elementHeader);

//5 - Adicione um botão com id="criar-tarefa"
button.addEventListener("click" ,function(){
    const elementOl = document.querySelector("#lista-tarefas");
    const newLi = document.createElement("li");

        newLi.innerHTML = input.value;
        elementOl.appendChild(newLi);
        input.value = "";

}); 

ol.addEventListener("click", function(event){
    const listItem = document.querySelector(".selected");

    if(listItem !== null){
        listItem.classList.remove("selected");
    }
    event.target.classList.add("selected");

});

ol.addEventListener("dblclick", function(event){

    if(event.target.classList.contains("completed")){
        event.target.classList.remove("completed");
        return;
    }
    event.target.classList.add("completed");
});

buttonApaga.addEventListener("click", function(){
    const list = document.querySelectorAll("li");

    for(let i=0 ; i<list.length ; i++){
        list[i].remove();
    }
});

buttonFinalizados.addEventListener("click", function(){
    const list = document.querySelectorAll(".completed");

    for(let i=0 ; i<list.length ; i++){
        list[i].remove();
    }
});

buttonCima.addEventListener("click", function(){
    const listItem = document.querySelector(".selected");
    const list = document.querySelector("#lista-tarefas");
    const tam = document.querySelectorAll("li");

    if(tam[0].classList.contains("selected")){
        return;
    }else if(listItem !== null){
        return list.insertBefore(listItem, listItem.previousSibling);
    }else{
        return;
    }
});

buttonBaixo.addEventListener("click", function(){
    const listItem = document.querySelector(".selected");
    const list = document.querySelector("#lista-tarefas");
    const tam = document.querySelectorAll("li");

    if(tam[tam.length-1].classList.contains("selected")){
        return;
    }else if(listItem !== null){
        list.insertBefore(listItem.nextSibling, listItem);
        return;
    }else{
        return;
    }
});

buttonSelecionados.addEventListener("click", function(){
    const listItem = document.querySelector(".selected");
    listItem.remove();
});

buttonSave.addEventListener("click", function(){

});