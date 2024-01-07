 /* if left side is truthy (ie) has a value then thats default else if score is reset  it takes default value as right*/
 let score = JSON.parse(localStorage.getItem('score')) ||  {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();



/* compare comp and user move */
function playGame(playermove){
const comp = pickComputerMove();
let res= '';
if(playermove === 'scissors'){
  if(comp ==='rock'){
    res = 'you lose';
  }
  else if(comp === 'paper'){
    res = ' you win';
  }
  else if(comp === 'scissors'){
    res = 'tie';
  }
}  

else if(playermove === 'paper'){
    if(comp ==='rock'){
      res = 'you win';
    }
    else if(comp === 'paper'){
      res = 'tie';
    }
    else if(comp === 'scissors'){
      res = 'you lose';
    }
}
else if(playermove === 'rock'){
    if(comp ==='rock'){
        res = 'tie';
    }else if(comp === 'paper'){
        res = ' you lose';
    }else if(comp === 'scissors'){
        res = 'you win';
    }
}

/*score update */
if(res === 'you win'){
   score.wins += 1;
}else if(res === 'you lose'){
  score.losses+=1;
}else if(res === 'tie'){
  score.ties +=1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = res;
document.querySelector('.js-moves').innerHTML =` you
<img src="images/${playermove}-emoji.png" class="move-icon"> 
<img src="images/${comp}-emoji.png" class="move-icon"> 
computer`;


}


/* update score on page */  
function updateScoreElement(){
document.querySelector('.js-score')
 .innerHTML =  `Wins : ${score.wins} ,Losses : ${score.losses} ,Ties : ${score.ties}`;
}

/* determine computer move */
function pickComputerMove(){
const randomNumber = Math.random(); 
let comp = '';
if(randomNumber>=0 && randomNumber < 1/3){
 comp = 'rock';    }
else if(randomNumber>= 1/3 && randomNumber < 2/3){
 comp = 'paper';}
else if(randomNumber>= 2/3 && randomNumber < 1){
 comp = 'scissors';
}
return comp;
}
