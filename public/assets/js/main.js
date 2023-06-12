
let charactersList = [];
const url = `https://api.disneyapi.dev/character?pageSize=50`;
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
fetch (url)
    .then ((response) => response.json())
    .then ((data) => {
        charactersList = data.data;
        console.log(data.data);
        renderCharactersList(charactersList);
});

const favList = document.querySelector('.js_fav')
let charactersFav = [];
const sectionFav = document.querySelector('.section-fav');
const sectionList = document.querySelector('.section-list');
const charactersLS = JSON.parse(localStorage.getItem('characters'));
const resetListButtom = document.querySelector('.js_resetList');
init();
showFavList()
function showFavList(){
    if(charactersFav.length === 0){
        sectionFav.classList.add('collapsed');
        sectionList.classList.add('margin-top');
    }else{
        sectionFav.classList.remove('collapsed');
        sectionList.classList.remove('margin-top');
    }
}
function renderFavCharacter(eachCharacter){
    let valueImg = eachCharacter.imageUrl;
    const valueId= eachCharacter._id;
    const valueName = eachCharacter.name;
    const disneyImg = 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
    if (!valueImg){
        valueImg = disneyImg;
    }
    const newContentP = document.createTextNode(valueName);
    const reset = document.createTextNode('X');
    const paragraph = document.createElement('p');
    const li = document.createElement('li');
    const img = document.createElement('img');
    const trash = document.createElement('buttom');
    img.classList.add('list__element--img');
    img.src = valueImg;
    li.classList.add('fav__element');
    paragraph.classList.add('list__element--name');
    paragraph.appendChild(newContentP);
    trash.classList.add('reset');
    trash.classList.add('js_reset');
    trash.title='Eliminar de la lista';
    trash.appendChild(reset);
    li.id = valueId;
    trash.id = valueId;
    li.appendChild(img);
    li.appendChild(paragraph);
    li.appendChild(trash);
    li.classList.add('element');
    favList.appendChild(li);
}
function renderFavCharacterList(){
    favList.innerHTML='';
    for (let i=0; i<charactersFav.length; i++){
        renderFavCharacter(charactersFav[i]);
    }
    eventReset();
    showFavList();
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
    localStorage.setItem('characters', JSON.stringify(charactersFav));
    renderFavCharacterList();
}
function eventClick (){
    const characters = document.querySelectorAll('.element');
    for( let i=0; i<characters.length; i++){
        characters[i].addEventListener('click', handleClick);
    }
}
function init (){
    if(charactersLS){
        charactersFav = charactersLS;
        renderFavCharacterList(charactersFav);
    }
}
function handleReset(event){
    const id = parseInt(event.currentTarget.id);
    const clickedCharacter = charactersFav.find((item) => item._id === id);
    const indexCharacter = charactersFav.findIndex((item) => item._id === id);
    charactersFav.splice(indexCharacter,1);
    localStorage.setItem('characters', JSON.stringify(charactersFav));
    renderFavCharacterList();
}
function eventReset (){
    const resetButtoms = document.querySelectorAll('.js_reset');
    for( let i=0; i<resetButtoms.length; i++){
        resetButtoms[i].addEventListener('click', handleReset);
    }
}
function resetListFav(event){
    charactersFav= [];
    localStorage.setItem('characters', JSON.stringify(charactersFav));
    renderFavCharacterList();
}
resetListButtom.addEventListener('click', resetListFav);
const buttomSearch = document.querySelector('.js_submit');
const inputSearch = document.querySelector('.js_inputSearch');
function renderFavSearch(eachFav){
    let valueImg = eachFav.imageUrl;
    const valueId= eachFav._id;
    const valueName = eachFav.name;
    const disneyImg = 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
    if (!valueImg){
        valueImg = disneyImg;
    }
    const newContentP = document.createTextNode(valueName);
    const paragraph = document.createElement('p');
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.classList.add('list__element--img');
    img.src = valueImg;
    li.classList.add('fav__element');
    paragraph.classList.add('list__element--name');
    paragraph.appendChild(newContentP);
    li.id = valueId;
    li.appendChild(img);
    li.appendChild(paragraph);
    li.classList.add('element');
    list.appendChild(li);
}
function handleSearchButtom(event){
    event.preventDefault();
    const search = inputSearch.value;
    const filterList = charactersList.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    for (let i =0; i<filterList.length; i++){
        const searchId = filterList[i]._id;
        const indexSearch = charactersFav.findIndex((item) => item._id === searchId);
        if (indexSearch === -1){
            list.innerHTML='';
            renderCharactersList(filterList[i]);
        } else{
            list.innerHTML='';
            renderFavSearch(filterList[i]);
        }
    }
}
buttomSearch.addEventListener('click', handleSearchButtom);
'use strict';
//# sourceMappingURL=main.js.map
