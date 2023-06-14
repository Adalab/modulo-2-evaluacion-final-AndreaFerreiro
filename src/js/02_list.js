let charactersList = [];
const url = `https://dev.adalab.es/api/disney?name=mickey`;
const list = document.querySelector('.list');
function renderCharacters(character){
    if (character.imageUrl === ''){
        character.imageUrl= 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
    }
    const newContentP = document.createTextNode(`${character.name}`);
    const series = document.createElement('p');
    const newContentS = document.createTextNode(`Núm Series: ${character.tvShows.length}`);
    const phrase = document.createElement('p');
    const newContentPhrase = document.createTextNode(`Es popular`);
    const paragraph = document.createElement('p');
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.classList.add('list__element--img');
    img.src = `${character.imageUrl}`;
    li.classList.add('list__element');
    paragraph.classList.add('list__element--name');
    paragraph.appendChild(newContentP);
    series.appendChild(newContentS);
    phrase.appendChild(newContentPhrase);
    phrase.classList.add('collapsed');
    li.id = `${character._id}`;
    li.appendChild(img);
    li.appendChild(paragraph);
    li.classList.add('element');
    li.appendChild(series);
    li.appendChild(phrase);
    list.appendChild(li);
    eventClick();
    if (character.tvShows.length > 3){
        phrase.classList.remove('collapsed');
    }
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
