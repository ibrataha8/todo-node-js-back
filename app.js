import express from "express"
import cors from "cors";
import {
    getTAllTodo,
    getTodoByIdSpe,
    createNewTodo,
    updateTodoById,
    deleteTodoById,
    updateCompletedTodoById,
    getTodoComplt,
    getTodoNotComplt
} from "./Controller/Todo.js"

const app = express()
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    })
)
// recuperer data in request body
app.use(express.json());

app.get('/getTodo', getTAllTodo)
app.get('/getTodoCompleted', getTodoComplt)
app.get('/getTodoNotCompleted', getTodoNotComplt)
app.get('/getTodoById/:id/:name', getTodoByIdSpe)
app.post('/creteTodo/', createNewTodo)
app.delete('/deleteTodo/:id', deleteTodoById)
app.post('/updateTodoCmptd/:id', updateCompletedTodoById)
app.put('/updateTodo/:id', updateTodoById)
app.listen(3000, () => {
    console.log('running server on port 3000')
})