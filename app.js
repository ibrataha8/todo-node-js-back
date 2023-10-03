import express from "express"
import {
    getEmp,
    getEmpByCd,
    createEm
} from "./database.js"

const app = express()

app.get('/getEmp', async (req, res) => {
    const em = await getEmp()
    res.send(em)
})

app.listen(3000)