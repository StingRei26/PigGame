/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gamePlaying, score; 

init(); 

var lastDice; 

document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gamePlaying) {

    // 1. Random number
    var  dice = Math.floor(Math.random() * 6 ) + 1; 
    var  dice2 = Math.floor(Math.random() * 6 ) + 1; 

    // 2. Display the resut 
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png'; 

    // Dice two 
    var diceDom = document.querySelector('.dice2');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice2 + '.png'; 


    // 3. Update the round score IF the rolled number is NOT a 1 //// also added part one of the challange 
    
    if (dice === 6 && lastDice === 6){
    //Player looses score

    scores[activePlayer] = 0;
    document.querySelector('#score-' + activePlayer).textContent = '0';
    
    nextplayer(); 
    
    } else if (dice !==1 && dice2 !==1){
    //Add score 
    roundScore += (dice + dice2); 
    document.querySelector('#current-' + activePlayer).textContent = roundScore
     } else {

    //Next player 
    nextplayer();
    
  } 
    // 4 player loses score if he roles 2x6 in a row 

    lastDice = dice; 
   



     }
});




document.querySelector('.btn-hold').addEventListener('click', function(){

   if (gamePlaying) {

    // Add CUREENT score to GLOBAL score 
    scores[activePlayer] += roundScore;   // same as scores[activePlayer] = scores[activePlayer] + roundScore; 

// Update the UI

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

// Check if player won game

if (scores[activePlayer] >= score) {
    document.querySelector('#name-' + activePlayer).textContent = "WINNER!";
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); 
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 
    gamePlaying = false;
} else {
    // Next player
    nextplayer(); 
    
    } 
  } 

});


function nextplayer () {activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;
    document.getElementById('current-0').textContent = '0'; 
    document.getElementById('current-1').textContent = '0'
    document.querySelector('.player-0-panel').classList.toggle('active'); 
    document.querySelector('.player-1-panel').classList.toggle('active'); 
    document.querySelector('.dice').style.display ='none'; 
    document.querySelector('.dice2').style.display ='none'; 
 };

document.querySelector('.btn-new').addEventListener('click', init); 

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0; 
    gamePlaying = true;
    score = document.getElementById("score").value; 
    document.querySelector('.dice').style.display ='none'; 
    document.querySelector('.dice2').style.display ='none'; 
    document.getElementById('score-0').textContent = '0'; 
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner'); 
    document.querySelector('.player-1-panel').classList.remove('winner'); 
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');   
    
        
}



/*

YOUR 3 CHALLENGES
Change the game to follow these rules:

-1. A player looses his ENTIRE score when he rolls two 6 in a row. 

-After that, it's the next player's turn. 


(Hint: Always save the previous dice roll in a separate variable)


///COMPLATED 
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. 
(Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)




///COMPLETED 
3. Add another dice to the game, so that there are two dices now. 
The player looses his current score when one of them is a 1. 
(Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)

*/


