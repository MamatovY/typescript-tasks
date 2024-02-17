export { }

interface Todo {
    id: string,
    title: string,
    description?: string,
    completed: boolean,
    createAt?: number
}

type ReadOnlyTodo = Readonly<Todo>

type PartialTodo = Partial<Todo> //Делает все поля не обязательными
function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
    return { ...todo, ...fieldsToUpdate }
}

type RequiredTodo = Required<Todo> //Делает все поля обязательными