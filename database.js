import mysql from 'mysql2';
import 'dotenv/config'
const pool = mysql.createPool({
    host: process.env.localhost,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
}).promise();
export async function getTodo() {
    const [rows] = await pool.query('SELECT * FROM `todo` ')
    return rows
}
export async function updateCompletedTodo(id) {
    const [rows] = await pool.query("UPDATE `todo` SET `completed` = !`completed` WHERE `todo`.`id` = ? ", [id])
    return rows

}

export async function getTodoCompt() {
    const [rows] = await pool.query('SELECT * FROM `todo` where `todo`.`completed`= 1 ')
    return rows
}
export async function getTodoNotCompt() {
    const [rows] = await pool.query('SELECT * FROM `todo` where `todo`.`completed`= 0 ')
    return rows
}
export async function getTodoById(id) {
    const [rows] = await pool.query('SELECT * FROM `todo` where `id` = ?', [id])
    return rows

}
export async function createTodo(title) {
    const [rows] = await pool.query('INSERT INTO `todo`(`title`) VALUES (?)', [title])
    return rows

}
export async function updateTodo(id, title) {
    const [rows] = await pool.query('UPDATE `todo` SET `title`=?  WHERE `id`=?', [title, id])
    return rows
}
export async function deleteTodo(id) {
    const [rows] = await pool.query('DELETE FROM `todo` WHERE `todo`.`id` = ? ', [id])
    return rows
}