
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
     
      groupManga.onclick = function(){document.getElementsByClassName('information').innerHTML = ''};
      groupAnime.onclick = function(){document.getElementsByClassName('information').innerHTML = ''};
}



 


function showAnime(anime) {
    let {canonicalTitle, posterImage, description, episodeCount, episodeLength} = anime.attributes

    let container = document.createElement("div");
    container.className = "information"
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

  // let rate1 = document.createElement('li')
  // rate1.className="rating-item"
  // rate1.setAttribute("data-rate", "1")
  // let rate2 = document.createElement('li')
  // rate2.className="rating-item"
  // rate2.setAttribute("data-rate", "2")
  // let rate3 = document.createElement('li')
  // rate3.className="rating-item"
  // rate3.setAttribute("data-rate", "3")
  // let rate4 = document.createElement('li')
  // rate4.className="rating-item"
  // rate4.setAttribute("data-rate", "4")
  // let rate5 = document.createElement('li')
  // rate5.className="rating-item"
  // rate5.setAttribute("data-rate", "5")
  
  // rates.appendChild(rate1)
  // rates.appendChild(rate2)
  // rates.appendChild(rate3)
  // rates.appendChild(rate4)
  // rates.appendChild(rate5)
  

  // rates.onclick = e => {
  //   const elClass = e.target.classList;
  //   if(!elClass.contains('active')){
  //     items.forEach(
  //       item => item.classList.remove('active')
  //     )
  //     console.log(e.tarfet.getAttribute("data-rate"));
  //     elClass.add(active)
  //   }
  //}

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
  let { title, totalMediaCount, nsfw, createdAt, updatedAt} = categories.attributes

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
   

//login form
// let closeMe = document.getElementById('close-btn')
// closeMe.addEventListener('click', (e) => {
   //e.parentNode.remove()
// })

// let login = document.getElementById('lgn-btn')
// login.addEventListener('submit', (e)=>{
//   e.preventDefault()

// })

//work out search bar functionality
let search =document.getElementById('search-form')
search.addEventListener('submit', (e)=> {

  // eliminate refresh feature 
  e.preventDefault()

  //to reset search bar
  search.reset();
  })




 
function initialise() {
  showings()
}

initialise();
