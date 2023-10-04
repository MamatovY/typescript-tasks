type Level = 'junior' | 'middle' | 'senior'

interface Developer {
    login: string,
    skills: string[],
    level: Level
}

export const yiman: Developer = {
    login: 'MamatovY',
    skills: ['React', 'Redux', 'Next', 'TS'],
    level: 'junior'
}



function gradeDeveloper(obj: { level: Level }, newsLevel: Level): void {
    obj.level = newsLevel
}


gradeDeveloper(yiman, 'middle')