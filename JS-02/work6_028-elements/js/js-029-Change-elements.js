'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = document.querySelectorAll('.heart'), //hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'); //oneHeart = wrapper.querySelector('.heart')
    

// box.style.backgroundColor = 'aqua';
// box.style.width = '500px';

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'orange';

// btns[2].style.cssText = 'border: 2px solid red; border-radius: 100%';

// for (let i=0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

const diva = document.createElement('div');
// const text = document.createTextNode('Tyt byl ya');

diva.classList.add('black');
// document.body.append(diva);

wrapper.append(diva);
// wrapper.appendChild(diva);

// wrapper.prepend(diva);

// wrapper.insertBefore(diva, hearts[1]);

// hearts[0].before(diva);
// hearts[0].after(diva);

// // circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

diva.innerHTML = "<h1>Hello World</h1>";

// diva.textContent = "<h1>Hello";

// diva.insertAdjacentHTML("beforebegin", '<h2>H2 - Hello</h2>');
diva.insertAdjacentHTML('afterend', '<h2>H2 - Hello</h2>');