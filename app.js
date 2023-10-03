import express from "express"
import bodyParser from "body-parser"
import {
    getTodo,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
} from "./database.js"

const app = express()
// recuperer data in request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/getTodo', async (req, res) => {
    const allTodo = await getTodo()
    res.send(allTodo)
})
app.get('/getTodoById/:id/:name', async (req, res) => {
    const id = req.params
    const todoById = await getTodoById(id)
    res.send(todoById)
})
app.post('/creteTodo/', async (req, res) => {
    const title = req.body.title
    const body = req.body.body
    const createTodoNew = await createTodo(title, body)
    res.send(createTodoNew)
})
app.delete('/deleteTodo/:id', async (req, res) => {
    const id = req.params.id
    const deleteTodoNew = await deleteTodo(id)
    res.send(deleteTodoNew)
})

app.put('/updateTodo/:id', async (req, res) => {
    const id = req.params.id
    const newTitle = req.body.title
    const newBody = req.body.body
    const newTodo = await updateTodo(id, newTitle, newBody)
    res.send(newTodo)
})
app.listen(3000)