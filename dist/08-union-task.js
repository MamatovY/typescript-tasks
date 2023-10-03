"use strict";
const yiman = {
    login: 'MamatovY',
    skills: ['React', 'Redux', 'Next', 'TS'],
    level: 'junior'
};
function gradeDeveloper(obj) {
    if (obj.level === 'junior')
        obj.level = 'middle';
    else {
        obj.level = 'senior';
    }
    return obj;
}
console.log(gradeDeveloper(yiman));
console.log(yiman);
