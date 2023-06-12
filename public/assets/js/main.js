
let charactersList = [];
const url = `https://api.disneyapi.dev/character?pageSize=50`;
const charactersLS = localStorage.getItem('characters');
const list = document.querySelector('.list');

function renderCharacters(charactersList){
    if (charactersList.imageUrl === ''){
        charactersList.imageUrl= 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
    }
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
}
function renderCharactersList(charactersList){
    for (let i = 0; i < charactersList.length; i++) {
        renderCharacters(charactersList[i]);
    }
    eventClick();
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

const favList = document.querySelector('.js_fav')
let charactersFav = [];
function renderFavCharacter(eachCharacter){
    let valueImg = eachCharacter.imageUrl;
    const valueId= eachCharacter._id;
    const valueName = eachCharacter.name;
    const disneyImg = 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
    if (!valueImg){
        valueImg = disneyImg;
    }
    favList.innerHTML='';
    const newContentP = document.createTextNode(valueName);
    const paragraph = document.createElement('p');
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.classList.add('list__element--img');
    img.src = valueImg;
    li.classList.add('list__element');
    paragraph.classList.add('list__element--name');
    paragraph.appendChild(newContentP);
    li.id = valueId;
    li.appendChild(img);
    li.appendChild(paragraph);
    li.classList.add('element');
    favList.appendChild(li);
}
function renderFavCharacterList(){
    for (let i=0; i<charactersFav.length; i++){
        renderFavCharacter(charactersFav[i]);
    }
}
function handleClick(event){
    const id = parseInt(event.currentTarget.id);
    const clickedCharacter = charactersList.find((item) => item._id === id);
    const indexCharacter = charactersFav.findIndex((item) => item._id === id);
    if (indexCharacter === -1) {
        charactersFav.push(clickedCharacter);
    } else {
        charactersFav.splice(indexCharacter,1);
    }
    console.log(charactersFav);
    renderFavCharacterList(charactersFav);
}
function eventClick (){
    const characters = document.querySelectorAll('.element');
    for( let i=0; i<characters.length; i++){
        characters[i].addEventListener('click', handleClick);
    }
}
const buttomSearch = document.querySelector('.js_submit');
const inputSearch = document.querySelector('.js_inputSearch');
function handleSearchButtom(event){
    event.preventDefault();
    const search = inputSearch.value;
    const filterList = charactersList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filterList);
    list.innerHTML='';
    renderCharactersList(filterList);
}
buttomSearch.addEventListener('click', handleSearchButtom);
'use strict';
//# sourceMappingURL=main.js.map
