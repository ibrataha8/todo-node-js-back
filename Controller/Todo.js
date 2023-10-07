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
export const getTodoById = async (req, res) => {
    const allTodo = await getTodo()
    res.send(allTodo)
}
export const createTodo = async (req, res) => {
    const allTodo = await getTodo()
    res.send(allTodo)
}
export const updateTodo = async (req, res) => {
    const allTodo = await getTodo()
    res.send(allTodo)
}
export const deleteTodo = async (req, res) => {
    const allTodo = await getTodo()
    res.send(allTodo)
}
export const updateCompletedTodo = async (req, res) => {
    const allTodo = await getTodo()
    res.send(allTodo)
}
export const getTodoCompt = async (req, res) => {
    const allTodo = await getTodo()
    res.send(allTodo)
}

export const getTodoNotCompt = async (req, res) => {
    const allTodo = await getTodo()
    res.send(allTodo)
}
