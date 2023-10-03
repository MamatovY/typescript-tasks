"use strict";
const staticX = "loading";
const arr = [];
function printId(id) {
    if (typeof id === 'string')
        console.log(id.toUpperCase());
    else
        console.log(id);
}
function welcome(person) {
    if (Array.isArray(person)) {
        console.log('Hello ', person.join(' '));
        return person.length;
    }
    else {
        console.log('Hello ', person);
        return person;
    }
}
