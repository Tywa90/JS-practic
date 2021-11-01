// --------  video-016 Functions
function showFirstMessage () {
    console.log("hello first");
}
showFirstMessage();

function showFirstMessage1() {
    console.log("Hello world");
}
showFirstMessage1();

function showFirstMessage2(text) {
    console.log(text);
}
showFirstMessage2("Hello world2");


let num = 20;
function showFirstMessage3(text) {
    console.log(text);
    let num = 100;
}
showFirstMessage3("Hello world3");
console.log(num);

function showFirstMessage4(text) {
    console.log(text);
    num = 100;
}
showFirstMessage4("Hello world4");
console.log(num);


function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 3));
console.log(calc('Tywa', 3));

function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log('Hello');
};
logger();

//const calc1 = (a, b) => { return a + b }; // стрелочная функция
