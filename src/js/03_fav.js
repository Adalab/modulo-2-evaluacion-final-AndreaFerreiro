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