const buttomSearch = document.querySelector('.js_submit');
const inputSearch = document.querySelector('.js_inputSearch');
function handleSearchButtom(event){
    event.preventDefault();
    const search = inputSearch.value;
    const filterList = charactersList.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    renderCharactersList(filterList[i]);
}
buttomSearch.addEventListener('click', handleSearchButtom);