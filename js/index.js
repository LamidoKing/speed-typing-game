window.addEventListener('load', init)

const levels = {
    novice: 10,
    amateur: 7,
    pro: 5,
    vetaran: 3,
    master: 1 
}

currentLevel = levels.novice
let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

function init () {
    seconds.innerHTML = currentLevel
    showWords(words)
    wordInput.addEventListener('input', matchInput)
    setInterval(timeCountDown, 1000)
    setInterval(statusCheck, 1000)

}

function showWords (words) {
    const randomIndex = Math.floor(Math.random() * words.length);

    currentWord.innerHTML = words[randomIndex] 
}

function timeCountDown() {
    if(time > 0){
        time--
    }
    else if (time === 0) {
        isPlaying = false
    }

    timeDisplay.innerHTML = time
}

function statusCheck() {
     (!isPlaying && time === 0) && (
         message.innerHTML = 'Game Over!!!!', 
         score = -1
     ) 
}

function matchInput() {
    if(matchWord()) {
        isPlaying = true
        time = currentLevel
        showWords(words)
        wordInput.value = ''
        score++
    }
    score === -1 ? scoreDisplay.innerHTML = 0 : scoreDisplay.innerHTML = score
}

function matchWord() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!'
        return true
    } else {
        message.innerHTML =  ''
        return false
        
    }

}