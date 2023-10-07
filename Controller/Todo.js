import {
    getTodo,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
    updateCompletedTodo,
    getTodoCompt,
    getTodoNotCompt

} from "../database.js"

export const getTAllTodo = async (req, res) => {
    const allTodo = await getTodo()
    res.send(allTodo)
}
export const getTodoByIdSpe = async (req, res) => {
    const id = req.params
    const todoById = await getTodoById(id)
    res.send(todoById)
}
export const createNewTodo = async (req, res) => {
    const title = req.body.title
    const createTodoNew = await createTodo(title)
    res.send(createTodoNew)
}
export const updateTodoById = async (req, res) => {
    const id = req.params.id
    const newTitle = req.body.newTitle
    const newUpdateTodo = await updateTodo(id, newTitle)
    res.send(newUpdateTodo)
}
export const deleteTodoById = async (req, res) => {
    const id = req.params.id
    const deleteTodoNew = await deleteTodo(id)
    res.send(deleteTodoNew)
}
export const updateCompletedTodoById = async (req, res) => {
    const id = req.params.id
    const cpmtTodo = await updateCompletedTodo(id)
    res.send(cpmtTodo)
}
export const getTodoComplt = async (req, res) => {
    const allTodoCmp = await getTodoCompt()
    res.send(allTodoCmp)
}

export const getTodoNotComplt = async (req, res) => {
    const allTodoNotCmp = await getTodoNotCompt()
    res.send(allTodoNotCmp)
}
