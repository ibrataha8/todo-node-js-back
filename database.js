
import mysql from 'mysql2';
import 'dotenv/config'

const pool = mysql.createPool({
    host: process.env.localhost,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
}).promise();
async function getEmp() {
    const [rows] = await pool.query('SELECT * FROM `employe` ')
    return rows

}
async function getEmpByCd(code) {
    const [rows] = await pool.query('SELECT * FROM `employe` where `code_employe` = ?', [code])
    return rows

}

async function createEm(nom, sal) {
    const [rows] = await pool.query('INSERT INTO `employe`(`nom_employe`,`salaire`) VALUES (?,?)', [nom, sal])
    return rows

}
