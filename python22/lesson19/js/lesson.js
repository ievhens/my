/* Task 1 */

let request, requestType, response, path;
let result, full, pagination;
let total, title, type, list, i;

if(window.XMLHttpRequest){request = new XMLHttpRequest()}
else{request = new ActiveXObject("Microsoft.XMLHTTP")}

document.getElementById("search-btn").addEventListener("click", search);
result = document.getElementById("result");
full = document.getElementById("full");
pagination = document.getElementById("pagination");

let pagenum = 1;

function search(pagenum){
  if(event.target.id == "search-btn"){pagenum = 1;};
  result.innerHTML = "";
  title = document.getElementById("title").value;
  type = document.getElementById("type").value;
  requestType = "search";  
  path = `http://www.omdbapi.com/?apikey=33f87ab3&s=${title}&type=${type}&page=${pagenum}`;
  request.open("GET", path);
  request.send();
}

function details(id){
  full.innerHTML = "";
  requestType = "details";
  path = `http://www.omdbapi.com/?apikey=33f87ab3&i=${id}&plot=full`;
  request.open("GET", path);
  request.send();
}

function turnPage(n){
  if((pagenum == 1 && n < 0) || (pagenum == Math.floor(total/10) && n > 0)) return
  else{pagenum += n; search(pagenum)}

}

request.onreadystatechange = function(){
   if(this.readyState === 4 && this.status == 200){
   
    response = JSON.parse(request.response); 
   console.log(response);
   
    if(requestType == "search" && response.Response == "True"){
      
      total = +response.totalResults;
      list = response.Search
      for (let i = 0; i < list.length; i++) {
      result.innerHTML += `<aside class="short">
          <div class="poster"><img src="${list[i].Poster}" alt="${list[i].Title}"></div>
            <div class="plot">
            <span class="type">${list[i].Type}</span>
            <span class="title">${list[i].Title}</span>
            <span class="year">${list[i].Year}</span>
            <button type="button" class="details" id="details-btn" onclick='details("${list[i].imdbID}")'>Details</button>
          </div>
        </aside>`;
      }
      if(total > 10){
        pagination.style.display = "flex";
        pagination.innerHTML = `<div class="buttons">
            <button class="back" onclick="turnPage(-1)">&#171;</button>
            <button class="forward" onclick="turnPage(+1)">&#187;</button>
        </div>
        <div class="pages">
            <span id="page">${pagenum}</span>
            <span>/</span>
            <span id="pages">${Math.floor(total/10)}</span>
        </div>`
      }
    }
    
    else if(requestType == "search" && response.Response == "False"){
      result.innerHTML += response.Error
    }    
    
    if(requestType == "details"){
      full.innerHTML = `<h2>FIlm Info</h2>
      <aside class="full">
          <div class="poster"><img src="${response.Poster}" alt="${response.Title}"></div>
          <div class="plot">
              <table>
                  <thead></thead>
                  <tbody>
                      <tr><td>Title:</td><td>${response.Title}</td></tr>
                      <tr><td>Released:</td><td>${response.Year}</td></tr>
                      <tr><td>Genre:</td><td>${response.Genre}</td></tr>
                      <tr><td>Country:</td><td>${response.Country}</td></tr>
                      <tr><td>Director:</td><td>${response.Director}</td></tr>
                      <tr><td>Writer:</td><td>${response.Writer}</td></tr>
                      <tr><td>Actors:</td><td>${response.Actors}</td></tr>
                      <tr><td>Awards:</td><td>${response.Awards}</td></tr>
                  </tbody>
              </table>
          </div>
      </aside>`;
    }
  }
}

 

