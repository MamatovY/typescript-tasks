export { }

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei'

type Names = Record<string, number>
type BrandNames = Record<WellKnownBrands, string>

// const myBrands: BrandNames = {
//     apple: 'apple',
// }

interface Todo {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
    description: string
}

type SimpleTodo = Pick<Todo, 'id' | 'title' | 'completed'>

const todo1: SimpleTodo = {
    id: 1,
    title: 'todo1',
    completed: false,
}

type SimpleTodo2 = Omit<Todo, 'createdAt' | 'description'>

type NewTodo = Pick<Todo, 'title' | 'description'>