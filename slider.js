// DOM declarations
let button1 = document.querySelector('button.button1');
let button2 = document.querySelector('button.button2');
let button3 = document.querySelector('button.button3');
let button4 = document.querySelector('button.button4');
let right = document.getElementById('rightB');
let left = document.getElementById('leftB');
let divContainer = document.getElementById('carouselImg');

// Global Variables
let album = 2;
let currSlide = 0;
divContainer.style.backgroundImage = picArray[album][currSlide];

right.addEventListener('click', () => {
    if(currSlide == picArray[album].length - 1){
        currSlide = 0;
        divContainer.style.backgroundImage = picArray[album][currSlide];
    }
    else {
        currSlide = currSlide + 1;
        divContainer.style.backgroundImage = picArray[album][currSlide];
    }
});

left.addEventListener('click', () => {
    if(currSlide <= 0){
        currSlide = picArray[album].length - 1;
        divContainer.style.backgroundImage = picArray[album][currSlide];
    }
    else {
        currSlide = currSlide - 1;
        divContainer.style.backgroundImage = picArray[album][currSlide];
    }
});

button1.addEventListener('click', () => {
    album = 0;
    currSlide = 0;
    divContainer.style.backgroundImage = picArray[album][currSlide];
});

button2.addEventListener('click', () => {
    album = 1;
    currSlide = 0;
    divContainer.style.backgroundImage = picArray[album][currSlide];
});

button3.addEventListener('click', () => {
    album = 2;
    currSlide = 0;
    divContainer.style.backgroundImage = picArray[album][currSlide];
});

button4.addEventListener('click', () => {
    album = 3;
    currSlide = 0;
    divContainer.style.backgroundImage = picArray[album][currSlide];
});