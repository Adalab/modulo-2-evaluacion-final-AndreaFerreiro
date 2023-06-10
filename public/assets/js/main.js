
let charactersList = [];
const url = `https://api.disneyapi.dev/character?pageSize=50`;
const charactersLS = localStorage.getItem('characters');
const list = document.querySelector('.list');

function renderCharacters(charactersList){
    const newContentP = document.createTextNode(`${charactersList.name}`);
    const paragraph = document.createElement('p');
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.classList.add('list__element--img');
    img.src = `${charactersList.imageUrl}`;
    li.classList.add('list__element');
    paragraph.classList.add('list__element--name');
    paragraph.appendChild(newContentP);
    li.id = `${charactersList._id}`;
    li.appendChild(img);
    li.appendChild(paragraph);
    li.classList.add('element');
    list.appendChild(li);
    if (charactersList.imageUrl=''){
        charactersList.imageUrl= 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
    }
}
function renderCharactersList(){
    for (let i = 0; i < charactersList.length; i++) {
        renderCharacters(charactersList[i]);
    }
}
/*
init();
function init (){
    if(charactersLS){
        charactersList = charactersLS;
        renderCharactersList(charactersList);
    } else{
        fetch (url)
        .then ((response) => response.json())
        .then ((data) => {
            charactersList = data.data;
            console.log(data.data);
            renderCharactersList(charactersList);
            //localStorage.setItem ('characters', JSON.stringify(charactersList));
        });
    }
}*/
fetch (url)
    .then ((response) => response.json())
    .then ((data) => {
        charactersList = data.data;
        console.log(data.data);
        renderCharactersList(charactersList);
        //localStorage.setItem ('characters', JSON.stringify(charactersList));
});

let charactersFav = [];
//const character =document.querySelector('.element');
function handlCharacterClick(event){
    const id = `${charactersList._id}`;
    console.log(id);
}
addEventClick();
function addEventClick(){
    const characters= document.querySelectorAll('element');
    for (const character of characters){
        character.addEventListener('click', handlCharacterClick);
    }
}
'use strict';
//# sourceMappingURL=main.js.map
