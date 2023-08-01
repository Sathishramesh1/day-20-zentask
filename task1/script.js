const url="https://api.jikan.moe/v4/anime?q=naruto&sfw";

async function fetchData(){
  try{
const data= await fetch(url);
const data1=await data.json()
  
     for(let i=0;i<data1.data.length;i++){
         
        let div=document.getElementById("div");
        div.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <img src='${data1.data[i].images.jpg.image_url}' class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data1.data[i].title_english}</h5>
          <p class="card-text">Rating:${data1.data[i].rating}</p>
          <p class="card-text">Year:${data1.data[i].year!==null? data1.data[i].year:"2005"}</p>
          <p class="card-text">Genres:${data1.data[i].genres[0].name}</p>
          <p class="card-text">IMDB:${data1.data[i].score}/10</p>
          <a href=${data1.data[i].url} target=_blank class="btn btn-primary">More Details</a>
        </div>
      </div>`
     }
     
    }catch(err){
      console.log("Error",err)
    }

  }
  fetchData()