// const btn = document.querySelector('button'),
//     overlay = document.querySelector('.overlay')
// btn.onclick = function () {
//     alert('Click');
// };

// btn.onclick = function () {
//     alert('Second Click');  //переписывает первый кликбвыполнится только эта функция
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });
// // btn.addEventListener('click', () => {
// //     alert('Second Click');
// // });

// btn.addEventListener('mouseenter', (e) => {  //обработчик событий. При наведении мышки срабатывает функция
//     // console.log('mouse hover');
//     console.log(e.target);
//     e.target.remove();
// });

// const deleteElement = (e) => {
//     console.log(e.target);
// };
// btn.addEventListener('click', deleteElement);
// btn.removeEventListener('click', deleteElement);

// let i = 0;
// const deleteElement = (e) => { 
//     console.log(e.target); //один раз при клике сработает функцияб после чего удалится
//     i++;
//     if (i== 1) {
//         btn.removeEventListener('click', deleteElement); 
//     }
// };
// btn.addEventListener('click', deleteElement);


// const deleteElement = (e) => { 
//     console.log(e.currentTarget);
//     console.log(e.type);
// };
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// const link = document.querySelector('a');
// link.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log(event.target);
// });

const btns = document.querySelectorAll('button'),
     overlay = document.querySelector('.overlay');
const deleteElement = (e) => { 
    console.log(e.currentTarget);
    console.log(e.type);
};
btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);
btns.forEach(item => {
    item.addEventListener('click', deleteElement);
});  
const link = document.querySelector('a');
link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.target);
});