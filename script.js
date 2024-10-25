const card = [
    '🐶', '🐶',
    '🐱', '🐱', 
    '🐭', '🐭', 
    '🐰', '🐰',
    '🐻', '🐻', 
    '🐼', '🐼', 
    '🐷', '🐷', 
    '🐦', '🐦', 
];

let firstCard = null;
let secondCard = null;
let thirdCard = false;

function shuffle(array) {
    for (let i = aray.length - 1; i > 0; i--) {
        const.j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array [j], array[i]];
    }
}

function createBoard() {
    const gameBoard = document.querySelector('.game-board');
    shuffle(cards);
    cards.forEach(card => {
        const cardElement = document.createElement('div'); 
        cardElement.classList.add('card');
        cardElement.dataset.icon = card;
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}  

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.clasList.add('flipped');
    this.textContent = this.dataset.icon;

    if (!firstCard) {
        fisrtCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.icon === secondCard.dataset.icon) {
        disableCard();
    } else {
        unflippedCards();
    }
}

function disableCard() {
    firstCard.removeEventListener('click', flipCard);

    secondCard.removeEventListener('click', flipCard);
        resetBoard();
}

function unflippedCards() {
    lockBoard = true;
    setTimeout(() => {

        firstCard.clasList.remove('flipped');

        secondCard.classList.remove('flipped');
            firstCard.textContent = '';
            secondCard.textContent = '';
            resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

document.getElementById('reset-button').addEventListener('click', () => {
    document.querySelector('.game-board').innerHTML = '';
    creatorBoard();
});

creatorBoard();