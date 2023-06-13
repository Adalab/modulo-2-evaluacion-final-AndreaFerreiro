let charactersList = [];
const url = `https://api.disneyapi.dev/character?pageSize=50`;
const list = document.querySelector('.list');
function renderCharacters(character){
    if (character.imageUrl === ''){
        character.imageUrl= 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
    }
    const newContentP = document.createTextNode(`${character.name}`);
    const paragraph = document.createElement('p');
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.classList.add('list__element--img');
    img.src = `${character.imageUrl}`;
    li.classList.add('list__element');
    paragraph.classList.add('list__element--name');
    paragraph.appendChild(newContentP);
    li.id = `${character._id}`;
    li.appendChild(img);
    li.appendChild(paragraph);
    li.classList.add('element');
    list.appendChild(li);
    eventClick();
}
function renderCharactersList(){
    const search = inputSearch.value;
    const filterList = charactersList.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    list.innerHTML='';
    for (let i =0; i<filterList.length; i++){
        const searchId = filterList[i]._id;
        const indexSearch = charactersFav.findIndex((item) => item._id === searchId);
        if (indexSearch === -1){
            renderCharacters(filterList[i]);
        } else{
            renderFavSearch(filterList[i]);
        }
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
