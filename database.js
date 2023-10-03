
import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mabase'
}).promise();

const result = await pool.query('SELECT * FROM `employe` ')
console.log(result[0])