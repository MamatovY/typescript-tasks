"use strict";
const yiman = {
    login: 'MamatovY',
    skills: ['React', 'Redux', 'Next', 'TS'],
    level: 'junior'
};
function gradeDeveloper(obj, newsLevel) {
    obj.level = newsLevel;
}
gradeDeveloper(yiman, 'middle');
