// const timerId = setTimeout(function(text) {
//     console.log(text);
    
// }, 3000, 'Hello');

const timerId = setTimeout(logger, 2000);
function logger () {
    console.log('text');
}