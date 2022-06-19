const likebtn = document.getElementById("likebtn");
const like_icon = document.getElementById("heart-icon");
let isLike = false;

function handleLikeClick(event){
  if(isLike === false){
    like_icon.innerText = "♥︎";
    isLike = true;
  }else{
    like_icon.innerText = "♡︎";
    isLike = false;
  }
}

if(likebtn){
  likebtn.addEventListener("click", handleLikeClick);
}