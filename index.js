
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

    container = document.createElement("info");
    container.className = "information"

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
     

}



function showAnime(anime) {
   document.getElementById("welcome-page").style.display = "none";

    let {canonicalTitle, posterImage, description, episodeCount, episodeLength} = anime.attributes

  

  container.innerHTML = `
                   <h3>${canonicalTitle}<h3>
                   <img src="${posterImage.medium}">
                   <h3>Description:</h3>
                   <p>${description}</p>
                   <h3>episodes: </h3>
                   <p>"${episodeCount}"</p>
                   <h3>episode Length: </h3>
                   <p>${episodeLength} minutes</p>
                   `;

      //ratings
  let rates= document.createElement('ul')
  rates.className= "rating"
  rates.innerHTML=`
  <li class="rating-item" data-rate="1"></li>
  <li class="rating-item active" data-rate="2"></li>
  <li class="rating-item" data-rate="3"></li>
  <li class="rating-item" data-rate="4"></li>
  <li class="rating-item" data-rate="5"></li>`


  container.appendChild(rates)

  

   document.querySelector("#listings").appendChild(container);
    
    }


//Rating functionality
function rating(){
  rates.onclick = e => {
    const elClass = e.target.classList;
    if(!elClass.contains('active')){
      items.forEach(
        item => item.classList.remove('active')
      )
      console.log(e.tarfet.getAttribute("data-rate"));
      elClass.add(active)
    }
  }
}

function showManga(manga){
  document.getElementById("welcome-page").style.display = "none";
  let { canonicalTitle, posterImage, description, chapterCount, updatedAt} = manga.attributes




  container.innerHTML = `
                   <h3>${canonicalTitle}<h3>
                   <img src="${posterImage.medium}">
                   <h3>Description:</h3>
                   <p>${description}</p>
                   <h3>Chapters: </h3>
                   <p>${chapterCount} </p>
                   <h3>Status: updated last: </h3>
                   <p>${updatedAt}</p>`;


  //ratings
 let rates= document.createElement('ul')
 rates.className= "rating"
 rates.innerHTML=`
     <li class="rating-item" data-rate="1"></li>
     <li class="rating-item active" data-rate="2"></li>
     <li class="rating-item" data-rate="3"></li>
     <li class="rating-item" data-rate="4"></li>
     <li class="rating-item" data-rate="5"></li>`

   container.appendChild(rates)
   document.querySelector("#listings").appendChild(container);
}

function showCategories(categories){
  document.getElementById("welcome-page").style.display = "none";
  let { title, totalMediaCount, nsfw, createdAt, updatedAt} = categories.attributes

  


  container.innerHTML = `
                   <h3>${title}<h3>
                   <h2>Available Titles number:</h2>
                   <p>${totalMediaCount}<p>
                   <h2>NSFW status:</h2>
                   <p>${nsfw}</p>
                   <h2>Created At: </h2>
                   <p>${createdAt} </p>
                   <h2>Updated At: </h2>
                   <p>${updatedAt}</p>`;
          

   document.querySelector("#listings").appendChild(container);
   
}

  //Work out Comment section Functionality
let post = document.getElementById('comment-form')
post.addEventListener('submit', (e)=> {
  // eliminate refresh feature 
  e.preventDefault()
  
  
  var commentBoxValue= document.getElementById("new_comment_text").value;
  var li = document.createElement("comment");
  var text = document.createTextNode(commentBoxValue);
  li.appendChild(text);
  document.getElementById("comment-section").appendChild(li);

  //to reset comment box
  post.reset()
})


  let btn=document.getElementById("close-btn")
  btn.addEventListener('click' , (e) => {
  document.getElementById("center").style.display = "none";
  })


//work out search bar functionality
let search =document.getElementById('search-form')
search.addEventListener('submit', (e)=> {
  // eliminate refresh feature 
  e.preventDefault()

  //to reset search bar
  search.reset();

  let searchVal = document.getElementById('search').value
  fetch("https://kitsu.io/api/edge/" + searchVal, {
    method: "GET",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    }
  })
   
  })

 

  


 
function initialise() {
  showings()
}

initialise();
