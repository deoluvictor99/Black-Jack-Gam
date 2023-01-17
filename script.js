let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
let cardsEl = document.querySelector('#cards-el');
let sumEl = document.getElementById('sum-el');
let player = {
    name: 'Deolu',
    chips: 10
};
let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ': $' + player.chips;

startGame = function(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}

renderGame = function(){

    if (sum < 21){
        message = 'do you want to draw a new card?';
    }else if(sum === 21){
        message = 'Congrats! you have hit Black Jack';
        hasBlackJack = true;
    }else{
        message = 'Sorry, you are out of the game';
        isAlive = false
    }

    cardsEl.textContent = 'Cards: ';

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + ' ';
    }

    sumEl.textContent = 'sum: ' + sum;
    messageEl.textContent = message;
}

newCard = function(){
    if(isAlive === true && hasBlackJack === false){

        let newCard = getRandomCard();
        cards.push(newCard);
        sum += newCard;
        renderGame();

    }
}

function getRandomCard(){
    let result =  Math.floor(Math.random() * 13) + 1;
        if(result === 1){
            return 11;
        }else if(result > 10){
            return 10;
        }else{
            return result;
        }
}
