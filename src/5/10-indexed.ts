export { }

interface DataModel {
    id: string,
    title: string,
    elements: {
        header: {
            title: string,
            description: string,
            links: string[]
        },
        body: {
            title: string,
            content: {}
        },
        footer: {
            description: string,
            links: string[]
        }
    }
}

type T0 = DataModel['elements']['body']

type someTuple = [number, string, boolean, ...string[]]
const arr: someTuple = [1, 'dsa', true,]

type T1 = someTuple[1]

const sizes = ['small', 'medium', 'large'] as const

type T2 = typeof sizes[number] //Из данных можно сделать юнион