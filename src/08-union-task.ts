type Level = 'junior' | 'middle' | 'senior'

interface Developer {
    login: string,
    skills: string[],
    level: Level
}

const yiman: Developer = {
    login: 'MamatovY',
    skills: ['React', 'Redux', 'Next', 'TS'],
    level: 'junior'
}



function gradeDeveloper(obj: { level: Level }): {} {
    if (obj.level === 'junior')
        obj.level = 'middle'
    else {
        obj.level = 'senior'
    }
    return obj
}


console.log(gradeDeveloper(yiman));
console.log(yiman);