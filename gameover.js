//background sound
let bgmSound = new Audio("./assets/Bg.mp3");
bgmSound.loop = true;
bgmSound.play();
bgmSound.volume = 0.4;


let playagain = document.getElementById("playagain");
let exitgame = document.getElementById("exitgame");
let zeroscore = document.getElementById("congratulations")


playagain.addEventListener("click",function(){
    window.location.href="./index.html"
})

exitgame.addEventListener("click",function(){
    window.location.href=("https://kalvium.community/")
})

// creating random messages for winner
let randomWinningMessages = [
    "With each chocolate you give, you sweeten my day and fill it with joy.",
"Your thoughtfulness in gifting me chocolates speaks volumes of your love.",
"Indulging in these chocolates with you makes every moment more delightful.",
"Each piece of chocolate reminds me of the sweetness you bring into my life.",
"Your Chocolate Day surprise is a delicious reminder of our love's sweetness.",
]


// creating random number for random winning and losing messages
let randnumForWinOrLose = Math.floor(Math.random()*5)

let scorespan = document.getElementById("scorespan");
let score = localStorage.getItem("score");

if (score>0) {
    zeroscore.innerHTML = randomWinningMessages[randnumForWinOrLose]
}

let playernameFromStorage = localStorage.getItem("playername")
scorespan.innerText =" Your earned " + score + " Chocolates";

//creating chocolate shower only when socre is greater than zero
if (score>0){
    createChocolateShower();
    setInterval(createChocolateShower, 300);
}

function createChocolateShower() {
    const chocolate = document.createElement('div');
    chocolate.classList.add('chocolate');
    
    chocolate.style.left = Math.random() * 100 + "vw";
    chocolate.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    chocolate.innerText = '🍬🍫';
    
    document.body.appendChild(chocolate);
    
    setTimeout(() => {
                chocolate.remove();
                }, 5000);
  }
  