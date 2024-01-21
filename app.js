const wordElement = document.querySelector('.word');
const oldWordsElement = document.querySelector('.old-words');

// Wortliste
let wordList = [];
let currentWord = '';
let previousWords = [];

fetch('words.txt').then(function(response) {
    return response.text();
}).then(function(text) {
    wordList = text.split(',');
    console.log(wordList);
});


function generateWord() {
    if(currentWord) {
        previousWords.push(currentWord);
        oldWordsElement.innerHTML = previousWords.join(', ');
    }

    currentWord = getRandomWord();
    wordElement.innerHTML = currentWord;
}


function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}


function getRandomWord() {
    return wordList[getRandomNumber(wordList.length)];
}

