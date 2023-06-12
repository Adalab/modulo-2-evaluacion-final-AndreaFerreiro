const favList = document.querySelector('.js_fav')
let charactersFav = [];
const charactersLS = JSON.parse(localStorage.getItem('characters'));
init();
function renderFavCharacter(eachCharacter){
    let valueImg = eachCharacter.imageUrl;
    const valueId= eachCharacter._id;
    const valueName = eachCharacter.name;
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
    favList.appendChild(li);
}
function renderFavCharacterList(){
    favList.innerHTML='';
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
    localStorage.setItem('characters', JSON.stringify(charactersFav));
    console.log(charactersFav);
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