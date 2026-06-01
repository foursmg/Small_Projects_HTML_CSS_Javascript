
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

    if(userVal== 'rock' && botVal=='rock'){
        document.querySelector('#userdisplay').innerText= 'Rock';
        document.querySelector('#winsdisplay').innerText= 'TIE';
        document.querySelector('#botdisplay').innerText= 'Rock';
        document.querySelector('winsdisplay').style.backgroundColor='white';
    }
    if(userVal== 'rock' && botVal=='paper'){
        document.querySelector('#userdisplay').innerText= 'Rock';
        document.querySelector('#winsdisplay').innerText= 'Paper wins';
        document.querySelector('#botdisplay').innerText= 'Paper';
        
    }
    if(userVal== 'rock' && botVal=='scissor'){
        document.querySelector('#userdisplay').innerText= 'Rock';
        document.querySelector('#winsdisplay').innerText= 'Scissor wins';
        document.querySelector('#botdisplay').innerText= 'Scissor';
        
    }
    if(userVal== 'paper' && botVal=='paper'){
        document.querySelector('#userdisplay').innerText= 'Paper';
        document.querySelector('#winsdisplay').innerText= 'TIE';
        document.querySelector('#botdisplay').innerText= 'paper';
        document.querySelector('winsdisplay').style.backgroundColor='white';
    }
    if(userVal== 'paper' && botVal=='scissor'){
        document.querySelector('#userdisplay').innerText= 'Paper';
        document.querySelector('#winsdisplay').innerText= 'scissor';
        document.querySelector('#botdisplay').innerText= 'Scissor';
    }
    if(userVal== 'scissor' && botVal=='scissor'){
        document.querySelector('#userdisplay').innerText= 'scissor';
        document.querySelector('#winsdisplay').innerText= 'TIE'
        document.querySelector('#botdisplay').innerText= 'Scissor';
        document.querySelector('winsdisplay').style.backgroundColor='white';
    }
}