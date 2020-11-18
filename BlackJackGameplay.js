<html>
<div class = "game">
    <div class = "game">
        <h1>Blackjack!</h1>
        
    <div class = "Game Content">
        <div class = "Options">
            <input type = "link" id = "clickStart" class = "click" value = "Start" onclick = "beginBlackJack()">
            <input type = "link" class = "click" value = "Hit" onclick = "hit()">
            <input type = "link" class = "click" value = "Stay" onclick = "stay()">
            </div>
            
                <div class = "update" id = "update"></div>
                
            <div id = "cardDeck" class = "cardDeck">
                <div id = "cardCounter">52</div>
            </div>

            <div id = "player" class = "player">
                </div>
            <div id = "house" class = "house">
                </div>

            <div class = "clear"></div>
    </div>
</div>
</html>

var cardDeck = new Array();
var cardSuits = ["Spades", "Clubs", "Diamonds", "Hearts"];
var cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

function makeDeck() {
    cardDeck = new Array();
    for(var x = 0; x < cardValues.length; x++) {
        for(var z = 0; z < cardSuits.length; z++) {
            var points = parseInt(cardValues[x]);
            if(cardValues[x] == "Jack" || cardValues[x] == "Queen" || cardValues[x] == "King")
                points = 10;
            if(cardValues[x] == "Ace" )
                if(cardValues[x] > 11)
                    points = 1;
                if(cardValues[x] < 11)
                    points = 11;
            var card = {Value: cardValues[x], Suit: cardSuits[z], Points: points};
            cardDeck.push(card);
        }
    }
}
function shuffleDeck() {
    for(var x = 0; x < 500; x++) {
        var playerCards = Math.floor(Math.random() * cardDeck.length);
        var houseCards = Math.floor(Math.random() * cardDeck.length);
        var hold = cardDeck[playerCards];
        
        cardDeck[playerCards] = cardDeck[houseCards];
        cardDeck[houseCards] = hold;
    }
}
function dealCards() {
    for(var x = 0; x < 2; x++) {
        for(var z = 0; z < player.length; z++) {
            var card = cardDeck.pop();
            player[i].Cards.push(card);
            statusPoints();
        }
    }
    statuscardDeck();
}


function beginBlackJack() {
    document.getElementById('clickStart').value = "Restart";
    document.getElementById("update").style.display = "N/A";
    userPlayer = 0;
    makeDeck();
    shuffleDeck();
    dealCards();
    document.getElementById('player ' + userPlayer).classList.add('current');
}