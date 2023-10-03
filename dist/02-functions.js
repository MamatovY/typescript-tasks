"use strict";
function sum(a, b) {
    return a + b;
}
const sum2 = (a, b) => a + b;
sum(2, 2);
function log(name, userId) {
    console.log('Hello', name, 'width ID', userId || 'anonym');
}
log('Mikhail', '213');
function crash() {
    throw new Error('crash');
}
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
