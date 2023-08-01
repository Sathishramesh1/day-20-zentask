
async function fetchdata(){
const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
try{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c17341cc84mshafa8ec75be2eb8dp107fe6jsne660bbd2ba86',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
const data=await fetch(url,options)
const data1=await data.json();
console.log(data1)
for(let i=0;i<data1.length;i++){
    let div=document.getElementById("row")
    div.innerHTML+=`<div class="card" style="width: 18rem;">
    <img src=${data1[i].thumbnail} SameSite=Lax  class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data1[i].title}</h5>
      <p class="card-text">${data1[i].short_description}</p>
      <p class="card-text">Platform:${data1[i].platform}</p>
      <p class="card-text">Publisher:${data1[i].publisher}</p>
      <a href=${data1[i].freetogame_profile_url} target="_blank"class="btn btn-primary">More Details</a>
    </div>
  </div>`
}
}
catch(err){
    console.log("error",err)
}



}
fetchdata();