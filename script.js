'use strict';
let highscore=0;//0 by defulat
let score=20//20 by defulat
let mestrynumber=getRandomArbitrary(1,20);
let arraay=[highscore];

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//
// document.querySelector(".number").textContent=mestrynumber;
//  

const scoreincrement=()=>{score--;document.querySelector(".score").textContent=score;};
const showmessage=(message)=>{document.querySelector(".message").textContent=message;};

document.querySelector(".check").addEventListener("click",function(){
    const guess=Number(document.querySelector(".guess").value);

    if(!guess){
        showmessage(" Ma dakhlati ta ra9am ⛔");
    } 
  
 else  if(guess>20 || guess < 0){

showmessage("dakhl chi ra9m bain 1 o 20  ");

}

 
 else if (guess===mestrynumber){

    showmessage("🎉🎊jabtiha ya la3afrit😎👌 ");
    document.querySelector(".number").textContent=mestrynumber;
    document.querySelector("body").style.backgroundColor="#60b347";
    arraay.push(score);
    document.querySelector(".highscore").textContent=Math.max(...arraay);
    
}
 else if (score===0){

    
    showmessage(" game over 😭");
    document.querySelector(".number").textContent=mestrynumber;
    document.querySelector(".welcome").textContent="ra9am kaana howa";
   
    
 }
 else if((guess >=mestrynumber +3 )  ){
    showmessage("ba3iiid 😎  sghaar ");
    scoreincrement();
}

else if ((guess <=mestrynumber -3 )){
    showmessage("ba3iiid 😎  ktaar ");
   
    scoreincrement();
 
}
else{
    showmessage("9arrib 😎 ");
    scoreincrement();
 
}


})
console.log(arraay);

document.querySelector(".again").addEventListener("click",function(){

    mestrynumber=getRandomArbitrary(1,20);
    // document.querySelector(".number").textContent=mestrynumber;
 
    document.querySelector(".score").textContent=score=20; 
  
    showmessage("yaaalh bda takhmam...");
    document.querySelector(".welcome").textContent="khamam  chi raaa9m";
    document.querySelector(".number").textContent="?";
    document.querySelector("body").style.backgroundColor="#222";
})