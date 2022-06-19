const tabs = document.querySelectorAll(".tabs div");
const tab_bodies = document.querySelectorAll(".tab_bodies div");
const button = document.getElementById("jsLike");
let isLike = false;

for(let i=0; i<tabs.length; i++){
  tabs[i].addEventListener("click", function(event){
   for(let j=0; j<tab_bodies.length; j++){
     tabs[j].classList.remove('active');
     tab_bodies[j].classList.remove('active');
   } 
   tabs[i].classList.add('active');
   tab_bodies[i].classList.add('active');
  })
}
function handleLikeClick(event){
  if(isLike === false){
    isLike = true;
    button.innerText = "♥︎Like";
  }else{
    isLike = false;
    button.innerText = "♡︎Like";
  }
}

if(button){
  button.addEventListener("click", handleLikeClick);
}