
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
export async function getTodoById(id) {
    const [rows] = await pool.query('SELECT * FROM `todo` where `id` = ?', [id])
    return rows

}
export async function createTodo(title, body) {
    const [rows] = await pool.query('INSERT INTO `todo`(`title`,`body`) VALUES (?,?)', [title, body])
    return rows

}
export async function updateTodo(id, title, body) {
    const [rows] = await pool.query('UPDATE `todo` SET `title`= ?,`body`= ? WHERE `id`=?', [title, body, id])
    return rows
}
export async function deleteTodo(id) {
    const [rows] = await pool.query('DELETE FROM `todo` WHERE `todo`.`id` = ? ', [id])
    return rows
}
