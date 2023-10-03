
import mysql from 'mysql2';
import 'dotenv/config'

const pool = mysql.createPool({
    host: process.env.localhost,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
}).promise();

const result = await pool.query('SELECT * FROM `employe` ')
console.log(result[0])