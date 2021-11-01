"use strict";

function first() {
    //задержка выполнения кода на 500мс
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I learn something ${lang}`);
    callback();
}
function done() {
    console.log('I zavershil etot yrok');
}
learnJS('JavaScript', done);