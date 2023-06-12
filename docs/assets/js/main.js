let charactersList=[];const url="https://api.disneyapi.dev/character?pageSize=50",list=document.querySelector(".list");function renderCharacters(e){""===e.imageUrl&&(e.imageUrl="https://via.placeholder.com/210x295/ffffff/555555/?text=Disney");const t=document.createTextNode(""+e.name),a=document.createElement("p"),c=document.createElement("li"),r=document.createElement("img");r.classList.add("list__element--img"),r.src=""+e.imageUrl,c.classList.add("list__element"),a.classList.add("list__element--name"),a.appendChild(t),c.id=""+e._id,c.appendChild(r),c.appendChild(a),c.classList.add("element"),list.appendChild(c)}function renderCharactersList(e){for(let t=0;t<e.length;t++)renderCharacters(e[t]);eventClick()}fetch(url).then(e=>e.json()).then(e=>{charactersList=e.data,console.log(e.data),renderCharactersList(charactersList)});const favList=document.querySelector(".js_fav");let charactersFav=[];const sectionFav=document.querySelector(".section-fav"),sectionList=document.querySelector(".section-list"),charactersLS=JSON.parse(localStorage.getItem("characters")),resetListButtom=document.querySelector(".js_resetList");function showFavList(){0===charactersFav.length?(sectionFav.classList.add("collapsed"),sectionList.classList.add("margin-top")):(sectionFav.classList.remove("collapsed"),sectionList.classList.remove("margin-top"))}function renderFavCharacter(e){let t=e.imageUrl;const a=e._id,c=e.name;t||(t="https://via.placeholder.com/210x295/ffffff/555555/?text=Disney");const r=document.createTextNode(c),s=document.createTextNode("X"),n=document.createElement("p"),i=document.createElement("li"),l=document.createElement("img"),d=document.createElement("buttom");l.classList.add("list__element--img"),l.src=t,i.classList.add("fav__element"),n.classList.add("list__element--name"),n.appendChild(r),d.classList.add("reset"),d.classList.add("js_reset"),d.title="Eliminar de la lista",d.appendChild(s),i.id=a,d.id=a,i.appendChild(l),i.appendChild(n),i.appendChild(d),i.classList.add("element"),favList.appendChild(i)}function renderFavCharacterList(){favList.innerHTML="";for(let e=0;e<charactersFav.length;e++)renderFavCharacter(charactersFav[e]);eventReset(),showFavList()}function handleClick(e){const t=parseInt(e.currentTarget.id);console.log(t);const a=charactersList.find(e=>e._id===t),c=charactersFav.findIndex(e=>e._id===t);-1===c?charactersFav.push(a):charactersFav.splice(c,1),localStorage.setItem("characters",JSON.stringify(charactersFav)),console.log(charactersFav),renderFavCharacterList()}function eventClick(){const e=document.querySelectorAll(".element");for(let t=0;t<e.length;t++)e[t].addEventListener("click",handleClick)}function init(){charactersLS&&(charactersFav=charactersLS,renderFavCharacterList(charactersFav))}function handleReset(e){const t=parseInt(e.currentTarget.id),a=(charactersFav.find(e=>e._id===t),charactersFav.findIndex(e=>e._id===t));charactersFav.splice(a,1),localStorage.setItem("characters",JSON.stringify(charactersFav)),renderFavCharacterList()}function eventReset(){const e=document.querySelectorAll(".js_reset");for(let t=0;t<e.length;t++)e[t].addEventListener("click",handleReset)}function resetListFav(e){charactersFav=[],console.log(charactersFav),localStorage.setItem("characters",JSON.stringify(charactersFav)),renderFavCharacterList()}init(),resetListButtom.addEventListener("click",resetListFav);const buttomSearch=document.querySelector(".js_submit"),inputSearch=document.querySelector(".js_inputSearch");function handleSearchButtom(e){e.preventDefault();const t=inputSearch.value,a=charactersList.filter(e=>e.name.toLowerCase().includes(t.toLowerCase()));console.log(a),list.innerHTML="",renderCharactersList(a)}buttomSearch.addEventListener("click",handleSearchButtom);