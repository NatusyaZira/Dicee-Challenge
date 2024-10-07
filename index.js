let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;
let title = document.querySelector('h1');
const image1 = document.querySelector('.img1');
const image2 = document.querySelector('.img2');

image1.setAttribute('src', `images/dice${randomNumber1}.png`);
image2.setAttribute('src', `images/dice${randomNumber2}.png`);

randomNumber1 > randomNumber2 ? title.innerHTML ='🚩Player 1 Wins!' 
    :randomNumber2 > randomNumber1 ? title.innerHTML = 'Player 2 Wins! 🚩'
    :title.innerHTML ='Draw';

