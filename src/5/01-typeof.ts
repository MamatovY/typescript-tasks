import { average } from "../2/02-functions"


let str = 'Hello world'
type x = typeof str

type fn = typeof average //Клонирует все типы у average

const max: fn = (...numbers) => Math.max(...numbers)

max(2, 3, 1)

type returnFn = ReturnType<typeof average> //Берет возвращаемый тип и назначает