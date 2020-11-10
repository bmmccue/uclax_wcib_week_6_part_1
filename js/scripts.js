console.log('Hello from js/scripts.js!');

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i < 7; i++){

  const newImage = document.createElement('img');
  newImage.setAttribute('src', '/images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(){
    newImage.setAttribute('src', '/images/pic' + i + '.jpg')

  }
}

/* Wiring up the Darken/Lighten button */
