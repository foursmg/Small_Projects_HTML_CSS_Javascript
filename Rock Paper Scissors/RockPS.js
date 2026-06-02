let userScore= 0; let botScore=0; 
function game(x){
    let userVal =x;
    let y = Math.random();
    let botVal
    if(y<0.33){
        botVal='rock';
    }else if(y<0.66){
        botVal='paper';
    }else{
        botVal='scissor';
    }

    

    document.querySelector('#userdisplay').innerText = userVal;
    document.querySelector('#botdisplay').innerText = botVal;
    let winner = document.querySelector('#winsdisplay');

    let playerScore= document.querySelector('#userScore');
    let computerScore = document.querySelector('#botScore');

   if(userVal == botVal){
          winner.innerText = 'TIE';
          document.querySelector('#winsdisplay').style.backgroundColor = 'yellow';
   }else if((userVal=='rock' && botVal=='scissor')||(userVal=='paper' && botVal=='rock')|| (userVal=='scissor' && botVal=='paper')){
        winner.innerText = userVal;
        userScore++;
        playerScore.innerText='You: '+ userScore;
        document.querySelector('#winsdisplay').style.backgroundColor = 'teal';
   }else{
    winner.innerText = botVal;
    botScore++;
    computerScore.innerText='Bot: '+ botScore;
    document.querySelector('#winsdisplay').style.backgroundColor = 'turquoise';
   }
}

function reset(){
    userScore=0;
    botScore=0;
    document.querySelector('#userScore').innerText='You: '+ userScore;
    document.querySelector('#botScore').innerText='Bot: '+ botScore;
    document.querySelector('#userdisplay').innerText = 'You';
    document.querySelector('#botdisplay').innerText = 'Bot';
    document.querySelector('#winsdisplay').innerText = 'wins';
    document.querySelector('#winsdisplay').style.backgroundColor = 'rgb(143, 213, 45)';
    
}