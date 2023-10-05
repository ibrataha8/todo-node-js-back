import express from "express"
import bodyParser from "body-parser"
import {
    getTodo,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
    updateCompletedTodo,
    getTodoCompt
} from "./database.js"
import cors from "cors";

const app = express()
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    })
)
// recuperer data in request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/getTodo', async (req, res) => {
    const allTodo = await getTodo()
    res.send(allTodo)
})

app.get('/getTodoCompleted', async (req, res) => {
    const allTodoCmp = await getTodoCompt()
    res.send(allTodoCmp)
})


app.get('/getTodoById/:id/:name', async (req, res) => {
    const id = req.params
    const todoById = await getTodoById(id)
    res.send(todoById)
})
app.post('/creteTodo/', async (req, res) => {
    const title = req.body.title
    const createTodoNew = await createTodo(title)
    res.send(createTodoNew)
})
app.delete('/deleteTodo/:id', async (req, res) => {
    const id = req.params.id
    const deleteTodoNew = await deleteTodo(id)
    res.send(deleteTodoNew)
})
app.post('/updateTodoCmptd/:id', async (req, res) => {
    const id = req.params.id
    const cpmtTodo = await updateCompletedTodo(id)
    res.send(cpmtTodo)
})

app.put('/updateTodo/:id', async (req, res) => {
    const id = req.params.id
    const newTitle = req.body.newTitle
    const newTodoUpdated = await updateTodo(id, newTitle)
    const allTodo = await getTodo()
    res.send(allTodo)
})
app.listen(3000)