
function getAnime() {
  fetch("https://kitsu.io/api/edge/anime", {
    method: "GET",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
  })
    .then((res) => res.json())
    .then((data) => data.data.forEach((anime) => {
        showAnime(anime)
    }))

   
}

function getManga(){
  

fetch('https://kitsu.io/api/edge/manga' ,{
method : 'GET',
headers : {
 Accept: 'application/vnd.api+json',
'Content-Type' : 'application/vnd.api+json'
}})
.then((res) => res.json())
.then((data) => data.data.forEach((manga) => {showManga(manga)}))



}

function getCategories(){
  fetch('https://kitsu.io/api/edge/categories' ,{
method : 'GET',
headers : {
 Accept: 'application/vnd.api+json',
'Content-Type' : 'application/vnd.api+json'
}})
.then((res) => res.json())
.then((data) => data.data.forEach((categories) => {showCategories(categories)}))

}

function showings(){
     let groupAnime = document.createElement('navigation')
     groupAnime.innerHTML=`
     <button>ANIME</button>`

     let groupManga = document.createElement('navigation')
     groupManga.innerHTML=`
     <button>MANGA</button>`

     let groupCategories = document.createElement('navigation')
     groupCategories.innerHTML=`
     <button>CATEGORIES</button>`

    
     document.querySelector('#nav').appendChild(groupAnime)
     document.querySelector('#nav').appendChild(groupManga)
     document.querySelector('#nav').appendChild(groupCategories)


     groupAnime.addEventListener('click', getAnime)
     groupManga.addEventListener('click', getManga)
     groupCategories.addEventListener('click', getCategories)
     
//      groupManga.onclick = function(){document.getElementsByClassName('information').innerHTML = ''};
//      groupAnime.onclick = function(){document.getElementsByClassName('information').innerHTML = ''};
}


function showAnime(anime) {
    let {canonicalTitle, posterImage, description, episodeCount, episodeLength} = anime.attributes


   

  let container = document.createElement("info");
  container.className = "information"
  container.innerHTML = `
                   <h3>${canonicalTitle}<h3>
                   <img src="${posterImage.medium}">
                   <h3>Description:</h3>
                   <p>${description}</p>
                   <h3>episodes: </h3>
                   <p>"${episodeCount}"</p>
                   <h3>episode Length: <h3>
                   <p>${episodeLength} minutes</p>`;

  

   document.querySelector("#listings").appendChild(container);

   
}

function showManga(manga){
  let { canonicalTitle, posterImage, description, chapterCount, updatedAt} = manga.attributes

     

  let container = document.createElement("info");
  container.className = "information"
  container.innerHTML = `
                   <h3>${canonicalTitle}<h3>
                   <img src="${posterImage.medium}">
                   <h3>Description:</h3>
                   <p>${description}</p>
                   <h3>Chapters: </h3>
                   <p>${chapterCount} </p>
                   <h3>Status: updated last: </h3>
                   <p>${updatedAt}</p>`;

   document.querySelector("#listings").appendChild(container);
}

function showCategories(categories){
  let { title, totalMediaCount, nsfw, createdAt, updatedAt} = categories.attributes

  // let head = document.createElement('h3')
  // head.innerHTML=`<strong>Check For The Category You're Looking For, to Make Search Easy.</strong>`

  let container = document.createElement("info");
  container.className = "information"
  container.innerHTML = `
                   <h2>${title}<h2>
                   <h3>${totalMediaCount}</h3>
                   <p>NSFW Status: ${nsfw}</p>
                   <h3>Created At: </h3>
                   <p>${createdAt} </p>
                   <h3>Updated At: </h3>
                   <p>${updatedAt}</p>`;

  //  document.querySelector('#heading').appendChild(head)
   document.querySelector("#listings").appendChild(container);
}
// eliminate refresh feature on submit buttons
  //Work out Comment section Functionality
document.getElementById('comment-form').addEventListener('submit', (e)=> {
  e.preventDefault()
})
   

//work out search bar functionality
document.getElementById('search-form').addEventListener('submit', (e)=> {
  e.preventDefault()
  })


//functionality to search bar

 
function initialise() {
  showings()
}

initialise();
