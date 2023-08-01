const pokemanUrl="https://pokeapi.co/api/v2/pokemon"

//function for fetch data from api
async function fetchdata(){
  try{   
     const data= await fetch(pokemanUrl);
     const data1= await data.json();
    //  console.log("daata",data1)
     async function detail(){
        for(let i=0;i<data1.results.length;i++){
     const element= await fetch (data1.results[i].url);
     const ele1=await element.json()
     console.log("type",ele1)
    
  
    const div=document.getElementById("row")
    if(div){
     div.innerHTML+=`
     <div class="card" style="width: 18rem;">
     <img src=${ele1.sprites.other.dream_world.front_default} class="card-img-top" alt="image">
     <div class="card-body">
       <h5 class="card-title">Name:${ele1.name}</h5>
       <p class="card-text">Abilities:${ele1.abilities[0].ability.name},${ele1?.abilities[1]?.ability.name}</p>
       <p>Experience:${ele1.base_experience}Points</p>
       <p>Height:${ele1.height*10}cm</p>
       <p>Height:${ele1.weight/10}kg</p>
       
     </div>
   </div>
   `
    }
     } 
}
//calling sub function
  detail();
  }catch(error){

    console.log("error",error);
  }

}
//calling the main fucntion
fetchdata();



