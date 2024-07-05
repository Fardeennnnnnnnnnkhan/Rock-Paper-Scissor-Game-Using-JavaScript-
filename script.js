let user = 0;
let computer = 0;


let userScorepara = document.querySelector(".userscore")
let computerpara = document.querySelector(".computerscore")



let choices = document.querySelectorAll(".img")

const generateCompChoice =()=>{
    let options =["rock","Paper","Scissors"]
   let randomChoice =  Math.floor(Math.random()*3)
return options[randomChoice]
}

const msg = document.querySelector(".msg")

ShowWinner =(userwin , imgId ,CompChoice )=>{
if(userwin){
    user++;
userScorepara.innerText =user;
    console.log("User Wins");
msg.innerText = `You Won! ${imgId} beats ${CompChoice}`
msg.style.backgroundColor = "green"

}
else{
    computer++;
computerpara.innerText =computer;

    console.log("Computer Wins");
msg.innerText = `You lose! ${CompChoice} beats ${imgId}`
msg.style.backgroundColor = "red"
    
}
}
let playGame =(imgId)=>{
console.log("User has clicked",imgId);
let CompChoice = generateCompChoice()
console.log("computer has choosen",CompChoice);

if(CompChoice == imgId){
 // Draw Condition
 console.log("The Game is draw");
 msg.innerText = "Game Draw . Play Again!"
msg.style.backgroundColor = "blue"
}
else{
 let userWin = true;
 if(imgId === "rock" ){
//paper scissor
 userWin =  CompChoice ==="paper" ? false : true

 }
 else if(imgId === "paper"){
    userWin = CompChoice ==="scissor" ? false : true


 }
 else{
    userWin =  CompChoice ==="rock" ? false : true
 }
 ShowWinner(userWin , imgId , CompChoice);
}
}

choices.forEach((img) => {
    console.log(img);
    let imgId = img.getAttribute("id")
    img.addEventListener("click",()=>{
    playGame(imgId)
    })
});
